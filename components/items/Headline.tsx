import React from 'react'

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

type HeadlineType = {
    h1?: boolean,
    h2?: boolean,
    h3?: boolean,
    h4?: boolean,
    h5?: boolean,
    h6?: boolean,
    text: string,
    place?: string,
    color?: string,
    isUppercase?: boolean
}