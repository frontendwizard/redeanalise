import { Box } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import { HighlightArticle } from '../components/HighlightArticle'
import { ArticlesSection } from '../components/ArticlesSection'
import { InfoSection } from '../components/InfoSection'
import { MostReadSection } from '../components/MostReadSection'
import { LastPostsFromTag } from '../components/LastPostFromTag'
import { SocialSection } from '../components/SocialSection'
import { AboutSection } from '../components/AboutSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'
import { getLastPost, listPostContent, PostContent } from '../lib/posts'

interface HomeProps {
  lastPost: PostContent
  lastCovidPosts: PostContent[]
  lastBrazilPosts: PostContent[]
  lastWorldPosts: PostContent[]
  mostReadPosts: PostContent[]
}

const Home: NextPage<HomeProps> = ({
  lastPost,
  lastCovidPosts,
  lastBrazilPosts,
  lastWorldPosts,
  mostReadPosts,
}) => {
  return (
    <Box>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />
      <Box as="main">
        <Navbar />
        <HighlightArticle postContent={lastPost} />
        <ArticlesSection posts={lastCovidPosts} tag="COVID-19" />
        <InfoSection />
        <MostReadSection posts={mostReadPosts} />
        <LastPostsFromTag
          _section={{
            title: 'Últimas do Brasil',
            bg: 'azul.500',
            textColor: 'branco',
          }}
          posts={lastBrazilPosts}
        />
        {Boolean(lastWorldPosts.length) ?? (
          <LastPostsFromTag
            _section={{
              title: 'Últimas do mundo',
              bg: 'violeta.500',
              textColor: 'branco',
            }}
            posts={lastWorldPosts}
          />
        )}
        <SocialSection />
        <AboutSection />
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const lastPost = getLastPost()
  const lastCovidPosts = listPostContent(1, 5, 'covid-19')
  const lastBrazilPosts = listPostContent(1, 5, 'brasil')
  const lastWorldPosts = listPostContent(1, 5, 'mundo')
  const mostReadPosts = listPostContent(1, 5)
  return {
    props: {
      lastPost,
      lastCovidPosts,
      lastBrazilPosts,
      lastWorldPosts,
      mostReadPosts,
    },
  }
}
