import {React, useCallback, useEffect, useState } from "react";

import { SimpleGrid, Spinner, Flex, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import axios from "axios";

import ProductCard from '../components/ProductCard.component'

const Pagination = ({request, offset}) => {

    const nextPage = () => {
        request(offset + 20)
    }

    const previousPage = () => {
        if (offset === 0) return
        request(offset - 20)
    }

    return (
        <Flex gap={4}>
            <IconButton onClick={previousPage} icon={<ArrowLeftIcon/>}/>
            <IconButton onClick={nextPage} icon={<ArrowRightIcon/>}/>
        </Flex>
    )
}
const Home = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [offset, setOffset] = useState(0);

    // const {data} = await axios.get('https://dummyjson.com/products'), {
    //   params: {
    //     limit: 10, offset: paramOffset
    //   }
    // }
      const getProduct = useCallback(async (paramOffset) => {
        try {
            setLoading(true)
            const { data } = await axios.get('https://dummyjson.com/products/', {
                    params: {
                    limit: 20,
                    offset: paramOffset
                }
            });
            // const promiseArray = data.results.map(product => { return axios.get(product.url)})
            // const promiseResult = await Promise.all(promiseArray)
            // const productData = promiseResult.map(result => result.data)
            // console.log(data.products.map(p=>p.id))
            setProducts(data.products)
            // console.log(data)
            // console.log(data.products.map(p=>p.id))
            setOffset(paramOffset)
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
            // console.log(products.length)
        }
    }, [])
      useEffect(() => {
        getProduct(0)
    }, [])
    // products = JSON.parse(products)
    const renderProductList = () => {
      // const ProductLength = products.products
        if(loading || !products.length) {
            return (
                <Spinner />
            )
        }

        return (
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' padding={4}>
                {
                    products.map(product =>  {
                        return (
                            // console.log(product)
                            <ProductCard product={product}/>
                        )
                    })
                }
                <Pagination offset={offset} request={getProduct}/>
            </SimpleGrid>
        )
    }
  
  return (
    <div>
      {renderProductList()}
    </div>
  );
};

export default Home;