import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { BrokenTagsIcon } from '../components/icons/BrokenTagsIcon'
import { TuningForkIcon } from '../components/icons/TuningForkIcon'

const Equipe: NextPage = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Flex py={20} px={6} bg="#FEB4B3" pos="relative">
        <Heading
          textTransform={'uppercase'}
          fontSize={'xxx-large'}
          fontWeight={'extrabold'}
          color="bege"
          zIndex={2}
        >
          Equipe
        </Heading>
        <Box
          pos={'absolute'}
          top={0}
          bottom={0}
          right={0}
          h={`calc(100% + 55px)`}
          overflowX="hidden"
        >
          <Center>
            <BrokenTagsIcon
              boxSize={80}
              color="violeta.500"
              pos="relative"
              right={-100}
            />
          </Center>
        </Box>
        <Box pos="absolute" bottom={4} left={10} zIndex={2}>
          <TuningForkIcon color="verde-oliva.500" boxSize={14} />
        </Box>
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Equipe
