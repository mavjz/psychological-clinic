import React from 'react';
import { HeadlineType } from 'types/items/headline';

const Headline = ({
    size,
    text,
    place = 'left',
    color = 'green',
    isUppercase,
}: HeadlineType) => {
    color = 'text'.concat(color.toLowerCase());
    place = 'text'.concat(place.toLowerCase());
    const classes = color.concat(' ' + place);
    return (
        <React.Fragment>
            {size === "h1" && <h1 className={`${classes} ${isUppercase && "capslock"}`}>{text}</h1>}
            {size === "h2" && <h2 className={`${classes} ${isUppercase && "capslock"}`}>{text}</h2>}
            {size === "h3" && <h3 className={`${classes} ${isUppercase && "capslock"}`}>{text}</h3>}
            {size === "h4" && <h4 className={`${classes} ${isUppercase && "capslock"}`}>{text}</h4>}
            {size === "h5" && <h5 className={`${classes} ${isUppercase && "capslock"}`}>{text}</h5>}
            {size === "h6" && <h6 className={`${classes} ${isUppercase && "capslock"}`}>{text}</h6>}
        </React.Fragment>
    );
};

export default Headline;
