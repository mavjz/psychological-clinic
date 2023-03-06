import React from 'react'
import { HeadlineType } from 'types/items/headline'

const Headline = ({h1, h2, h3, h4, h5, h6, text, place="textleft", color="textgreen", isUppercase}: HeadlineType) => {
    return (
        <React.Fragment>
            {h1 && <h1 className={`${place} ${color} ${isUppercase && "capslock"}`}>{text}</h1>}
            {h2 && <h2 className={`${place} ${color} ${isUppercase && "capslock"}`}>{text}</h2>}
            {h3 && <h3 className={`${place} ${color} ${isUppercase && "capslock"}`}>{text}</h3>}
            {h4 && <h4 className={`${place} ${color} ${isUppercase && "capslock"}`}>{text}</h4>}
            {h5 && <h5 className={`${place} ${color} ${isUppercase && "capslock"}`}>{text}</h5>}
            {h6 && <h6 className={`${place} ${color} ${isUppercase && "capslock"}`}>{text}</h6>}
        </React.Fragment>
    )
}

export default Headline