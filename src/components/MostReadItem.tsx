import {
  Center,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Image,
} from '@chakra-ui/react'
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
      <Image
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        layout="fill"
        objectFit="cover"
        boxSize="112px"
        alt="article's image"
        flexShrink={0}
      />
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
