import {
  Box,
  Button,
  ButtonGroup,
  ButtonProps,
  Center,
  Flex,
  Heading,
  Stack,
} from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import { ArrowRightIcon } from '../components/icons/ArrowRightIcon'
import { BlogPostCard } from '../components/BlogPostCard'
import { EyeIcon } from '../components/icons/EyeIcon'
import { SocialSection } from '../components/SocialSection'
import { ZapIcon } from '../components/icons/ZapIcon'
import Layout from '../components/Layout'
import { listPostContent, PostContent } from '../lib/posts'

const PaginationButton = (props: ButtonProps) => (
  <Button
    variant="ghost"
    _active={{
      bg: 'transparent',
      fontSize: 'x-large',
      textDecor: 'underline',
    }}
    {...props}
  />
)

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <Flex w="full" bg="bege" alignItems={'center'} justifyContent={'center'}>
      <ButtonGroup>
        <PaginationButton>
          <ArrowRightIcon transform={'auto'} rotate="180deg" />
        </PaginationButton>
        {[1, 2, 3, 10].map((page) => (
          <PaginationButton
            key={page}
            isActive={page === currentPage}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </PaginationButton>
        ))}
        <PaginationButton>
          <ArrowRightIcon />
        </PaginationButton>
      </ButtonGroup>
    </Flex>
  )
}

interface LeiaProps {
  lastPosts: PostContent[]
}

const Leia: NextPage<LeiaProps> = ({ lastPosts }) => {
  return (
    <Layout>
      <Flex py={20} px={6} bg="laranja.500" pos="relative">
        <Heading
          textTransform={'uppercase'}
          fontSize={'xxx-large'}
          fontWeight={'extrabold'}
          color="azul.500"
          zIndex={2}
        >
          Leia
        </Heading>
        <Box pos={'absolute'} top={0} bottom={0} right={10}>
          <Center>
            <EyeIcon boxSize={60} color="bege" />
          </Center>
        </Box>
        <Box pos="absolute" bottom={-16} left={10}>
          <ZapIcon color="bege" boxSize={32} />
        </Box>
      </Flex>
      <Flex flexGrow={1} bg="bege" p={6}>
        <Button
          variant="outline"
          colorScheme="preto"
          w="full"
          borderWidth={2}
          px={8}
          rightIcon={<ArrowRightIcon transform={'auto'} rotate="90deg" />}
        >
          Filtrar por assunto
        </Button>
      </Flex>
      <Stack spacing="4" px={6} bg="bege" pb={6}>
        {lastPosts.map((postContent) => (
          <BlogPostCard key={postContent.slug} postContent={postContent} />
        ))}
        <Pagination />
      </Stack>
      <SocialSection bg="laranja.500" />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastPosts = listPostContent(1, 10)
  return {
    props: {
      lastPosts,
    },
  }
}

export default Leia
