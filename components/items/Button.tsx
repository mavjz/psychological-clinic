import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HeadlineType } from 'types/items/headline'
import Headline from './Headline'

const Button = ({h1, h2, h3, h4, h5, h6, text, color="green", place="center", link, isUppercase, isLink, isImage, className, image}: ButtonType) => {
    return (
        <React.Fragment>
            {isLink ? 
                isImage ? 
                        <Link href={link || "/"} passHref legacyBehavior className={className}>
                            <figure className={`${className}-placeholder`}>
                                <Image
                                    src={image || ""}
                                    alt="Image"
                                    fill
                                    className={`${className}-placeholder__image`}
                                />
                            </figure>
                        </Link>
                    :
                        <Link href={link || "/"} passHref legacyBehavior className={className}>
                            <a className={`${className}-a text${color}`}>
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
                :
                isImage ? 
                        <div className={className}>
                           <button className={`${className}-button`}>
                                <figure className={`${className}-button__placeholder`}>
                                    <Image
                                        src={image || ""}
                                        alt="Image"
                                        fill
                                        className={`${className}-button__placeholder--image`}
                                    />
                                </figure>
                            </button> 
                        </div>
                    :
                        <button className={className}>
                            <Headline
                                h1={h1}
                                h2={h2}
                                h3={h3}
                                h4={h4}
                                h5={h5}
                                h6={h6}
                                text={text}
                                place={place}
                                color={color}
                                isUppercase={isUppercase}
                            /> 
                        </button> 
            }
        </React.Fragment>
    )
}

export default Button


type ButtonType = {
    image?: string, 
    link?: string,
    isLink?: boolean, 
    isImage?: boolean, 
    className?: string, 
} & HeadlineType