import { Box, Button, Text } from '@chakra-ui/react'
import { Section } from './Section'

export const ContactSection = () => (
  <Section
    containerSize="container.md"
    title="Fale com a gente!"
    bg="laranja.500"
    pb={12}
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
        Entre em Contato
      </Button>
    </Box>
  </Section>
)
