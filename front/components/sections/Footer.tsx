import Button from 'components/items/Button';
import Headline from 'components/items/Headline';
import Paragraph from 'components/items/Paragraph';
import WrapperWidth from 'components/wrappers/Wrapperwidth';
import React from 'react';
import { SiteType } from 'types/items/site';
import useMedia from 'use-media';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PolicyIcon from '@mui/icons-material/Policy';
import DescriptionIcon from '@mui/icons-material/Description';

const Footer = ({ sites }: FooterType) => {
    const isWide = useMedia({ maxWidth: '768px' });
    return (
        <div className="footer">
            {/* {!isWide &&  */}
            <WrapperWidth>
                <div className="footer-desktop">
                    <div className="footer-desktop__bio">
                        <Headline
                            variant="h1"
                            text="HumanHealth.com"
                            colorClass="yellowlight"
                            placeClass="center"
                        />
                        <Paragraph
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Praesent ligula risus, dignissim id mauris a, pretium rutrum magna. 
                                    Pellentesque at turpis consequat, euismod quam vitae, vulputate nisl. 
                                    Aliquam lectus nibh, scelerisque eget magna vitae, fringilla efficitur leo."
                            size="medium"
                            place="justify"
                            color="white"
                        />
                    </div>
                    <div className="footer-desktop__sites">
                        {sites.map((site, index) => (
                            <Button
                                isLink
                                variant="h3"
                                colorClass="white"
                                key={index}
                                text={site?.name}
                                link={site?.link}
                                className="footer-desktop__sites--button"
                            />
                        ))}
                    </div>
                    <div className="footer-desktop__contact">
                        <Headline
                            text="Skontaktuj się"
                            variant="h2"
                            colorClass="yellowlight"
                            placeClass="center"
                        />
                        <div className="footer-desktop__contact--subsection">
                            <LocationOnIcon className="footer-desktop__contact--subsection-icon" />
                            <Paragraph
                                text="ul. Karowa 53, Warszawa 00-324"
                                size="small"
                                color="white"
                            />
                        </div>
                        <div className="footer-desktop__contact--subsection">
                            <LocationOnIcon className="footer-desktop__contact--subsection-icon" />
                            <Paragraph
                                text="ul. Żółwińska 81, Szczecin 71-895"
                                size="small"
                                color="white"
                            />
                        </div>
                        <div className="footer-desktop__contact--subsection">
                            <PhoneEnabledIcon className="footer-desktop__contact--subsection-icon" />
                            <Paragraph
                                text="+48 51 970 85 82"
                                size="small"
                                color="white"
                            />
                        </div>
                        <div className="footer-desktop__contact--subsection">
                            <AccessTimeIcon className="footer-desktop__contact--subsection-icon" />
                            <Paragraph
                                text="Pon - Pt: 8-17, Sb - Nd: 10-14"
                                size="small"
                                color="white"
                            />
                        </div>
                        <div className="footer-desktop__contact--subsection">
                            <PolicyIcon className="footer-desktop__contact--subsection-icon" />
                            <Button
                                isLink
                                variant="h5"
                                link="/policyprivacy"
                                text="Polityka prywatności"
                                colorClass="white"
                            />
                        </div>
                        <div className="footer-desktop__contact--subsection">
                            <DescriptionIcon className="footer-desktop__contact--subsection-icon" />
                            <Button
                                isLink
                                variant="h5"
                                link="/statue"
                                text="Regulamin"
                                colorClass="white"
                            />
                        </div>
                    </div>
                </div>
            </WrapperWidth>
            {/* } */}
            {/* {isWide &&
                <WrapperWidth>
                    <div className="footer-mobile">
                
                    </div>
                </WrapperWidth>
            } */}
        </div>
    );
};

export default Footer;

type FooterType = {
    sites: Array<SiteType>;
};
