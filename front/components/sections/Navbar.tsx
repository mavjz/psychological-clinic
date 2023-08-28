import Button from 'components/items/Button';
import WrapperWidth from 'components/wrappers/Wrapperwidth';
import React from 'react';
import { SiteType } from 'types/items/site';
import { useMedia } from 'use-media';

const Navbar = ({ sites }: NavbarType) => {
    const isWide = useMedia({ maxWidth: '768px' });
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
                    <div className="navbar-mobile"></div>
                </WrapperWidth>
            )}
        </div>
    );
};
export default Navbar;
type NavbarType = {
    sites: Array<SiteType>;
};
