import Button from 'components/items/Button';
import React, { useState } from 'react';
import { useMedia } from 'use-media';
import { NavbarType } from './helper';
import WrapperWidth from 'components/wrappers/WrapperWidth';
import Headline from 'components/items/Headline';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Navbar = ({ sites }: NavbarType) => {
    const isWide = useMedia({ maxWidth: '768px' });
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="navbar">
            {!isWide && (
                <div className="navbar-desktop">
                    <Button
                        isLink
                        link="/"
                        text="HumanHealth.com"
                        colorClass="greendark"
                        variant="h3"
                    />
                    <div className="navbar-desktop__items">
                        {sites.map((site, index) => (
                            <Button
                                isLink
                                variant="h4"
                                colorClass="greendark"
                                key={index}
                                text={site?.name}
                                link={site?.link}
                            />
                        ))}
                    </div>
                </div>
            )}
            {isWide && (
                <WrapperWidth>
                    <div className="navbar-mobile">
                        <Headline text="HumanHealth.com" colorClass="greendark" variant="h3" />
                        <Button isImage className="" onClick={() => setIsClicked(!isClicked)}>
                            {isClicked ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
                        </Button>
                    </div>
                    {isClicked && <div className="navbar-mobile__open"></div>}
                </WrapperWidth>
            )}
        </div>
    );
};
export default Navbar;
