import Image from 'next/image';
import Link from 'next/link';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { HeadlineType } from 'types/items/headline';
import Headline from './Headline';
const Button = ({
    variant,
    text,
    colorClass = 'green',
    placeClass = 'center',
    link,
    isUppercase,
    isLink,
    isImage,
    className,
    image,
    type,
    onClick,
}: ButtonType) => {
    function empty(): any {}
    return (
        <React.Fragment>
            {isLink ? (
                isImage ? (
                    <Link
                        href={link || '/'}
                        passHref
                        legacyBehavior
                        className={className}
                    >
                        <figure className={`${className}-placeholder`}>
                            <Image
                                src={image || ''}
                                alt="Image"
                                fill
                                className={`${className}-placeholder__image`}
                            />
                        </figure>
                    </Link>
                ) : (
                    <Link
                        href={link || '/'}
                        passHref
                        legacyBehavior
                        className={className}
                    >
                        <a className={`${className}-a text${colorClass}`}>
                            <Headline
                                variant={variant}
                                text={text}
                                placeClass="center"
                                colorClass={colorClass}
                                isUppercase={isUppercase}
                            />
                        </a>
                    </Link>
                )
            ) : isImage ? (
                <div className={className}>
                    <button className={`${className}-button`} type={type}>
                        <figure className={`${className}-button__placeholder`}>
                            <Image
                                src={image || ''}
                                alt="Image"
                                fill
                                className={`${className}-button__placeholder--image`}
                            />
                        </figure>
                    </button>
                </div>
            ) : (
                <button
                    className={className}
                    type={type}
                    onClick={onClick === undefined ? empty() : onClick}
                >
                    <Headline
                        variant={variant}
                        text={text}
                        placeClass={placeClass}
                        colorClass={colorClass}
                        isUppercase={isUppercase}
                    />
                </button>
            )}
        </React.Fragment>
    );
};
export default Button;
type ButtonType = {
    type?: 'button' | 'submit' | 'reset' | undefined;
    image?: string;
    link?: string;
    isLink?: boolean;
    isImage?: boolean;
    className?: string;
    onClick?: () => void;
} & HeadlineType;
