import { Modal, Box, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Image, Flex, Text, HStack, VStack ,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Radio,
    RadioGroup,
    Button,
    FormHelperText,} from "@chakra-ui/react";

import Frete from "../utils/Frete"

const ProductModal = ({isOpen, onClose, Product}) => {
    const ProductFoto = Product.product.images[1]

    return (
        <Modal size={"4xl"} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textTransform={"capitalize"}>{Product.product.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <HStack>
                        <Image boxSize='300px' src={ProductFoto}/>         
                    <VStack>
                        <Box>
                            <Text>{Product.product.description}</Text>
                        </Box>
                        <Text>Calcular frete</Text>
                        <FormControl isRequired>
                            <HStack>
                                <VStack>
                                    <FormLabel >CEP Origem</FormLabel>
                                    <Input id="cep_origem" type='number' value="82220000" />
                                </VStack>
                                <VStack>
                                    <FormLabel >CEP Destino</FormLabel>
                                    <Input id="cep_destino" type='number' value="87300090" />
                                </VStack>
                                    
                            </HStack>
                                <RadioGroup defaultValue='41106'>
                                    <HStack spacing='24px'>
                                        <Radio id="cod_servico" value='41106'>PAC</Radio>
                                        <Radio id="cod_servico" value='40010'>Sedex</Radio>
                                        <Radio id="cod_servico" value='40215'>Sedex10</Radio>
                                    </HStack>
                                </RadioGroup>
                                <Button
                                    mt={4}
                                    colorScheme='teal'
                                    type='submit'
                                    onClick={Frete}
                                >
                                    Calcular
                                </Button>
                        </FormControl>

                    </VStack>
                    </HStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ProductModal;