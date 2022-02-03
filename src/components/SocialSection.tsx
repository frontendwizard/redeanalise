import { Box, Button, Flex, Skeleton } from '@chakra-ui/react'
import { ComponentProps } from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { Section } from './Section'

export const SocialSection = (
  props: Partial<ComponentProps<typeof Section>>
) => (
  <Section title="REDE ANÁLISE NAS REDES" bg="bege" {...props}>
    <Flex justify="center">
      <Box w={{ base: 'full', md: '512px' }}>
        <TwitterTweetEmbed
          tweetId={`1262480820276736000`}
          placeholder={<Skeleton h="400px" />}
        />
      </Box>
    </Flex>
    <Flex justifyContent="center">
      <Button variant="outline" colorScheme="preto" borderWidth={2} px={8}>
        TWITTER
      </Button>
    </Flex>
  </Section>
)
