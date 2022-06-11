import '../styles/globals.css'
import Head from 'next/head'
import AppProvider from '../utils/provider'

function MyApp({ Component, pageProps }) {
  return <AppProvider>
    <Head>
      <title>Hannah MacPherson&apos;s Portfolio</title>
      <meta name='description' content='Frontend Developer Portfolio'/>
    </Head>
    <Component {...pageProps} />
    </AppProvider>
}

export default MyApp
