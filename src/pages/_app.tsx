import '@fontsource/mulish/variable.css'
import '@fontsource/mulish/variable-italic.css'
import '@fontsource/krub/700.css'

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
