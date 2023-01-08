import type { AppProps } from 'next/app'
import "../styles/style.scss"
import Layout from "components/wrappers/Layout"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
