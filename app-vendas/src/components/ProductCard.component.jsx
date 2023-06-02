import { Badge, Card, CardBody,CardHeader, CardFooter, Heading, Image, useDisclosure, Text} from "@chakra-ui/react";

const ProductCard = (Product) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // console.log(Product.product)
  const ProductFoto = Product.product.images[3]
  
  return (

    <>
      <Card>
        <CardHeader><Heading>{Product.product.title}</Heading></CardHeader>
        <br></br>
        <CardBody>
          <Image boxSize='300px' src={ProductFoto}></Image>
          <Heading>Price: ${Product.product.price}</Heading>
          <Text>{Product.product.description}</Text>
          <Text>{Product.product.brand}</Text>
        
        </CardBody>
      
      
      </Card>
    
    </>
    
  )
}

export default ProductCard