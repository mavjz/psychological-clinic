import Image from "next/image";
import React from "react";
import CountUp, { useCountUp } from 'react-countup';
import { CounterType } from "types/items/counter";
import Headline from "./Headline";

const Counter = ({headline, number, text, isPlus}: CounterType) => {
    return (
        <div className="counter">
            <div className="counter-headline">
                <div className="counter-headline__placeholder">
                    <Image
                        src="/icons/checkmark.png"
                        alt="Checkmark"
                        fill
                        className="counter-headline__placeholder--images"
                    />
                </div>
                <CountUp
                    prefix={isPlus ? "+": ""}
                    suffix={" " + headline} 
                    end={number}
                    className="counter-headline__text"
                    duration={1}
                />
            </div>
            <div className="counter-text">
                <Headline
                    size="h4"
                    color="green"
                    text={text || ""}
                />
            </div>
        </div>
    )
}

export default Counter

