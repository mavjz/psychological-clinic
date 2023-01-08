import Benefit from 'components/items/Benefit'
import WrapperWidth from 'components/wrappers/Wrapperwidth'
import React from 'react'
import { ParagraphType } from 'types/items/paragraph'
import Article from './Article'

const BenefitsInDetail = ({isCouple, isLoupe, isAnalized, isPerson, isLove, isLovePrice, headline, texts}: BenefitsInDetailType) => {
    return (
        <WrapperWidth>
            <div className='benefitsindetail'>
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
                <Article
                    headline={headline} 
                    texts={texts}
                />
            </div>
        </WrapperWidth>
        
    )
}

export default BenefitsInDetail

type BenefitsInDetailType = {
    isCouple?: boolean, 
    isLoupe?: boolean, 
    isAnalized?: boolean, 
    isPerson?: boolean, 
    isLove?: boolean, 
    isLovePrice?: boolean, 
    headline: string,
    texts: Array<ParagraphType>,
}