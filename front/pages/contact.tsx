// jak działamy (godziny, liczba pacjentów)
import Appointment from 'components/items/Appointment';
import Headline from 'components/items/Headline';
import Paragraph from 'components/items/Paragraph';
import Article from 'components/sections/Article';
import CEOProfile from 'components/sections/CEOProfile';
import Welcome from 'components/sections/Welcome';
import WrapperWidth from 'components/wrappers/WrapperWidth';
import React from 'react';

const Contact = () => {
    return (
        <React.Fragment>
            <Welcome
                image="/images/visit.jpg"
                headline="Umów się na wizytę"
                text="Bądź idealną wersją siebie już dziś"
            />
            <WrapperWidth>
                <Article
                    headline="Godziny wizyt"
                    texts={[
                        {
                            text: `TERAPIA INDYWIDUALNA (możliwość online)`,
                        },
                        {
                            text: '12:00 - Natalia Kowalczyk, Bożena Jasińska',
                        },
                        {
                            text: '13:00 - Igor Wysocki, Jacek Głowacki',
                        },
                        {
                            text: '15:00 - Natalia Kowalczyk, Bożena Jasińska',
                        },
                        {
                            text: '16:00 - Igor Wysocki, Jacek Głowacki, Bożena Jasińska',
                        },
                        {
                            text: `WARSZTATY: PEWNOŚĆ SIEBIE - zbuduj swój idealny świat (stacjonarnie)`,
                        },
                        {
                            text: '17:00 - Natalia Kowalczyk i Agnieszka Sikorska',
                        },
                    ]}
                />
            </WrapperWidth>
            <Headline
                variant="h1"
                text="Odkryj nową drogę do równowagi i harmonii"
                colorClass="greendark"
                placeClass="center"
                isUppercase
            />
            <Headline
                variant="h3"
                text="Umów dokładny termin wizyty u psychoterapeuty"
                colorClass="black"
                placeClass="center"
            />
            <Appointment />
            <CEOProfile
                photo="/images/meeting.jpg"
                headline="Jak pracujemy?"
                texts={[
                    {
                        text: `Od pierwszych sesji terapeutycznych nawiązujemy więź z klientem. Pozwalamy mu się otworzyć i obdarzamy go bezwarunkową akceptacją. Wysłuchujemy jego codziennie problemy jak i sukcesy. Wraz z czasem zagłębiamy się w coraz trudniejsze wątki życia klienta i tym razem z otwartością oraz bezpieczeństwem (wraz ze wsparciem terapeuty) przeżywamy je ostatecznie w pełni, tym razem z możliwością przyjęcia wszystkich towarzyszących emocji. Dzięki temu klient odkrywa swoje dotychczasowo zapomniane wrażliwe wnętrze, które jest otwarte na bogactwo jakie niesie w sobie każdy człowiek.`,
                    },
                ]}
            />
        </React.Fragment>
    );
};

export default Contact;
