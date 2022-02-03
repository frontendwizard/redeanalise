import { Button, Flex, SimpleGrid } from '@chakra-ui/react'
import { PostContent } from '../lib/posts'
import { MostReadItem } from './MostReadItem'
import { Section } from './Section'

export const MostReadSection = ({ posts }: { posts: PostContent[] }) => (
  <Section title="Mais Lidas" bg="bege">
    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4}>
      {posts.map((post) => (
        <MostReadItem key={post.slug} postContent={post} />
      ))}
    </SimpleGrid>
    <Flex justifyContent="center">
      <Button variant="outline" colorScheme="preto" borderWidth={2} px={8}>
        VER MAIS
      </Button>
    </Flex>
  </Section>
)
