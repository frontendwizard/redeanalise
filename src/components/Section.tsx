import { Box, Container, Heading, Stack, StackProps } from '@chakra-ui/react'

export const Section = ({
  children,
  title,
  containerSize = 'container.xl',
  ...props
}: {
  children: React.ReactNode
  title?: string
  containerSize?:
    | 'container.xl'
    | 'container.lg'
    | 'container.md'
    | 'container.sm'
} & StackProps) => (
  <Box as="section" {...props}>
    <Container maxW={containerSize}>
      <Stack spacing={8} py={8}>
        {Boolean(title) && (
          <Heading as="h1" fontSize="x-large" textTransform="uppercase">
            {title}
          </Heading>
        )}
        {children}
      </Stack>
    </Container>
  </Box>
)
