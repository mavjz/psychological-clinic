import WrapperWidth from 'components/wrappers/WrapperWidth';
import Image from 'next/image';
import React from 'react';
import Article from '../Article';
import { CEOProfileType } from './models';

const CEOProfile = ({ photo, headline, texts }: CEOProfileType) => {
    return (
        <WrapperWidth>
            <div className="CEOProfile">
                <div className="CEOProfile-placeholder">
                    <Image
                        src={photo}
                        alt="Terapeuta"
                        fill
                        className="CEOProfile-placeholder__image"
                    />
                </div>
                <Article headline={headline} texts={texts} />
            </div>
        </WrapperWidth>
    );
};

export default CEOProfile;
