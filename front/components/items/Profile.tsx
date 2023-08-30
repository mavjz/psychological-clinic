import Image from 'next/image';
import React from 'react';
import { ProfileType } from 'types/items/profile';
import Headline from './Headline';
import Paragraph from './Paragraph';

const Profile = ({ image, name, text, isBig }: ProfileType) => {
    return (
        <div className={isBig ? 'profilebig' : 'profile'}>
            <div className={`${isBig ? 'profilebig' : 'profile'}-placeholder`}>
                <Image
                    src={image}
                    alt="Terapeuta"
                    fill
                    className={`${
                        isBig ? 'profilebig' : 'profile'
                    }-placeholder__image`}
                />
            </div>
            <div className={`${isBig ? 'profilebig' : 'profile'}-hover`}>
                <div
                    className={`${
                        isBig ? 'profilebig' : 'profile'
                    }-hover__text`}
                >
                    <Headline
                        text={name}
                        size={isBig ? 'h1' : 'h3'}
                        place="center"
                        color="white"
                    />
                    <Paragraph
                        text={text || ''}
                        size="small"
                        color="white"
                        place="center"
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
