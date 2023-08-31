import Link from 'next/link';
import React from 'react';
import { ButtonType } from './helper';
import Headline from '../Headline';

const Button = ({
    variant,
    text,
    colorClass = 'green',
    placeClass = 'center',
    link,
    isUppercase,
    isLink,
    isImage,
    children,
    className,
    type,
    onClick,
}: ButtonType) => {
    return (
        <React.Fragment>
            {isLink ? (
                isImage ? (
                    <Link href={link || '/'} passHref legacyBehavior className={className}>
                        {children}
                    </Link>
                ) : (
                    <Link href={link || '/'} passHref legacyBehavior className={className}>
                        <a className={`${className}-a text${colorClass}`}>
                            <Headline
                                variant={variant}
                                text={text}
                                placeClass={placeClass}
                                colorClass={colorClass}
                                isUppercase={isUppercase}
                            />
                        </a>
                    </Link>
                )
            ) : isImage ? (
                <button className={className} type={type} onClick={onClick}>
                    {children}
                </button>
            ) : (
                <button className={className} type={type} onClick={onClick}>
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
