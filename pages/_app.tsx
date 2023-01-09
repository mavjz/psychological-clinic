import type { AppProps } from 'next/app'
import "../styles/style.scss"
import Layout from "components/wrappers/Layout"
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const variants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.75
      }
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.5
      }
    }
  };
  return (
    <Layout>
      <AnimatePresence
	      initial={false}
	      exitBeforeEnter
	    >
	      <motion.div
	        key={asPath}
	        variants={variants}
	        animate="in"
	        initial="out"
	        exit="out"
	      >
          <Component {...pageProps} />
        </motion.div>
	    </AnimatePresence>
    </Layout>
  )
}
