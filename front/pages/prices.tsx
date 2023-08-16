import Headline from "components/items/Headline";
import Article from "components/sections/Article";
import Calculator from "components/sections/Calculator";
import Welcome from "components/sections/Welcome";
import WrapperElements from "components/wrappers/WrapperElements";
import React from "react";

const Prices = () => {
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
                <Article
                    headline="Cennik"
                    texts={[
                        {
                            text: 'Warsztaty "pewność siebie" - 1300zł'
                        },
                        {
                            text: ''
                        },
                        {
                            text: ''
                        },
                    ]}
                />
            </WrapperElements>
            
        </React.Fragment>
    )
}

export default Prices