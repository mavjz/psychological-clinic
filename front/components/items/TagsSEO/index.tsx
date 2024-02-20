import React from 'react';
import { TageSEOType } from './models';

const TagsSEO = ({ subpage }: TageSEOType) => {
    return (
        <React.Fragment>
            <title>HumanHealth.com - {subpage}</title>
            <meta
                name="description"
                content="HumanHealth.com to renomowana klinika psychologiczna oferująca wysokiej jakości terapię dla osób z różnymi wyzwaniami emocjonalnymi. Nasz doświadczony zespół specjalistów zapewnia profesjonalne wsparcie, pomagając klientom odzyskać równowagę i dobre samopoczucie. Skorzystaj z naszych usług już dziś, aby odzyskać kontrolę nad swoim życiem."
            />
            <meta name="robots" content="follow" />
        </React.Fragment>
    );
};

export default TagsSEO;
