import Image from 'next/image';
import React from 'react';
import { ProfileType } from './helper';
import Headline from '../Headline';
import Paragraph from '../Paragraph';

const Profile = ({ image, name, text, isBig }: ProfileType) => {
    return (
        <div className={isBig ? 'profilebig' : 'profile'}>
            <div className={`${isBig ? 'profilebig' : 'profile'}-placeholder`}>
                <Image
                    src={image}
                    alt="Terapeuta"
                    fill
                    className={`${isBig ? 'profilebig' : 'profile'}-placeholder__image`}
                />
            </div>
            <div className={`${isBig ? 'profilebig' : 'profile'}-hover`}>
                <div className={`${isBig ? 'profilebig' : 'profile'}-hover__text`}>
                    <Headline
                        text={name}
                        variant={isBig ? 'h1' : 'h3'}
                        placeClass="center"
                        colorClass="white"
                    />
                    <Paragraph
                        text={text || ''}
                        size="small"
                        colorClass="white"
                        placeClass="center"
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
