// O nas, krótka historia założenia (inspiracja)

import Headline from 'components/items/Headline';
import Article from 'components/sections/Article';
import CEOProfile from 'components/sections/CEOProfile';
import Profiles from 'components/sections/Profiles';
import Welcome from 'components/sections/Welcome';
import WrapperWidth from 'components/wrappers/WrapperWidth';
import React from 'react';
const About = () => {
    return (
        <React.Fragment>
            <Welcome
                image="/images/help.jpg"
                headline="Poznajcie nas"
                text="Grono najlepszych terapeutów gotowych rozjaśnić Twoją przyszłość!"
            />
            <Headline
                text="Nasz zespół"
                isUppercase
                colorClass="greendark"
                placeClass="center"
                variant="h1"
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
                        text: `Obecnie jestem założycielką Poradni HumanHealth.com, która zrewulocjonizwała dotychczasową formę spotkań psychoterapeutycznych w nurcie humanistycznym. 
                        Prowadzę warsztaty na których pracujemy z pacjentami nad pewnością siebie. Świadczymy także indywidualne sesje psychoterapeutyczne online.`,
                    },
                    {
                        text: `Więcej informacji o naszej ofercie znajduje się w zakładce Kontakt. Zapraszamy! `,
                    },
                ]}
            />
            <Profiles
                items={[
                    {
                        image: '/images/therapist-her-2.jpg',
                        name: 'Bożena Jasińska',
                        text: 'Terapeutka od 1991 roku. Specjalizuje się w pomocy młodzieży podczas wyzwań dojrzewania',
                    },
                    {
                        image: '/images/therapist-him.jpg',
                        name: 'Igor Wysocki',
                        text: 'Terapeuta od 2003 roku. Specjalizuje się w kształtowaniu ścieżki życiowej dorosłych',
                    },
                    {
                        image: '/images/therapist-her-3.jpg',
                        name: 'Natalia Kowalczyk',
                        text: 'Terapeutka od 2010 roku. Specjalizuje się w warsztatach dotyczących pewności siebie',
                    },
                    {
                        image: '/images/therapist-him-2.jpg',
                        name: 'Jacek Głowacki',
                        text: 'Terapeuta od 1996 roku. Specjalizuje się w odkrywaniu zasobów klienta',
                    },
                ]}
            />
            <WrapperWidth>
                <Article
                    headline="Poznaj naszą historię"
                    texts={[
                        {
                            text: `Otwarcie poradni terapeutycznej zawsze było naszym marzeniem. Gabinet został otwarty na początku 2003 roku, od tego czasu nieustannie zajmujemy się udzielaniem profesjonalnej pomocy dorosłym jak i dzieciom. Naszą misja jest wspieranie naszych klientów w trudnych przeżyciach życiowych. Relację klient - terapeuta opieramy na wzajemnym szacunku oraz zaufaniu. Dbamy o to, aby każdy traktował sesje z terapeutą jako bezpieczną przestrzeń, w której zostanie zrozumiany. Mamy za sobą współpracę z setkami klientów, którzy dzięki procesowi terapii zajrzeli w głąb siebie, lepiej zrozumieli swoje potrzeby oraz zdobyli narzędzia potrzebne do samoakceptacji i lepszego, bardziej komfortowego życia codziennego. Zadowoleni klienci są dla nas inspiracja, która motywuje nas do dalszego działania. Pomoc jest naszym celem. W gabinecie używamy podejścia humanistycznego, skupiając się na indywidualnym podejściu, w którym to klient sam ustala tor swojej terapii.`,
                        },
                    ]}
                />
            </WrapperWidth>
        </React.Fragment>
    );
};
export default About;
