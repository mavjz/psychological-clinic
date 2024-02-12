import Headline from 'components/items/Headline';
import Article from 'components/sections/Article';
import Calculator from 'components/sections/Calculator';
import Welcome from 'components/sections/Welcome';
import WrapperColumn from 'components/wrappers/WrapperColumn';
import React, { useEffect, useState } from 'react';

const Prices = () => {
    // const [therapistList, setTherapistList] = useState<strapiTherapistQuery[]>();
    // useEffect(() => {
    //     strapiTherapistGet({}).then((res) => {
    //         setTherapistList(res.data.data);
    //     });
    // }, []);
    // const costs = therapistList?.map(item =>
    //     `${item.attributes.first_name + " " + item.attributes.last_name} - koszt wizyty ${item.attributes.session_cost} złotych`
    // );
    return (
        <React.Fragment>
            <Welcome
                image="/images/notes.jpg"
                headline="Cennik"
                text="Sprawdź promocje i koszty wizyt psychoterapeutycznych"
            />
            <Headline
                placeClass="center"
                colorClass="greendark"
                variant="h2"
                text="Zadbaj o swój umysł bez obaw o portfel"
            />
            <Headline
                placeClass="center"
                colorClass="black"
                variant="h3"
                text="Skorzystaj z kalkulatora kosztów wizyt psychoterapeutycznych"
            />
            <Calculator />
            <WrapperColumn>
                <Article
                    headline="Promocje"
                    texts={[
                        {
                            text: 'Powyżej 24 sesji terapeutycznych - 10% mniej',
                        },
                        {
                            text: 'Jeśli ktoś z Twoich bliskich korzystał z oferty HumanHealth.com - 5% mniej',
                        },
                        {
                            text: 'Udział w warsztatach oferuje 1 sesje terapeutyczną za darmo!',
                        },
                    ]}
                />
                {/* <Article
                    headline="Cennik"
                    texts={[
                        {
                            text: 'Warsztaty "pewność siebie" - 1300zł'
                        },
                        {
                            text: costs
                        }
                    ]}
                /> */}
            </WrapperColumn>
        </React.Fragment>
    );
};

export default Prices;
