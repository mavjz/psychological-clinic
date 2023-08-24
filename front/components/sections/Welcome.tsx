import Headline from 'components/items/Headline';
import Paragraph from 'components/items/Paragraph';
import WrapperWidth from 'components/wrappers/Wrapperwidth';
import Image from 'next/image';
import React from 'react';
import { useMedia } from 'use-media';

const Welcome = ({ image, headline, text }: WelcomeType) => {
    const isWide = useMedia({ minWidth: '768px' });
    return (
        <div className="welcome">
            {isWide ? (
                <WrapperWidth>
                    <div className="welcome-placeholder">
                        <Image
                            src={image}
                            alt="Background photo"
                            fill
                            className="welcome-placeholder__image"
                        />
                    </div>
                    <div className="welcome-gradient" />
                </WrapperWidth>
            ) : (
                <React.Fragment>
                    <div className="welcome-placeholder">
                        <Image
                            src={image}
                            alt="Background photo"
                            fill
                            className="welcome-placeholder__image"
                        />
                    </div>
                    <div className="welcome-gradient" />
                </React.Fragment>
            )}
            <WrapperWidth>
                <div className="welcome-text">
                    <Headline text={headline} color="white" size="h1" />
                    <Paragraph text={text} size="big" color="white" />
                </div>
            </WrapperWidth>
        </div>
    );
};

export default Welcome;

type WelcomeType = {
    image: string;
    headline: string;
    text: string;
};
