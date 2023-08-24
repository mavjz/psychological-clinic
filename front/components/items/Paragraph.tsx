import React from 'react';
import { ParagraphType } from 'types/items/paragraph';

const Paragraph = ({
    size,
    text,
    place = 'left',
    color = 'green',
}: ParagraphType) => {
    color = 'text'.concat(color.toLowerCase());
    place = 'text'.concat(place.toLowerCase());
    const classes = color.concat(' ' + place);
    return (
        <React.Fragment>
            {size === 'small' && <p className={`paragraph-small ${classes}`}>{text}</p>}
            {size === 'medium' && <p className={`paragraph-medium ${classes}`}>{text}</p>}
            {size === 'big' && <p className={`paragraph-big ${classes}`}>{text}</p>}
        </React.Fragment>
    );
};

export default Paragraph;
