import Headline from 'components/items/Headline'
import Paragraph from 'components/items/Paragraph'
import React from 'react'
import { ArticleType } from 'types/sections/article'

const Article = ({headline, texts}: ArticleType) => {
    return (
        <div className='article'>
            <Headline
                size="h2"
                text={headline}
                color="greendark"
                place='center'
                isUppercase
            />
            <div className='article-text'>
                {texts.map((text, index) => 
                    <Paragraph
                        key={index}
                        text={text?.text}
                        medium
                        place='left'
                    />
                )}
            </div>
        </div>
    )
}

export default Article