import Counter from 'components/items/Counter';
import WrapperWidth from 'components/wrappers/WrapperWidth';
import React from 'react';
import { CountersType } from './models';

const Counters = ({ items }: CountersType) => {
    return (
        <WrapperWidth>
            <div className="counters">
                {items.map((item, index) => (
                    <Counter
                        key={index}
                        number={item?.number}
                        headline={item?.headline}
                        text={item?.text}
                        isPlus={item?.isPlus}
                    />
                ))}
            </div>
        </WrapperWidth>
    );
};

export default Counters;
