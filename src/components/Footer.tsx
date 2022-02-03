import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { ArrowRightIcon } from './icons/ArrowRightIcon'
import { NAV_ITEMS } from './Navbar'
import LogoHorizontalFundoAzul from '../assets/logo-horizontal-para-azul.svg'
import LogoHorizontalFooter from '../assets/logo-horizontal-footer.svg'

export const Footer = () => (
  <Box as="footer" bg="azul.500" color="bege">
    <Container maxW="container.xl">
      <Stack spacing={8} py={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }}>
          <Flex justifyContent="center">
            {useBreakpointValue({
              base: (
                <HStack spacing={{ base: 6, sm: 8 }}>
                  <Image
                    as={LogoHorizontalFundoAzul}
                    alt="Logo da Rede Análise"
                  />
                  <Box border="1px" borderColor="bege" h={10} />
                  <Text fontSize={{ base: 'md', sm: 'lg' }}>Covid-19</Text>
                </HStack>
              ),
              md: (
                <Flex align="center">
                  <Image as={LogoHorizontalFooter} alt="Logo da Rede Análise" />
                </Flex>
              ),
            })}
          </Flex>
          <Flex
            align="end"
            justify="center"
            display={{ base: 'none', md: 'flex' }}
          >
            <SimpleGrid spacingY={2} spacingX={4} columns={2}>
              {NAV_ITEMS.map(({ label, href }) => {
                return (
                  <NextLink href={href} key={label} passHref>
                    <Link
                      fontFamily="Krub"
                      color="bege"
                      fontWeight="bold"
                      href={href}
                      textTransform="uppercase"
                    >
                      {label}
                    </Link>
                  </NextLink>
                )
              })}
            </SimpleGrid>
          </Flex>
          <Stack spacing={4}>
            <Flex justify="center" pt={{ base: 4, md: 0 }}>
              <IconButton
                colorScheme="azul"
                aria-label="Rede Análise no Facebook"
                icon={<Icon as={FaFacebookF} boxSize={6} />}
                bg="transparent"
                size="lg"
              />
              <IconButton
                colorScheme="azul"
                aria-label="Rede Análise no Twitter"
                icon={<Icon as={FaTwitter} boxSize={6} />}
                bg="transparent"
                size="lg"
              />
              <IconButton
                colorScheme="azul"
                aria-label="Rede Análise no Instagram"
                icon={<Icon as={FaInstagram} boxSize={6} />}
                bg="transparent"
                size="lg"
              />
            </Flex>
            <Text fontSize="x-large">Cadastre-se em nossa newsletter!</Text>
            <Button
              variant="outline"
              color="branco"
              borderColor="branco"
              textTransform={'uppercase'}
              rightIcon={<ArrowRightIcon color="branco" />}
            >
              Email
            </Button>
          </Stack>
        </SimpleGrid>
        <Text fontSize="x-small" textAlign="center">
          © 2021 Rede Análise. Todos os direitos reservados.
          <br />
          Feito com{' '}
          <span role="img" style={{ marginRight: '4px' }} aria-label="amor">
            ❤️{' '}
          </span>
          {` por `}
          <Link isExternal href={`https://twitter.com/frontendwizard`}>
            @frontendwizard
          </Link>
          .
        </Text>
      </Stack>
    </Container>
  </Box>
)
