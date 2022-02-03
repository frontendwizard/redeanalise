import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { PostContent } from '../lib/posts'

const MobileArticle = ({ postContent }: HighlightArticleProps) => {
  return (
    <Box display={{ lg: 'none' }}>
      <Box h="220px" w="full" pos="relative">
        <NextImage
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          layout="fill"
          objectFit="cover"
          alt="article's image"
        />
      </Box>
      <Stack p="6">
        <Heading textTransform="capitalize">{postContent.title}</Heading>
        <Divider />
        <HStack alignItems="center" spacing="4">
          <Box flex="1">
            <Text fontSize="lg" noOfLines={5}>
              {postContent.excerpt}
            </Text>
          </Box>
          <NextLink href="/post" passHref>
            <Button as="a" variant="outline" colorScheme="white">
              Ler Mais
            </Button>
          </NextLink>
        </HStack>
        <Flex>
          <Box flex="1">
            <Text>{postContent.date}</Text>
          </Box>
          <Text>Por: {postContent.authors[0]}</Text>
        </Flex>
      </Stack>
    </Box>
  )
}

const DesktopArticle = ({ postContent }: HighlightArticleProps) => {
  return (
    <Box
      w="full"
      h={'540px'}
      pos="relative"
      display={{ base: 'none', lg: 'block' }}
    >
      <NextImage
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        layout="fill"
        objectFit="cover"
        alt="article's image"
      />
      <Container maxW={'container.xl'}>
        <Stack
          spacing={4}
          p={6}
          bg="azul.500"
          maxW={'container.sm'}
          position="absolute"
        >
          <Heading textTransform="capitalize">{postContent.title}</Heading>
          <Divider />
          <Text fontSize="lg" noOfLines={5}>
            {postContent.excerpt}
          </Text>
          <Flex>
            <Box flex="1">
              <Text>{postContent.date}</Text>
            </Box>
            <Text>Por: {postContent.authors[0]}</Text>
          </Flex>
          <NextLink href="/post" passHref>
            <Button as="a" variant="outline" colorScheme="white">
              Ler Mais
            </Button>
          </NextLink>
        </Stack>
      </Container>
    </Box>
  )
}

interface HighlightArticleProps {
  postContent: PostContent
}

export const HighlightArticle = ({ postContent }: HighlightArticleProps) => (
  <Box as="article" bg="azul.500" pos="relative" textColor="white">
    <MobileArticle postContent={postContent} />
    <DesktopArticle postContent={postContent} />
  </Box>
)
