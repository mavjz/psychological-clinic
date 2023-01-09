import type { AppProps } from 'next/app'
import "../styles/style.scss"
import Layout from "components/wrappers/Layout"
import Transition from 'components/wrappers/Transition'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </Layout>
  )
}
