import Button from 'components/items/Button'
import WrapperWidth from 'components/wrappers/Wrapperwidth'
import { useFormik } from 'formik'
import React from 'react'

const Calculator = () => {
    const formik = useFormik({
        initialValues: {
            therapist: '',
            session: '',
            relative: '',
            relativesCode: '',
            workshop: '',
        },
        onSubmit: () => {
            console.log(formik.values)
        }
    })
    return (
        <WrapperWidth>
            {/* If above 24 sessions, 15% discount
                If has relatives, 5% discount 
                If workshops, 1 therapy session free

                1300zl - workshops
                200zl - therapy session
            */}
            <div className='calculator'>
                <form className='calculator-form' onSubmit={formik.handleSubmit}>
                    <div className='calculator-form__question'>
                        <label htmlFor='therapist'>Wybierz terapeutę</label>
                        <select onChange={formik.handleChange} name='therapist'>
                            {/* TODO: taking data from api 
                                TODO: types for therapists
                            */}
                            <option value={formik.values.therapist.Jacek}>TEMPJacek</option>
                            <option value={formik.values.therapist.Bożena}>TEMPBożena</option>
                        </select>
                    </div>
                    <div className='calculator-form__question'>
                        <label htmlFor='session'>Podaj liczbę wizyt, które planujesz odbyć</label>
                        <input 
                            type='number' 
                            value={formik.values.session}
                            onChange={formik.handleChange}
                            name='session'
                            placeholder='np. 12'
                        />
                    </div>
                    <div className='calculator-form__relatives'>
                        <label>Czy ktoś z Twoich bliskich korzystał z usług HumanHealth.com? (opcjonalne)</label>
                        <div className='calculator-form__relatives--answer'>
                            {/* TODO: relative output */}
                            <div className='calculator-form__question'>
                                <input 
                                    type='radio' 
                                    name='relative' 
                                    value={formik.values.relative.yes}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor='relative'>Tak</label>
                            </div>
                            <div className='calculator-form__question'>
                                <input 
                                    type='radio' 
                                    name='relative' 
                                    value={formik.values.relative.no}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor='relative'>Nie</label>
                            </div>
                        </div>
                        <div className='calculator-form__question'>
                            <label htmlFor='relativesCode'>Podaj kod wizyty bliskiej osoby (opcjonalne)</label>
                            <input 
                                type='number' 
                                value={formik.values.relativesCode}
                                onChange={formik.handleChange}
                                name='relativesCode'
                                placeholder='np. 000024'
                            />
                        </div>
                    </div>
                    <div className='calculator-form__question'>
                        <input 
                            type='checkbox' 
                            name='workshops' 
                            value={formik.values.workshop}
                            onChange={formik.handleChange}
                        />
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