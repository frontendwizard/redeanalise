import { Button, Flex, SimpleGrid, Stack } from '@chakra-ui/react'
import { ComponentProps } from 'react'
import { PostContent } from '../lib/posts'
import { BlogPostCard } from './BlogPostCard'
import { Section } from './Section'

export const LastPostsFromTag = ({
  _section,
  posts,
}: {
  _section: Omit<ComponentProps<typeof Section>, 'children'>
  posts: PostContent[]
}) => (
  <Section {..._section}>
    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6}>
      {posts.map((postContent) => (
        <BlogPostCard key={postContent.slug} postContent={postContent} />
      ))}
    </SimpleGrid>
    <Flex justifyContent="center">
      <Button variant="outline" colorScheme="preto" borderWidth={2} px={8}>
        VER MAIS
      </Button>
    </Flex>
  </Section>
)
