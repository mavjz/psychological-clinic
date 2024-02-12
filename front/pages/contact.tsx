import Headline from 'components/items/Headline';
import TagsSEO from 'components/items/TagsSEO';
import Article from 'components/sections/Article';
import Welcome from 'components/sections/Welcome';
import WrapperWidth from 'components/wrappers/WrapperWidth';
import React from 'react';

const Contact = () => {
    return (
        <React.Fragment>
            <TagsSEO subpage="Kontakt" />
            <Welcome
                image="/images/visit.jpg"
                headline="Skontaktuj się"
                text="W razie problemów z chęcią Ci pomożemy"
            />
            <Headline
                variant="h1"
                text="Dane kontaktowe"
                colorClass="greendark"
                placeClass="center"
                isUppercase
            />
            <WrapperWidth>
                <Article
                    headline="Godziny wizyt"
                    texts={[
                        {
                            text: `ADRESY PLACÓWEK`,
                        },
                        {
                            text: 'ul. Karowa 53, Warszawa 00-324',
                        },
                        {
                            text: 'ul. Żółwińska 81, Szczecin 71-895',
                        },
                        {
                            text: 'NUMER TELEFONU',
                        },
                        {
                            text: '+48 51 970 85 82',
                        },
                        {
                            text: 'Jesteśmy otwarci w godzinach:',
                        },
                        {
                            text: 'Poniedziałek - Piątek: 8:00-17:00',
                        },
                        {
                            text: 'Sobota - Niedziela: 10:00-14:00',
                        },
                    ]}
                />
            </WrapperWidth>
        </React.Fragment>
    );
};

export default Contact;
