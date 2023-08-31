import Benefit from 'components/items/Benefit';
import Headline from 'components/items/Headline';
import React from 'react';
import { BenefitsType } from './helper';
import WrapperWidth from 'components/wrappers/WrapperWidth';

const Benefits = ({ items, headline }: BenefitsType) => {
    return (
        <WrapperWidth>
            <div className="benefits">
                <Headline
                    variant="h1"
                    placeClass="center"
                    colorClass="greendark"
                    text={headline || ''}
                    isUppercase
                />
                <div className="benefits-items">
                    {items.map((item, index) => (
                        <Benefit
                            key={index}
                            isCouple={item?.isCouple}
                            isLoupe={item?.isLoupe}
                            isAnalized={item?.isAnalized}
                            isPerson={item?.isPerson}
                            isLove={item?.isLove}
                            isLovePrice={item?.isLovePrice}
                            headline={item?.headline}
                            text={item?.text}
                        />
                    ))}
                </div>
            </div>
        </WrapperWidth>
    );
};
export default Benefits;
