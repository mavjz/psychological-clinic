import React from 'react';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import SearchIcon from '@mui/icons-material/Search';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PersonIcon from '@mui/icons-material/Person';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import Headline from '../Headline';
import Paragraph from '../Paragraph';
import { BenefitType } from './helper';

const Benefit = ({
    isCouple,
    isLoupe,
    isAnalized,
    isPerson,
    isLove,
    isLovePrice,
    headline,
    text,
}: BenefitType) => {
    return (
        <div className="benefit">
            <div className="benefit-icon">
                <div className="benefit-icon__border">
                    {isCouple ? (
                        <EscalatorWarningIcon className="benefit-icon__border--image" />
                    ) : null}
                    {isLoupe ? <SearchIcon className="benefit-icon__border--image" /> : null}
                    {isAnalized ? (
                        <PersonSearchIcon className="benefit-icon__border--image" />
                    ) : null}
                    {isPerson ? <PersonIcon className="benefit-icon__border--image" /> : null}
                    {isLove ? (
                        <VolunteerActivismIcon className="benefit-icon__border--image" />
                    ) : null}
                    {isLovePrice ? <LoyaltyIcon className="benefit-icon__border--image" /> : null}
                </div>
            </div>
            <Headline variant="h2" placeClass="center" text={headline} colorClass="greendark" />
            <Paragraph size="small" placeClass="center" text={text || ''} />
        </div>
    );
};

export default Benefit;
