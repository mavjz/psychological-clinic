import Image from 'next/image';
import React from 'react';
import { ProfileType } from './helper';
import Headline from '../Headline';
import Paragraph from '../Paragraph';

const Profile = ({ image, name, text }: ProfileType) => {
    return (
        <div className="profile">
            <div className="profile-placeholder">
                <Image src={image} alt="Terapeuta" fill className="profile-placeholder__image" />
            </div>
            <div className="profile-hover">
                <div className="profile-hover__text">
                    <Headline text={name} variant="h3" placeClass="center" colorClass="white" />
                    <Paragraph
                        text={text || ' '}
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
