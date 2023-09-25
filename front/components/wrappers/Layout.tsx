import Footer from 'components/sections/Footer';
import Navbar from 'components/sections/Navbar';
import React, { useEffect } from 'react';
import { WrapperType } from 'types/wrapper';
const Layout = ({ children }: WrapperType) => {
    return (
        <React.Fragment>
            <Navbar
                sites={[
                    {
                        name: 'O nas',
                        link: '/about',
                    },
                    {
                        name: 'Nasze wartości',
                        link: '/purposes',
                    },
                    {
                        name: 'Kontakt',
                        link: '/contact',
                    },
                    {
                        name: 'Źródła',
                        link: '/sources',
                    },
                ]}
                sitesMobile={[
                    {
                        name: 'O nas',
                        link: '/about',
                    },
                    {
                        name: 'Nasze wartości',
                        link: '/purposes',
                    },
                    {
                        name: 'Cennik',
                        link: '/prices',
                    },
                    {
                        name: 'Oferta',
                        link: '/services',
                    },
                    {
                        name: 'Kontakt',
                        link: '/contact',
                    },
                    {
                        name: 'Źródła',
                        link: '/sources',
                    },
                ]}
            />
            {children}
            <Footer
                sites={[
                    {
                        name: 'O nas',
                        link: '/about',
                    },
                    {
                        name: 'Nasze wartości',
                        link: '/purposes',
                    },
                    {
                        name: 'Cennik',
                        link: '/prices',
                    },
                    {
                        name: 'Oferta',
                        link: '/services',
                    },
                    {
                        name: 'Źródła',
                        link: '/sources',
                    },
                ]}
            />
        </React.Fragment>
    );
};
export default Layout;
