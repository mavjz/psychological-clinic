import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Headline from './Headline'

const Button = ({h1, h2, h3, h4, h5, h6, text, color="textgreen", link, isUppercase, isLink, isImage, className}) => {
    return (
        <React.Fragment>
            {isLink ? 
                isImage ? 
                        <Link href={link} passHref legacyBehavior className={`${className}`}>
                            <figure>
                                <Image

                                />
                            </figure>
                        </Link>
                    :
                        <Link href={link} passHref legacyBehavior className={`${className}`}>
                            <a className={`${color}`}>
                                <Headline
                                    h1={h1}
                                    h2={h2}
                                    h3={h3}
                                    h4={h4}
                                    h5={h5}
                                    h6={h6}
                                    text={text}
                                    place="textcenter"
                                    color={color}
                                    isUppercase={isUppercase}
                                /> 
                            </a>
                        </Link>
                :
                isImage ? 
                        <div>
                           <button>
                                <figure>
                                    <Image

                                    />
                                </figure>
                            </button> 
                        </div>
                    :
                        <div>
                            <button>
                                <Headline
                                    h1={h1}
                                    h2={h2}
                                    h3={h3}
                                    h4={h4}
                                    h5={h5}
                                    h6={h6}
                                    text={text}
                                    place="textcenter"
                                    color={color}
                                    isUppercase={isUppercase}
                                /> 
                            </button> 
                        </div>
            }
        </React.Fragment>
    )
}

export default Button