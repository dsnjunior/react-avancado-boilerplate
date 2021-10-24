import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="A simple next boilerplate description"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
