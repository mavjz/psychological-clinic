import Counter from 'components/items/Counter'
import WrapperWidth from 'components/wrappers/Wrapperwidth'
import React from 'react'
import { CounterType } from 'types/items/counter'

const Counters = ({items}: CountersType) => {
    return (
        <WrapperWidth>
            <div className='counters'>
                {items.map((item, index) =>
                    <Counter
                        key={index}
                        number={item?.number}
                        headline={item?.headline}
                        text={item?.text}
                        isPlus={item?.isPlus}
                    />
                )}
            </div>
        </WrapperWidth>
    )
}

export default Counters

type CountersType = {
    items: Array<CounterType>,
}