
import Button from "components/items/Button";
import Headline from "components/items/Headline";
import Paragraph from "components/items/Paragraph";
import WrapperWidth from "components/wrappers/Wrapperwidth";
import React from "react";
import { SiteType } from "types/items/site";
import useMedia from "use-media";

const Footer = ({sites}: FooterType) => {
    const isWide = useMedia({maxWidth: "768px"});
    return (
        <div className="footer">
            {!isWide && 
                <WrapperWidth>
                    <div className="footer-desktop">
                        <div className="footer-desktop__bio">
                            <Headline
                                h1
                                text="HumanHealth.com"
                                color="yellowlight"
                                place="center"
                            />
                            <Paragraph
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Praesent ligula risus, dignissim id mauris a, pretium rutrum magna. 
                                    Pellentesque at turpis consequat, euismod quam vitae, vulputate nisl. 
                                    Aliquam lectus nibh, scelerisque eget magna vitae, fringilla efficitur leo."
                                medium
                                place="justify"
                                color="white"
                            />
                        </div>
                        <div>
                            {sites.map((site, index) =>
                                <Button
                                    isLink
                                    h4
                                    color="greendark"
                                    key={index}
                                    text={site?.name}
                                    link={site?.link}
                                />
                            )}
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </WrapperWidth>
            }
            {isWide &&
                <WrapperWidth>
                    <div className="footer-mobile">
                
                    </div>
                </WrapperWidth>
            }
        </div>
    )
}

export default Footer

type FooterType = {
    sites: Array<SiteType>
}