import React from 'react';
import { HeadlineType } from 'types/items/headline';

const Headline = ({
    variant = 'h6',
    text,
    placeClass = 'left',
    colorClass = 'green',
    isUppercase,
}: HeadlineType) => {
    colorClass = 'text'.concat(colorClass.toLowerCase());
    placeClass = 'text'.concat(placeClass.toLowerCase());
    const classes = colorClass.concat(' ' + placeClass);
    const HeadlineElement = variant;
    return (
        <React.Fragment>
            <HeadlineElement className={`${classes} ${isUppercase && "capslock"}`}>{text}</HeadlineElement>
        </React.Fragment>
    );
};

export default Headline;
