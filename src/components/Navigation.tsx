/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Text,
  Flex,
  Container,
  Box,
  Button,
  Collapse,
  VStack,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { MenuAlt4Icon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useState } from 'react'
import { FaFacebook, FaInstagram, FaSearch, FaTwitter } from 'react-icons/fa'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)
  return (
    <Box as="nav" bg="bege.500">
      <Container py="4">
        <Flex align="center" justify="space-between" w="full">
          <Text as="span" fontFamily="display" fontWeight="semibold">
            <Link href="/">Rede Análise | Covid-19</Link>
          </Text>
          <Button onClick={handleClick} variant="ghost">
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuAlt4Icon className="w-6 h-6" />
            )}
          </Button>
        </Flex>
        <Collapse in={isOpen}>
          <VStack
            fontFamily="display"
            textTransform="uppercase"
            fontWeight="extrabold"
            color="azul.500"
            p="6"
            fontSize="2xl"
            spacing="4"
          >
            <Link href="#">Início</Link>
            <Link href="#">Leia</Link>
            <Link href="#">Covid-19</Link>
            <Link href="#">Sobre Nós</Link>
            <Link href="#">Equipe</Link>
            <Link href="#">Contato</Link>
            <HStack align="center" spacing="6" py="4">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </HStack>
            <InputGroup>
              <Input
                placeholder="Digite sua busca"
                textAlign="center"
                _placeholder={{
                  color: 'azul.500',
                  fontFamily: 'body',
                  fontWeight: 'semibold',
                }}
                variant="flushed"
                size="lg"
                borderColor="azul.500"
                borderBottomWidth="medium"
              />
              <InputRightElement>
                <FaSearch />
              </InputRightElement>
            </InputGroup>
          </VStack>
        </Collapse>
      </Container>
    </Box>
  )
}
