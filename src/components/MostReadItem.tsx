import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { PostContent } from '../lib/posts'
import { ArrowRightIcon } from './icons/ArrowRightIcon'

export const MostReadItem = ({ postContent }: { postContent: PostContent }) => (
  <LinkBox as="article">
    <HStack
      spacing={4}
      alignItems={'stretch'}
      bg="gray.100"
      blendMode={'multiply'}
      _hover={{ bg: 'gray.200' }}
      w="full"
    >
      <Box boxSize="112px" bg="azul.500" flexShrink={0} pos="relative">
        <NextImage
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          layout="fill"
          objectFit="cover"
          alt="article's image"
        />
      </Box>
      <Center flex={1}>
        <Heading as="h1" fontSize="md" noOfLines={4}>
          <NextLink href="/post" passHref>
            <LinkOverlay>{postContent.title}</LinkOverlay>
          </NextLink>
        </Heading>
      </Center>
      <Center flexShrink={0} pr={4}>
        <ArrowRightIcon color="azul.500" boxSize="6" />
      </Center>
    </HStack>
  </LinkBox>
)
