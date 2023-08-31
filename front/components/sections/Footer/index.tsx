import Button from 'components/items/Button';
import Headline from 'components/items/Headline';
import Paragraph from 'components/items/Paragraph';
import WrapperWidth from 'components/wrappers/WrapperWidth';
import React from 'react';
import useMedia from 'use-media';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PolicyIcon from '@mui/icons-material/Policy';
import DescriptionIcon from '@mui/icons-material/Description';
import { FooterType } from './helper';

const Footer = ({ sites }: FooterType) => {
    const isWide = useMedia({ maxWidth: '768px' });
    return (
        <div className="footer">
            <WrapperWidth>
                <div className="footer-content">
                    <div className="footer-content__bio">
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
                            placeClass="justify"
                            colorClass="white"
                        />
                    </div>
                    <div className="footer-content__sites">
                        {sites.map((site, index) => (
                            <Button
                                isLink
                                variant="h3"
                                colorClass="white"
                                key={index}
                                text={site?.name}
                                link={site?.link}
                                className="footer-content__sites--button"
                            />
                        ))}
                    </div>
                    <div className="footer-content__contact">
                        <Headline
                            text="Skontaktuj się"
                            variant="h2"
                            colorClass="yellowlight"
                            placeClass="center"
                        />
                        <div className="footer-content__contact--subsection">
                            <LocationOnIcon className="footer-content__contact--subsection-icon" />
                            <Paragraph
                                text="ul. Karowa 53, Warszawa 00-324"
                                size="small"
                                colorClass="white"
                            />
                        </div>
                        <div className="footer-content__contact--subsection">
                            <LocationOnIcon className="footer-content__contact--subsection-icon" />
                            <Paragraph
                                text="ul. Żółwińska 81, Szczecin 71-895"
                                size="small"
                                colorClass="white"
                            />
                        </div>
                        <div className="footer-content__contact--subsection">
                            <PhoneEnabledIcon className="footer-content__contact--subsection-icon" />
                            <Paragraph text="+48 51 970 85 82" size="small" colorClass="white" />
                        </div>
                        <div className="footer-content__contact--subsection">
                            <AccessTimeIcon className="footer-content__contact--subsection-icon" />
                            <Paragraph
                                text="Pon - Pt: 8-17, Sb - Nd: 10-14"
                                size="small"
                                colorClass="white"
                            />
                        </div>
                        <div className="footer-content__contact--subsection">
                            <PolicyIcon className="footer-content__contact--subsection-icon" />
                            <Button
                                isLink
                                variant="h5"
                                link="/policyprivacy"
                                text="Polityka prywatności"
                                colorClass="white"
                            />
                        </div>
                        <div className="footer-content__contact--subsection">
                            <DescriptionIcon className="footer-content__contact--subsection-icon" />
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
        </div>
    );
};

export default Footer;