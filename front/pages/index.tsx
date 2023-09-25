import Button from 'components/items/Button';
import Article from 'components/sections/Article';
import Benefits from 'components/sections/Benefits';
import CEOProfile from 'components/sections/CEOProfile';
import Counters from 'components/sections/Counters';
import Welcome from 'components/sections/Welcome';
import WrapperWidth from 'components/wrappers/WrapperWidth';
import React from 'react';

export default function Home() {
    return (
        <React.Fragment>
            <Welcome
                image="/images/room.jpg"
                headline="Bądź najlepszą wersją siebie"
                text="Razem z gronem najlepszych terapuetów pokażemy Ci jak odnaleźć swoją drogę do szczęścia"
            />
            <Counters
                items={[
                    {
                        number: 7,
                        headline: 'najlepszych terapeutów w Polsce',
                        text: 'w nurcie humanistycznym',
                    },
                    {
                        number: 12537,
                        headline: 'godzin spędzonych z klientami',
                        text: 'by odzyskali swój wewnętrzny spokój',
                        isPlus: true,
                    },
                    {
                        number: 23,
                        headline: 'lata doświadczenia',
                        text: 'w prowadzeniu warsztatów samorozwojowych i psychoterapii',
                    },
                ]}
            />
            <WrapperWidth>
                <Article
                    headline="Klient jest dla nas najważniejszy"
                    texts={[
                        {
                            text: ``,
                        },
                        {
                            text: `Skupiamy się na każdym z klientów jako wyjątkowym przypadku. Uważamy za ważne rozmowę oraz dobrą komunikację pomiędzy klientem a psychoterapeutą. 
                Przede wszystkim czas na sesji poświęcamy na odkryciu wizji pacjenta o nim samym otaczając go akceptacją i dając mu należytą empatię. Na naszych spotkaniach 
                oferujemy całowitą poufność. Dajemy miejsce na otwartość i podzielenie się wszystkim tym, co w danym momencie potrzebuje nasz klient.`,
                        },
                    ]}
                />
            </WrapperWidth>
            <Button
                isLink
                link="/purposes"
                variant="h1"
                text="Nasze wartości"
                isUppercase
                colorClass="greendark"
            />
            <Benefits
                items={[
                    {
                        isLove: true,
                        headline: 'Empatia',
                        text: 'Jest to dla nas najbardziej efektywny kanał komunikacyjny',
                    },
                    {
                        isLoupe: true,
                        headline: 'Tu i teraz',
                        text: 'Koncentracja na obecnych, aktualnych problemach człowieka',
                    },
                    {
                        isPerson: true,
                        headline: 'Indywidualizm',
                        text: 'Traktujemy każdego człowieka jako niepowtarzalną jednostkę',
                    },
                    {
                        isCouple: true,
                        headline: 'Dostosowanie',
                        text: 'Indywidualne podejście naszego terapeuty do każdego klienta',
                    },
                    {
                        isAnalized: true,
                        headline: 'Wybór własnej ścieżki',
                        text: 'Klienci nadają kierunek terapii, czują tym samym satysfakcję z samorozwoju',
                    },
                    {
                        isLovePrice: true,
                        headline: 'Zaufanie',
                        text: 'Otaczamy klientów opieką, dajemy zaufanie, przywracamy poczucie sprawstwa',
                    },
                ]}
            />
            <Button
                isLink
                link="/about"
                variant="h1"
                text="Poznajcie nas"
                isUppercase
                colorClass="greendark"
            />
            <CEOProfile
                photo="/images/therapist-her.jpg"
                headline="Agnieszka Sikorska"
                texts={[
                    {
                        text: `Nazywam się Agnieszka Sikorska i praktykuję psychologię humanistyczną od 23 lat. Ukończyłam psychologię na Uniwersytecie SWPS w 2001 roku. 
                    Większość mojego doświadczenia zdobyłam pracując w Poradni Złote serce przez 6 lat. `,
                    },
                    {
                        text: `Obecnie jestem założycielką Poradni HumanHealth.com, która zrewolucjonizowała dotychczasową formę spotkań psychoterapeutycznych w nurcie humanistycznym. 
                    Prowadzę warsztaty na których pracujemy z pacjentami nad pewnością siebie. Świadczymy także indywidualne sesje psychoterapeutyczne online.`,
                    },
                    {
                        text: `Więcej informacji o naszej ofercie znajduje się w zakładce Kontakt. Zapraszamy! `,
                    },
                ]}
            />
        </React.Fragment>
    );
}
