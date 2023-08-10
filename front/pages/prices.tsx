import Headline from "components/items/Headline";
import Calculator from "components/sections/Calculator";
import Welcome from "components/sections/Welcome";
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
            <Calculator
                
            />
        </React.Fragment>
    )
}

export default Prices