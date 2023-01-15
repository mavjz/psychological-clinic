// Źródła wykorzystane w projekcie

import Article from "components/sections/Article";
import React from "react";

const Sources = () => {
    return (
        <React.Fragment>
            <Article
                headline="Źródła"
                texts={[
                    {
                        text: "Zdjęcia psychoterapeutów: This-Person-Does-not-Exist.com, 2022. "
                    },
                    {
                        text: "Pozostałe zdjęcia: https://www.istockphoto.com/, https://www.shutterstock.com/, https://www.freepik.com, https://pl.depositphotos.com/, https://www.dreamstime.com/"
                    },
                    {
                        text: "Ikony: https://icons8.com/"
                    },
                    {
                        text: `Derc M., O przedmiocie psychologii humanistycznej, [w:] "Acta Universitatis Nicolai Copernici. Nauki Humanistyczno-Społeczne. Filozofia XVI", Toruń 1995, z. 279, s. 37–49.`
                    },
                    {
                        text: `Krupa G., Psychoterapia humanistyczno-egzystencjalna w świetle filozofii spotkania, [w:] "Etyka pracy socjalnej w filozofii spotkania i dialogu", red. M. Duda, I. Rybka, H. Kaszyński, Kraków 2017, s. 53-70.`
                    },
                    {
                        text: `Danilewska, J. (2004). Psychologia humanistyczna a pedagogika szkolna, czyli siła" romantycznej utopii" na usługach szkoły w teorii i praktyce.`
                    },
                    {
                        text: `Nieciuński, S. (2003). Założenia psychologii humanistycznej a proces edukacji.`
                    },
                    {
                        text: `Kinsey Goman, C. (2014). Building Self-Confidence. Personal Excellence, 19(6), 10–11.`
                    }
                ]}
            />
        </React.Fragment>
    )
}

export default Sources