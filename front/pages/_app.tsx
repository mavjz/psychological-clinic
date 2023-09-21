import type { AppProps } from 'next/app';
import '../styles/style.scss';
import Layout from 'components/wrappers/Layout';
import Transition from 'components/wrappers/Transition';
import { AppointmentDataContextProvider } from 'components/wrappers/AppointmentDataContext';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppointmentDataContextProvider>
            <Layout>
                <Transition>
                    <Component {...pageProps} />
                </Transition>
            </Layout>
        </AppointmentDataContextProvider>
    );
}
