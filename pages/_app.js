
import Navbar from '@/components/Navbar'
import NextNProgress from 'nextjs-progressbar'
import '@/styles/globals.css'

export default function App ({ Component, pageProps }) {
  return (
    <Navbar>
      <NextNProgress options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </Navbar>
  )
}
