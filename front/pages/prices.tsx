import Headline from "components/items/Headline";
import Article from "components/sections/Article";
import Calculator from "components/sections/Calculator";
import Welcome from "components/sections/Welcome";
import WrapperElements from "components/wrappers/WrapperElements";
import { strapiTherapistGet } from "lib/strapi/therapists/get";
import { strapiTherapistQuery } from "lib/strapi/therapists/queryType";
import React, { useEffect, useState } from "react";

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
                image='/images/notes.jpg'
                headline='Cennik'
                text='Sprawdź promocje i koszty wizyt psychoterapeutycznych'
            />
            <Headline
                place="center"
                color="greendark"
                h2
                text="Zadbaj o swój umysł bez obaw o portfel"
            />
            <Headline
                place="center"
                color="black"
                h3
                text="Skorzystaj z kalkulatora kosztów wizyt psychoterapeutycznych"
            />
            <Calculator/>
            <WrapperElements>
                <Article
                    headline="Promocje"
                    texts={[
                        {
                            text: 'Powyżej 24 sesji terapeutycznych - 10% mniej'
                        },
                        {
                            text: 'Jeśli ktoś z Twoich bliskich korzystał z oferty HumanHealth.com - 5% mniej'
                        },
                        {
                            text: 'Udział w warsztatach oferuje 1 sesje terapeutyczną za darmo!'
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
            </WrapperElements>
            
        </React.Fragment>
    )
}

export default Prices