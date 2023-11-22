import Headline from 'components/items/Headline';
import Paragraph from 'components/items/Paragraph';
import React from 'react';
import { ArticleType } from './models';

const Article = ({ headline, texts }: ArticleType) => {
    return (
        <div className="article">
            <Headline
                variant="h2"
                text={headline}
                colorClass="greendark"
                placeClass="center"
                isUppercase
            />
            <div className="article-text">
                {texts.map((text, index) => (
                    <Paragraph key={index} text={text?.text} size="medium" placeClass="left" />
                ))}
            </div>
        </div>
    );
};

export default Article;
