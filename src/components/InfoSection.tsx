import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { CurvedSectionBottom } from './CurvedSectionBottom'
import { CurvedSectionTop } from './CurvedSectionTop'
import { TuningForkIcon } from './icons/TuningForkIcon'

export const InfoSection = () => (
  <>
    <CurvedSectionTop
      w="full"
      h={{ base: 16, lg: 32 }}
      bg="bege"
      color="laranja.500"
    />
    <Box pos="relative" bg="laranja.500">
      <Container maxW={'container.xl'}>
        <Box pos="absolute" top="-40px" right="6">
          <TuningForkIcon color="verde-oliva.500" boxSize="48" />
        </Box>
        <Box pos="relative">
          <Stack spacing={8} py={8} px={6} zIndex={2}>
            <Heading as="h1" fontSize="xx-large" w="80%">
              Nossas estratégias na pandemia
            </Heading>
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
              <Stack spacing={4}>
                <Heading as="h2" fontSize="x-large">
                  Análise e Modelagem de Dados
                </Heading>
                <Text color="branco">
                  Análise de casos, incidências populacionais, criação de
                  índices relacionados com aspectos de vulnerabilidade da
                  COVID-19 e modelagem de dados epidemiológicos a nível
                  municipal
                </Text>
              </Stack>
              <Stack spacing={4}>
                <Heading as="h2" fontSize="x-large">
                  Coleta e Análise de Bancos de Dados
                </Heading>
                <Text color="branco">
                  A partir de boletins epidemiológicos das Secretarias
                  Municipais e Estaduais Brasileiras
                </Text>
              </Stack>
              <Stack spacing={4}>
                <Heading as="h2" fontSize="x-large">
                  Textos de Divulgação Científica
                </Heading>
                <Text color="branco">
                  Elaboração de conteúdos sobre notícias, artigos científicos,
                  desmistificação e combate a fake news e dúvidas enviadas pelos
                  leitores
                </Text>
              </Stack>
            </SimpleGrid>
            <Flex justifyContent="center">
              <Button
                variant="outline"
                colorScheme="preto"
                borderWidth={2}
                px={8}
              >
                SAIBA MAIS SOBRE O COVID-19
              </Button>
            </Flex>
          </Stack>
        </Box>
        <Box
          pos="absolute"
          bottom="-60px"
          transform="auto"
          rotate="60deg"
          left="6"
        >
          <TuningForkIcon color="verde-oliva.500" boxSize="20" />
        </Box>
      </Container>
    </Box>
    <CurvedSectionBottom
      w="full"
      h={{ base: 16, lg: 32 }}
      bg="bege"
      color="laranja.500"
    />
  </>
)
