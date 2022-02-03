import { Box, VStack, Heading, Text, Divider, Flex, Image } from '@chakra-ui/react'

const Destaque = () => {
  return (
    <Box p="4" pos="relative">
      <Image
        src="images/T7h8ds04-unsplash.jpg"
        alt="três máscaras em cima de uma mesa"
        objectFit="cover"
        w="full"
        h="full"
        pos="absolute"
      />
      <VStack bg="azul.500" color="white" p="4" align="flex-start" spacing="4">
        <Text textTransform="uppercase" fontWeight="bold">
          Destaque
        </Text>
        <Heading fontWeight="semibold">
          Caranguejo-ferradura, Sangue Azul, Ameaça de Extinção, Vacinas, Dependência dos Recursos
          Naturais e Pandemia da COVID-19
        </Heading>
        <Divider borderColor="white" borderBottomWidth="medium" opacity="1" w="24" />
        <Text fontWeight="normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Flex justify="space-between" w="full" fontSize="sm" fontWeight="bold">
          <Text>12.08.2021</Text>
          <Text>Por: Rute Gonçalves-de-Andrade</Text>
        </Flex>
      </VStack>
    </Box>
  )
}

export default Destaque
