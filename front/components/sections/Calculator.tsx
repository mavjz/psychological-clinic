import Button from 'components/items/Button'
import WrapperWidth from 'components/wrappers/Wrapperwidth'
import React from 'react'

const Calculator = () => {
    return (
        <WrapperWidth>
            {/* If above 10 sessions, 15% discount
                If has relatives, 5% discount 
                If workshops, 1 therapy session free
            */}
            <div className='calculator'>
                <form className='calculator-form'>
                    <label htmlFor='therapist'>Wybierz terapeutę</label>
                    <input/>
                    <label htmlFor='session'>Podaj liczbę wizyt, które planujesz odbyć</label>
                    <input/>
                    <div className='calculator-form__relatives'>
                        <label htmlFor='relatives'>Czy ktoś z Twoich bliskich korzystał z usług HumanHealth.com?</label>
                        <input/>
                        <label htmlFor='relativesCode'>Podaj kod wizyty bliskiej osoby</label>
                        <input/>
                    </div>
                    <label htmlFor='workshop'>Warsztaty z pewności siebie</label>
                    <input/>
                    <Button
                        h3
                        text='Oblicz'
                        className='calculator-form__submit'
                    />
                </form>
            </div>
        </WrapperWidth>
    )
}

export default Calculator