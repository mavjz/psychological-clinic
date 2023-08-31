import Benefit from 'components/items/Benefit';
import WrapperWidth from 'components/wrappers/WrapperWidth';
import React from 'react';
import Article from '../Article';
import { BenefitsInDetailType } from './helper';

const BenefitsInDetail = ({
    isCouple,
    isLoupe,
    isAnalized,
    isPerson,
    isLove,
    isLovePrice,
    headline,
    texts,
}: BenefitsInDetailType) => {
    return (
        <WrapperWidth>
            <div className="benefitsindetail">
                <Benefit
                    isCouple={isCouple}
                    isLoupe={isLoupe}
                    isAnalized={isAnalized}
                    isPerson={isPerson}
                    isLove={isLove}
                    isLovePrice={isLovePrice}
                    text=""
                    headline=""
                />
                <Article headline={headline} texts={texts} />
            </div>
        </WrapperWidth>
    );
};

export default BenefitsInDetail;
