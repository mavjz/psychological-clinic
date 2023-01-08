
import Headline from "components/items/Headline";
import Paragraph from "components/items/Paragraph";
import WrapperWidth from "components/wrappers/Wrapperwidth";
import React from "react";
import useMedia from "use-media";

const Footer = () => {
    const isWide = useMedia({maxWidth: "768px"});
    return (
        <div className="footer">
            {isWide && 
                <WrapperWidth>
                    <div className="footer-desktop">
                        <div>
                            <Headline
                                h1
                                text="HumanHealth.com"
                            />
                            <Paragraph
                                text=""
                            />
                        </div>
                        <div>

                        </div>
                    </div>
                </WrapperWidth>
            }
            {!isWide &&
                <WrapperWidth>
                    <div className="footer-mobile">
                
                    </div>
                </WrapperWidth>
            }
        </div>
    )
}

export default Footer