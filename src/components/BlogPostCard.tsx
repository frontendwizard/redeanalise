import {
  Box,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { PostContent } from '../lib/posts'

export const BlogPostCard = ({ postContent }: { postContent: PostContent }) => (
  <LinkBox
    as="article"
    display={{ base: 'block', lg: 'flex' }}
    flexGrow={1}
    flexShrink={1}
  >
    <Stack spacing={4} pos="relative">
      <Image
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        layout="fill"
        objectFit="cover"
        alt="article's image"
        h="160px"
        w="full"
      />
      <Heading size="md">
        <NextLink href="/post" passHref>
          <LinkOverlay>{postContent.title}</LinkOverlay>
        </NextLink>
      </Heading>
      <HStack
        spacing={{ base: '8', sm: '16' }}
        alignItems="center"
        justifyContent="space-between"
        textTransform="uppercase"
      >
        <Text>{postContent.tags?.[0]}</Text>
        <Stack spacing={1} flex={1}>
          <Box w="full" h="2px" bg="currentColor" />
          <Box w="full" h="2px" bg="currentColor" />
        </Stack>
        <Text textAlign="right">{postContent.date}</Text>
      </HStack>
    </Stack>
  </LinkBox>
)
