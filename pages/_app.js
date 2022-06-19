import '../styles/globals.css'
import Head from 'next/head'
import AppProvider from '../utils/provider'
import "swiper/css/bundle"
import "/styles/slideshow.css"

function MyApp({ Component, pageProps }) {
  return <AppProvider>
    <Head>
      <title>Hannah&apos;s Portfolio</title>
      <meta name='description' content='Frontend Developer Portfolio'/>
    </Head>
    <Component {...pageProps} />
    </AppProvider>
}

export default MyApp