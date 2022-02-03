/* eslint-disable @next/next/no-img-element */
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

type Props = {
  children: React.ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#f5f5e9" />
      </Head>
      <Navbar />
      <Box as="main">{children}</Box>
      <Footer />
    </div>
  )
}
