import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';
import { CounterType } from './models';
import Headline from '../Headline';

const Counter = ({ headline, number, text, isPlus }: CounterType) => {
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
                    prefix={isPlus ? '+' : ''}
                    suffix={' ' + headline}
                    end={number}
                    className="counter-headline__text"
                    duration={1}
                />
            </div>
            <div className="counter-text">
                <Headline variant="h4" colorClass="green" text={text || ''} />
            </div>
        </div>
    );
};

export default Counter;
