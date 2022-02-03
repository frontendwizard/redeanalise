import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { EyeIcon } from '../components/icons/EyeIcon'
import { Footer } from '../components/Footer'
import { MostReadItem } from '../components/MostReadItem'
import { Navbar } from '../components/Navbar'
import { Section } from '../components/Section'
import { ZapIcon } from '../components/icons/ZapIcon'

const Covid19: NextPage = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Flex py={20} px={6} bg="violeta.500" pos="relative">
        <Heading
          textTransform={'uppercase'}
          fontSize={'xxx-large'}
          fontWeight={'extrabold'}
          color="bege"
          zIndex={2}
        >
          Covid-19
        </Heading>
        <Box pos={'absolute'} top={0} bottom={0} right={10}>
          <Center>
            <EyeIcon boxSize={60} color="laranja.500" />
          </Center>
        </Box>
        <Box pos="absolute" bottom={-16} left={10} zIndex={2}>
          <ZapIcon color="laranja.500" boxSize={32} />
        </Box>
      </Flex>
      <Box h="430px" bg="bege" w="full" pos="relative">
        <NextImage
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          layout="fill"
          objectFit="cover"
          alt="article's image"
        />
      </Box>
      <Stack spacing="4" bg="bege" px={6} py={10}>
        <Heading color="violeta.500">O que é o COVID-19?</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus libero, bibendum eget
          purus a, rutrum aliquet nunc. Duis vestibulum urna id augue gravida iaculis. Pellentesque
          nec aliquam nisl. Mauris non commodo justo. Quisque vel ipsum velit. Donec dolor mauris,
          feugiat vitae hendrerit sed, pretium vel mi. Nullam eros dui, condimentum at dolor ut,
          blandit ultricies libero. Nulla sapien est, ultrices a sem vitae, porttitor ultricies
          urna. Ut molestie fermentum gravida. Duis ac auctor ligula. Duis congue ex non diam
          pulvinar blandit.
        </Text>
        <Heading color="violeta.500">Como o COVID-19 se espalha?</Heading>
        <Text>
          Como a gripe, o COVID-19 é transmitido de pessoa para pessoa. A evidência científica
          confirma que o COVID-19 é espalhado por gotículas. Isso significa que, quando uma pessoa
          infectada tosse, espirra ou fala, gera gotículas contendo o vírus. Essas gotículas são
          grandes demais e permanecem no ar por muito tempo, e por isso se depositam rapidamente nas
          superfícies circundantes. Nessas diversas superfícies, o COVID-19 permanece ativo de
          maneiras diferentes. Por isso é importante a higienização das mãos e das superfícies o
          mais constantemente possível.
        </Text>
      </Stack>
      <Stack spacing="4" bg="violeta.500" p={6} color="bege">
        <Heading>Abordagens terapêuticas</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus libero, bibendum eget
          purus a, rutrum aliquet nunc. Duis vestibulum urna id augue gravida iaculis.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus libero, bibendum eget
          purus a, rutrum aliquet nunc. Duis vestibulum urna id augue gravida iaculis. Pellentesque
          nec aliquam nisl. Mauris non commodo justo. Quisque vel ipsum velit. Donec dolor mauris,
          feugiat vitae hendrerit sed, pretium vel mi. Nullam eros dui, condimentum at dolor ut,
          blandit ultricies libero. Nulla sapien est, ultrices a sem vitae, porttitor ultricies
          urna. Ut molestie fermentum gravida. Duis ac auctor ligula. Duis congue ex non diam
          pulvinar blandit.
        </Text>
        <OrderedList>
          <ListItem>
            Na tabela abaixo, pode ser observada a descrição de algumas abordagens terapêuticas para
            o enfrentamento da COVID-19. É importante ressaltar que muitos desses tratamentos estão
            passando por diferentes fases de ensaios clínicos com humanos, enquanto que outros
            obtiveram observações em estudos com células ou em modelos animais, necessitando de
            maior comprovação clínica quanto a eficácia e dose de segurança.{' '}
            <NextLink
              href="https://www.who.int/blueprint/priority-diseases/key-action/Table_of_therapeutics_Appendix_17022020.pdf"
              passHref
            >
              <Link isExternal>Tabela da WHO (OMS)</Link>
            </NextLink>
          </ListItem>
          <ListItem>
            Handbook of COVID-19 Prevention and Treatment (escrito pela equipe chinesa, em inglês)
          </ListItem>
        </OrderedList>
      </Stack>
      <Stack spacing="4" bg="bege" p={6}>
        <Heading>Dados sobre o COVID-19</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus libero, bibendum eget
          purus a, rutrum aliquet nunc. Duis vestibulum urna id augue gravida iaculis. Pellentesque
          nec aliquam nisl. Mauris non commodo justo. Quisque vel ipsum velit. Donec dolor mauris,
          feugiat vitae hendrerit sed, pretium vel mi. Nullam eros dui, condimentum at dolor ut,
          blandit ultricies libero. Nulla sapien est, ultrices a sem vitae, porttitor ultricies
          urna. Ut molestie fermentum gravida. Duis ac auctor ligula. Duis congue ex non diam
          pulvinar blandit.
        </Text>
      </Stack>
      <Section title="Leia mais sobre o assunto" bg="laranja.500">
        <VStack>
          <MostReadItem />
          <MostReadItem />
          <MostReadItem />
          <MostReadItem />
        </VStack>
        <Flex justifyContent="center">
          <Button variant="outline" colorScheme="preto" borderWidth={2} px={8} size="sm">
            VER MAIS
          </Button>
        </Flex>
      </Section>
      <Footer />
    </Flex>
  )
}

export default Covid19
