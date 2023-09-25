import Headline from 'components/items/Headline';
import Paragraph from 'components/items/Paragraph';
import Image from 'next/image';
import React from 'react';
import { useMedia } from 'use-media';
import { WelcomeType } from './helper';
import WrapperWidth from 'components/wrappers/WrapperWidth';

const Welcome = ({ image, headline, text }: WelcomeType) => {
    const isWide = useMedia({ maxWidth: '768px' });
    return (
        <div className="welcome">
            {isWide ? (
                <div className="welcome-container">
                    <div className="welcome-placeholder">
                        <Image src={image} alt="Background photo" fill />
                    </div>
                    <div className="welcome-gradient" />
                </div>
            ) : (
                <WrapperWidth>
                    <div className="welcome-container">
                        <div className="welcome-placeholder">
                            <Image src={image} alt="Background photo" fill />
                        </div>
                        <div className="welcome-gradient" />
                    </div>
                </WrapperWidth>
            )}
            <WrapperWidth>
                <div className="welcome-text">
                    <Headline text={headline} colorClass="white" variant="h1" />
                    <Paragraph text={text} size="big" colorClass="white" />
                </div>
            </WrapperWidth>
        </div>
    );
};

export default Welcome;
