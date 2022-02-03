import { Box, Button, Text } from '@chakra-ui/react'
import { CurvedSectionBottom } from './CurvedSectionBottom'
import { CurvedSectionTop } from './CurvedSectionTop'
import { Section } from './Section'

export const AboutSection = () => (
  <>
    <CurvedSectionTop
      w="full"
      h={{ base: 16, lg: 32 }}
      color="verde-oliva.500"
      bg="bege"
    />
    <Section
      containerSize="container.md"
      title="Sobre Nós"
      bg="verde-oliva.500"
    >
      <Text color="branco">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis odio
        rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        quis odio rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Morbi quis odio rhoncus.
      </Text>
      <Box>
        <Button
          variant="outline"
          color="branco"
          borderColor="branco"
          textTransform={'uppercase'}
        >
          Saiba Mais
        </Button>
      </Box>
    </Section>
    <CurvedSectionBottom
      w="full"
      h={{ base: 16, lg: 32 }}
      bg="laranja.500"
      color="verde-oliva.500"
    />
  </>
)
