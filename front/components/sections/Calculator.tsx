import Button from 'components/items/Button'
import WrapperWidth from 'components/wrappers/Wrapperwidth'
import React from 'react'

const Calculator = () => {
    return (
        <WrapperWidth>
            {/* If above 24 sessions, 15% discount
                If has relatives, 5% discount 
                If workshops, 1 therapy session free

                1300zl - workshops
                200zl - therapy session
            */}
            <div className='calculator'>
                <form className='calculator-form'>
                    <div className='calculator-form__question'>
                        <label htmlFor='therapist'>Wybierz terapeutę</label>
                        <select>
                            {/* taking data from api */}
                            <option value='TEMPBożena'>TEMPBożena</option>
                        </select>
                    </div>
                    <div className='calculator-form__question'>
                        <label htmlFor='session'>Podaj liczbę wizyt, które planujesz odbyć</label>
                        <input type='number'/>
                    </div>
                    <div className='calculator-form__relatives'>
                        <label>Czy ktoś z Twoich bliskich korzystał z usług HumanHealth.com? (opcjonalne)</label>
                        <div className='calculator-form__relatives--answer'>
                            <div className='calculator-form__question'>
                                <input type='checkbox'/><label htmlFor='relativesYES'>Tak</label>
                            </div>
                            <div className='calculator-form__question'>
                                <input type='checkbox'/><label htmlFor='relativesNO'>Nie</label>
                            </div>
                        </div>
                        <div className='calculator-form__question'>
                            <label htmlFor='relativesCode'>Podaj kod wizyty bliskiej osoby (opcjonalne)</label>
                            <input type='number'/>
                        </div>
                    </div>
                    <div className='calculator-form__question'>
                        <input type='checkbox'/>
                        <label htmlFor='workshop'>Warsztaty z pewności siebie</label>
                    </div>
                    <Button
                        h3
                        color='greendark'
                        text='Oblicz'
                        type='submit'
                        className='calculator-form__submit'
                    />
                </form>
            </div>
        </WrapperWidth>
    )
}

export default Calculator