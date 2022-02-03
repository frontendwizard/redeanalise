import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { EyeIcon } from '../components/icons/EyeIcon'
import { ZapIcon } from '../components/icons/ZapIcon'
import Layout from '../components/Layout'

const SobreNos: NextPage = () => {
  return (
    <Layout>
      <Flex py={20} px={6} bg="verde-oliva.500" pos="relative">
        <Heading
          textTransform={'uppercase'}
          fontSize={'xxx-large'}
          fontWeight={'extrabold'}
          color="preto"
          zIndex={2}
        >
          Sobre Nós
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
      <VStack spacing={4} p={6} bg="bege">
        <Heading color="verde-oliva.500" pos="relative" zIndex={2}>
          Rede nacional de pesquisadores voluntários para o enfrentamento da
          COVID-19
        </Heading>
        <Text>
          O grupo Análise COVID-19 nasceu de uma iniciativa na rede social{' '}
          <i>Twitter</i> para a criação de um espaço construtivo e de discussão
          a partir da reunião de pesquisadores, profissionais e pessoas
          engajadas no tema. Somos uma equipe multidisciplinar e
          multiprofissional, composta por mais de 170 membros no <i>Facebook</i>{' '}
          e mais de 50 participantes nos grupos dessa iniciativa no{' '}
          <i>Whatsapp</i>. Atualmente, contamos com as principais linhas de
          frente:
        </Text>
        <OrderedList>
          <ListItem>Coleta de dados e montagem de tabelas</ListItem>
          <ListItem>Modelagem e previsao dos dados</ListItem>
          <ListItem>Montagem de textos para divulgação</ListItem>
        </OrderedList>
        <Text>
          Os principais objetivos do grupo Análise COVID-19 consistem em
        </Text>
      </VStack>
      <VStack spacing={4} bg="verde-oliva.500" color="bege" p={6}>
        <Heading>Objetivos do grupo</Heading>
        <OrderedList>
          <ListItem>
            Coletar e organizar os dados de municípios com casos positivos para
            o COVID-19, bem como realizar igual procedimento no acompanhamento e
            monitoramento dos estados brasileiros;
          </ListItem>
          <ListItem>
            Propor um refinamento de análise considerando não apenas os casos
            pelas regiões, como a taxa de incidência/crescimento nas populações,
            elaborar novas taxas e propostas de novos parâmetros para a
            identificação de aceleração ou desaceleração da transmissão;
          </ListItem>
          <ListItem>
            Analisar e propor fatores modificadores de curva, como densidade
            urbana, distribuição etária da população, identificação de
            populações com mais concentração de um ou mais grupos de risco,
            quantidade de leitos hospitalares, UTIs, respiradores, etc;
          </ListItem>
          <ListItem>
            Utilizar técnicas de projeção e previsão de curvas, a partir de
            métodos já estabelecidos na literatura, como o método SIR/SIER e
            outras análises de correlação ou fitness de curva;
          </ListItem>
          <ListItem>
            Criação de imagens, mapas e gráficos ilustrativos para
            compartilhamento com a população;
          </ListItem>
          <ListItem>Criação de conteúdo acessível para PCDs;</ListItem>
          <ListItem>
            Montagem de textos e material para divulgação e popularização
            científica.
          </ListItem>
        </OrderedList>
      </VStack>
      <VStack alignItems={'stretch'} spacing={4} bg="bege" p={6}>
        <Heading color="verde-oliva.500">Nossa equipe</Heading>
        <Flex justifyContent="flex-start">
          <Button
            variant="outline"
            colorScheme="preto"
            borderWidth={2}
            px={8}
            size="sm"
            textTransform={'uppercase'}
          >
            Conheça mais
          </Button>
        </Flex>
      </VStack>
    </Layout>
  )
}

export default SobreNos
