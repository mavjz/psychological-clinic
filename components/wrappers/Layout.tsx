import Footer from "components/sections/Footer";
import Navbar from "components/sections/Navbar";
import React from "react";
import { WrapperType } from "types/sections/wrapper";

const Layout = ({children}: WrapperType) => {
    return (
        <React.Fragment>
            <Navbar
                sites={[
                    {
                        name: "O nas",
                        link: "/about"
                    },
                    {
                        name: "Nasze wartości",
                        link: "/purposes"
                    },
                    {
                        name: "Kontakt",
                        link: "/contact"
                    },
                    {
                        name: "Źródła",
                        link: "/sources"
                    }
                ]}
            />
                {children}
            <Footer
                sites={[
                    {
                        name: "O nas",
                        link: "/about"
                    },
                    {
                        name: "Nasze wartości",
                        link: "/purposes"
                    },
                    {
                        name: "Kontakt",
                        link: "/contact"
                    },
                    {
                        name: "Źródła",
                        link: "/sources"
                    }
                ]}
            />
        </React.Fragment>
    )
}

export default Layout