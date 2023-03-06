import Link from 'next/link'
import React from 'react'
import Headline from './Headline'

const ButtonHeadline = ({h1, h2, h3, h4, h5, h6, text, color="green", link, isUppercase}: ButtonHeadlineType) => {
    return (
        <React.Fragment>
            <Link href={link} passHref legacyBehavior>
                <a className={`${color}`}>
                    <Headline
                        h1={h1}
                        h2={h2}
                        h3={h3}
                        h4={h4}
                        h5={h5}
                        h6={h6}
                        text={text}
                        place="center"
                        color={color}
                        isUppercase={isUppercase}
                    /> 
                </a>
                
            </Link>
        </React.Fragment>
    )
}

export default ButtonHeadline

type ButtonHeadlineType = {
    h1?: boolean,
    h2?: boolean,
    h3?: boolean,
    h4?: boolean,
    h5?: boolean,
    h6?: boolean,
    text: string,
    color?: string,
    link: string,
    isUppercase?: boolean,
}