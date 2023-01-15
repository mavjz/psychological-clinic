import HowWeWork from 'components/sections/HowWeWork';
import Welcome from 'components/sections/Welcome';
import WrapperWidth from 'components/wrappers/Wrapperwidth';
import React from 'react';

const Plan = () => {
    return (
        <React.Fragment>
            <Welcome
                image='/images/workshops.jpg'
                headline='Spersonalizowane oferty dla Ciebie'
                text='Jesteś dla Nas najważniejszy'
            />
            <WrapperWidth>
                <HowWeWork
                    isLeft
                    image="/images/therapist-her-2.jpg"
                    name="Bożena Jasińska"
                    texts={[
                        {
                            text: "Historia Oliwii"
                        },
                        {
                            text: "Historia Jagody"
                        },
                        {
                            text: "Spotkanie wstępne"
                        },
                        {
                            text: "Historia Anastazji"
                        },
                    ]}
                />
                <HowWeWork
                    isRight
                    image="/images/therapist-him.jpg"
                    name="Igor Wysocki"
                    texts={[
                        {
                            text: "Historia Ewy"
                        },
                        {
                            text: "Historia Damiana"
                        },
                        {
                            text: "Historia Marii"
                        },
                        {
                            text: "Historia Antoniego"
                        },
                    ]}
                />
                <HowWeWork
                    isLeft
                    image="/images/therapist-her-3.jpg"
                    name="Natalia Kowalczyk"
                    texts={[
                        {
                            text: "Warsztaty z pewności siebie"
                        }
                    ]}
                />
            </WrapperWidth>
        </React.Fragment>
    )
}
 export default Plan