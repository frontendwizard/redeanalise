import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import { NextPage } from 'next'
import { EyeIcon } from '../components/icons/EyeIcon'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ZapIcon } from '../components/icons/ZapIcon'

const Contato: NextPage = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Flex py={20} px={6} bg="vermelho.500" pos="relative">
        <Heading
          textTransform={'uppercase'}
          fontSize={'xxx-large'}
          fontWeight={'extrabold'}
          color="bege"
          zIndex={2}
        >
          Contato
        </Heading>
        <Box pos={'absolute'} top={0} bottom={0} right={10}>
          <Center>
            <EyeIcon boxSize={60} color="bege" />
          </Center>
        </Box>
        <Box pos="absolute" bottom={-16} left={10} zIndex={2}>
          <ZapIcon color="bege" boxSize={32} />
        </Box>
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Contato
