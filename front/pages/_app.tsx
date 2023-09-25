import type { AppProps } from 'next/app';
import '../styles/style.scss';
import Layout from 'components/wrappers/Layout';
import Transition from 'components/wrappers/Transition';
import React, { useEffect } from 'react';
import { AppointmentDataContextProvider } from 'components/wrappers/AppointmentDataContext';

export default function App({ Component, pageProps }: AppProps) {
    // useEffect(() => {
    //     document.body.style.overflow = 'auto';
    // }, []);
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
