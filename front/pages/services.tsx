import Appointment from 'components/items/Appointment';
import FindOrCancelAppointment from 'components/items/FindOrCancelAppointment';
import Headline from 'components/items/Headline';
import TagsSEO from 'components/items/TagsSEO';
import CEOProfile from 'components/sections/CEOProfile';
import Welcome from 'components/sections/Welcome';
import React from 'react';

const Services = () => {
    return (
        <React.Fragment>
            <TagsSEO subpage="Umów wizytę" />
            <Welcome
                image="/images/visit.jpg"
                headline="Umów się na wizytę"
                text="Bądź najlepszą wersją siebie już dziś"
            />
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
            <Headline
                variant="h1"
                text="Sprawdź termin swojej wizyty"
                colorClass="greendark"
                placeClass="center"
                isUppercase
            />
            <Headline
                variant="h3"
                text="Już Ci nie pasuje? Odwołaj wizytę u psychoterapeuty"
                colorClass="black"
                placeClass="center"
            />
            <FindOrCancelAppointment />
        </React.Fragment>
    );
};

export default Services;
