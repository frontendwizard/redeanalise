import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { FaFacebookF, FaInstagram, FaSearch, FaTwitter } from 'react-icons/fa'

export const NAV_ITEMS = [
  { label: 'Início', href: '/' },
  { label: 'Leia', href: '/leia' },
  { label: 'COVID-19', href: '/covid-19' },
  { label: 'Sobre Nós', href: '/sobre-nos' },
  { label: 'Equipe', href: '/equipe' },
  { label: 'Contato', href: '/contato' },
]

const MobileNav = () => {
  return (
    <VStack
      spacing={4}
      direction="column"
      bg="bege"
      textTransform="uppercase"
      color="azul.500"
      py="8"
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((item) => (
        <NextLink href={item.href} key={item.label} passHref>
          <Link
            colorScheme="azul"
            fontWeight="bold"
            fontSize="lg"
            href={item.href}
          >
            {item.label}
          </Link>
        </NextLink>
      ))}
      <HStack>
        <IconButton
          fontSize={'x-large'}
          variant={'ghost'}
          aria-label="Rede Análise no Facebook"
          icon={<Icon as={FaFacebookF} />}
        />
        <IconButton
          fontSize={'x-large'}
          variant={'ghost'}
          aria-label="Rede Análise no Twitter"
          icon={<Icon as={FaTwitter} />}
        />
        <IconButton
          fontSize={'x-large'}
          variant={'ghost'}
          aria-label="Rede Análise no Instagram"
          icon={<Icon as={FaInstagram} />}
        />
      </HStack>
      <NextLink href="/pesquisa" passHref>
        <LinkBox alignSelf={'stretch'} px={6}>
          <Button
            variant="ghost"
            colorScheme={'azul'}
            _hover={{ bg: 'transparent' }}
            size="lg"
            bg="transparent"
            borderBottom={'2px'}
            borderRadius={'none'}
            isFullWidth
            rightIcon={<Icon as={FaSearch} />}
          >
            Digite sua busca
          </Button>
        </LinkBox>
      </NextLink>
    </VStack>
  )
}

const DesktopNav = () => {
  return (
    <HStack spacing={6} display={{ base: 'none', lg: 'flex' }}>
      {NAV_ITEMS.map(({ label, href }) => (
        <NextLink href={href} key={label} passHref>
          <Link
            fontFamily="Krub"
            color="azul.500"
            fontWeight="bold"
            fontSize="lg"
            href={href}
            textTransform="uppercase"
          >
            {label}
          </Link>
        </NextLink>
      ))}
      <HStack>
        <IconButton
          color="azul.500"
          bg="transparent"
          icon={<Icon as={FaSearch} />}
          aria-label="buscar um artigo"
        />
        <Divider
          orientation="vertical"
          borderColor="azul.500"
          borderWidth={2}
          m={0}
          p={0}
          h={4}
          opacity={1}
        />
        <Box>
          <IconButton
            aria-label="Rede Análise no Facebook"
            icon={<Icon as={FaFacebookF} />}
            color="azul.500"
            bg="transparent"
          />
          <IconButton
            aria-label="Rede Análise no Twitter"
            icon={<Icon as={FaTwitter} />}
            color="azul.500"
            bg="transparent"
          />
          <IconButton
            aria-label="Rede Análise no Instagram"
            icon={<Icon as={FaInstagram} />}
            color="azul.500"
            bg="transparent"
          />
        </Box>
      </HStack>
    </HStack>
  )
}

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box>
      <Box bg="bege" w="full" h={`64px`} />
      <Box as="nav" pos="fixed" top={0} left={0} w="full" zIndex={10}>
        <Container maxW="container.xl">
          <Flex bg="bege" py={3} px={6} alignItems="center">
            <Flex flexGrow={0}>
              <LinkBox>
                <NextLink href="/" passHref>
                  <LinkOverlay>
                    <HStack spacing={4} textColor="azul.500">
                      <NextImage
                        src="/images/logo-horizontal-para-bege.svg"
                        alt="Logo da Rede Análise"
                        width={100}
                        height={33}
                      />
                      <Box border="1px" borderColor="azul.500" h={6} />
                      <Text>Covid-19</Text>
                    </HStack>
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </Flex>
            <Flex flexGrow={1} justify="end">
              <DesktopNav />
            </Flex>
            <IconButton
              icon={
                isOpen ? (
                  <CloseIcon color="azul.500" boxSize={3} />
                ) : (
                  <HamburgerIcon color="azul.500" boxSize={5} />
                )
              }
              onClick={onToggle}
              variant="ghost"
              aria-label="mostrar/esconder o menu"
              display={{ base: 'flex', lg: 'none' }}
            />
          </Flex>
          <Collapse in={isOpen} animate>
            <MobileNav />
          </Collapse>
        </Container>
      </Box>
    </Box>
  )
}
