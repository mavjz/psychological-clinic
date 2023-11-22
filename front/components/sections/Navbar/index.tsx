import Button from 'components/items/Button';
import React, { useState } from 'react';
import { useMedia } from 'use-media';
import { NavbarType } from './models';
import WrapperWidth from 'components/wrappers/WrapperWidth';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Navbar = ({ sites, sitesMobile }: NavbarType) => {
    const isWide = useMedia({ maxWidth: '768px' });
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="navbar">
            {isWide ? (
                <React.Fragment>
                    <WrapperWidth>
                        <div className="navbar-mobile">
                            <Button
                                isLink
                                link="/"
                                text="HumanHealth.com"
                                colorClass="greendark"
                                variant="h2"
                            />
                            <Button
                                isImage
                                className="navbar-mobile__button"
                                onClick={() => setIsClicked(!isClicked)}
                            >
                                {isClicked ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
                            </Button>
                        </div>
                    </WrapperWidth>
                    {isClicked && (
                        <div className="navbar-mobile__open">
                            <div
                                className="navbar-mobile__open--items"
                                onClick={() => setIsClicked(false)}
                            >
                                {sitesMobile.map((site, index) => (
                                    <Button
                                        isLink
                                        variant="h3"
                                        colorClass="greendark"
                                        placeClass="left"
                                        key={index}
                                        text={site?.name}
                                        link={site?.link}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </React.Fragment>
            ) : (
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
        </div>
    );
};
export default Navbar;
