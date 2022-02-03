import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { BlogPostCard } from './BlogPostCard'
import { ZapIcon } from './icons/ZapIcon'

export const ArticlesSection = ({ tag, posts }) => {
  return (
    <Box pos="relative" as="section" bg="bege">
      <Container maxW="container.xl">
        <Stack spacing={8} py={8}>
          <Box pos="absolute" top="10" right="14">
            <ZapIcon color="laranja.500" boxSize="28" />
          </Box>
          <Heading as="h1" fontSize="x-large">
            {tag}
          </Heading>
          <SimpleGrid spacing={{ base: 8 }} columns={{ base: 1, lg: 3 }}>
            {posts.map((postContent, idx) => (
              <BlogPostCard postContent={postContent} key={idx} />
            ))}
          </SimpleGrid>
          <Flex justifyContent="center">
            <Button
              variant="outline"
              colorScheme="preto"
              borderWidth={2}
              px={8}
            >
              VER MAIS
            </Button>
          </Flex>
        </Stack>
      </Container>
    </Box>
  )
}
