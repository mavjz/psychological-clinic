import React from 'react'
import { HeadlineType } from 'types/items/headline'

const Headline = ({h1, h2, h3, h4, h5, h6, text, place="left", color="green", isUppercase}: HeadlineType) => {
    color = "text".concat(color.toLowerCase());
    place = "text".concat(place.toLowerCase());
    const classes = color.concat(" "+place);
    return (
        <React.Fragment>
            {h1 && <h1 className={`${classes} ${isUppercase && "capslock"}`}>{text}</h1>}
            {h2 && <h2 className={`${classes} ${isUppercase && "capslock"}`}>{text}</h2>}
            {h3 && <h3 className={`${classes} ${isUppercase && "capslock"}`}>{text}</h3>}
            {h4 && <h4 className={`${classes} ${isUppercase && "capslock"}`}>{text}</h4>}
            {h5 && <h5 className={`${classes} ${isUppercase && "capslock"}`}>{text}</h5>}
            {h6 && <h6 className={`${classes} ${isUppercase && "capslock"}`}>{text}</h6>}
        </React.Fragment>
    )
}

export default Headline