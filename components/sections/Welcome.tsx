import Headline from "components/items/Headline";
import Paragraph from "components/items/Paragraph";
import WrapperWidth from "components/wrappers/Wrapperwidth";
import Image from "next/image";
import React from "react";

const Welcome = ({image, headline, text}: WelcomeType) => {
    return (
        <div className="welcome">
            <WrapperWidth>
                <div className="welcome-placeholder">
                    <Image
                        src={image}
                        alt="Background photo"
                        fill
                        className="welcome-placeholder__image"
                    />
                </div>
                <div className="welcome-gradient"/>
            </WrapperWidth>
            <WrapperWidth>
                <div className="welcome-text">
                    <Headline
                        text={headline}
                        color="textwhite"
                        h1
                    />
                    <Paragraph
                        text={text}
                        big
                        color="textwhite"
                    />
                </div>
            </WrapperWidth>
        </div>
    )
}

export default Welcome

type WelcomeType = {
    image: string, 
    headline: string, 
    text: string,
}