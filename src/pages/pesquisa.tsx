import { Flex, Heading } from '@chakra-ui/react'
import { NextPage } from 'next'
import Layout from '../components/Layout'

const Pesquisa: NextPage = () => {
  return (
    <Layout>
      <Flex py={20} px={6} bg="azul.500" pos="relative">
        <Heading
          textTransform={'uppercase'}
          fontSize={'xxx-large'}
          fontWeight={'extrabold'}
          color="bege"
          zIndex={2}
        >
          Pesquisa
        </Heading>
      </Flex>
    </Layout>
  )
}

export default Pesquisa
