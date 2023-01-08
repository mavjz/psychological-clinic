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
                    }
                ]}
            />
        </React.Fragment>
    )
}

export default Sources