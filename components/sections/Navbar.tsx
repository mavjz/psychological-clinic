import ButtonHeadline from "components/items/ButtonHeadline";
import WrapperWidth from "components/wrappers/Wrapperwidth";
import React from "react";
import { SiteType } from "types/items/site";
import useMedia from "use-media";

const Navbar = ({sites}: NavbarType) => {
    const isWide = useMedia({maxWidth: "768px"});
    return (
        <div className="navbar">
            {!isWide && 
                <div className="navbar-desktop">
                    <ButtonHeadline
                        h3
                        text="HumanHealth.com"
                        link="/"
                        color="textgreendark"
                    />
                    <div className="navbar-desktop__items">
                        {sites.map((site, index) =>
                            <ButtonHeadline
                                h4
                                color="textgreendark"
                                key={index}
                                text={site?.name}
                                link={site?.link}
                            />
                        )}
                    </div>
                </div>
            }
            {isWide &&
                <WrapperWidth>
                    <div className="navbar-mobile">
                    </div>
                </WrapperWidth>
            }
        </div>
    )
}

export default Navbar

type NavbarType = {
    sites: Array<SiteType>
}