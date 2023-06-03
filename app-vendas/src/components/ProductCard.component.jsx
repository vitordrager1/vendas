import { Badge, Card, CardBody,CardHeader, CardFooter, Heading, Image, useDisclosure, Text} from "@chakra-ui/react";
import ProductModal from "./ProductModal.component";

const ProductCard = (Product) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // console.log(Product.product)
  const ProductFoto = Product.product.images[1]
  
  return (

    <>
      <Card _hover={{background: "#CFE8FA",color: "dark.500",}} onClick={onOpen}>

        <CardHeader >
          <Text h={'50px'} fontSize={'2xl'}>{Product.product.title}</Text>
        </CardHeader>
          <Text as={'b'}>{Product.product.brand}</Text>
        <CardBody>
          <Image borderRadius={'10'} boxSize='300px' src={ProductFoto}></Image>
          <Text color={"tomato"} fontSize={'2xl'}>Price: ${Product.product.price}</Text>
          {/* <Text>{Product.product.description}</Text> */}
        
        </CardBody>
      
      
      </Card>
      <ProductModal isOpen={isOpen} onClose={onClose} Product={Product}/>
    </>
    
  )
}

export default ProductCard