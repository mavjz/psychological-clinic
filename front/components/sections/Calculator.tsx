import Button from 'components/items/Button'
import Paragraph from 'components/items/Paragraph'
import WrapperWidth from 'components/wrappers/Wrapperwidth'
import { useFormik } from 'formik'
import { strapiTherapistGet } from 'lib/strapi/therapists/get'
import { strapiTherapistQuery } from 'lib/strapi/therapists/queryType'
import React, {useEffect, useState} from 'react'

const Calculator = () => {
    const [data, setData] = useState<formData>();
    const [isSubmit, setIsSubmit] = useState(false);
    let cost: number = 0;
    let discount: number = 0;
    const formik = useFormik({
        initialValues: {
            therapist: '',
            session: undefined,
            relative: '',
            relativesCode: undefined,
            workshop: false,
        },
        onSubmit: () => {
            setData(formik.values);
            setIsSubmit(true);
        },
    });
    const [therapistList, setTherapistList] = useState<strapiTherapistQuery[]>();
    useEffect(() => {
        strapiTherapistGet({}).then((res) => {
            setTherapistList(res.data.data);
        });
    }, []);
    const therapistNameList = therapistList?.map(item => item.attributes.first_name);
    useEffect(() => {
        if (data?.workshop === true) {
            data.session = Number(data.session) -1;
        }
        therapistList?.map((item) => {
                if (data?.therapist === item.attributes.first_name) {
                    cost = item.attributes.session_cost * Number(data.session);
                    if (data?.workshop === true) {
                        if (Number(data.session)+1 >= 24) {
                            cost = cost * 0.9;
                            discount = cost * 0.1;
                        }
                    } else {
                        if (Number(data.session) >= 24) {
                            cost = cost * 0.9;
                            discount = cost * 0.1;
                        }
                    }
            }}
        );
        if (data?.workshop === true) {
            cost = cost + 1300;
            data.session = Number(data.session)+1;
        }
        if (data?.relative === "true") {
            cost = cost * 0.95;
            discount = discount + cost * 0.05;
        }
        console.log(cost + "-------" + discount);
    }, [data])
   
    return (
        <WrapperWidth>
            {/* If above 24 sessions, 15% discount
                If has relatives, 5% discount 
                If workshops, 1 therapy session free
            */}
            <div className='calculator'>
                <form className='calculator-form' onSubmit={formik.handleSubmit}>
                    <div className='calculator-form__question'>
                        <label htmlFor='therapist'>Wybierz terapeutę</label>
                        <select onChange={formik.handleChange} name='therapist' defaultValue={'DEFAULT'}>
                            <option disabled hidden value={'DEFAULT'}>Kliknij by rozwinąć listę</option>
                            {/*
                                TODO: types for therapists
                            */}
                            {
                                therapistNameList?.map((item, index) => 
                                    <option value={formik.values.therapist.item} key={index}>{item}</option>
                                )
                            }
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
                            <div className='calculator-form__question'>
                                <input 
                                    type='radio' 
                                    name='relative' 
                                    value='true'
                                    checked={formik.values.relative === 'true'}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor='relative'>Tak</label>
                            </div>
                            <div className='calculator-form__question'>
                                <input 
                                    type='radio' 
                                    name='relative' 
                                    value='false'
                                    checked={formik.values.relative === 'false'}
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
                            name='workshop' 
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
                {isSubmit && 
                // TODO*: refresh fetched data 
                    <Paragraph
                        big
                        place='center'
                        color='black'
                        text={`Łączny koszt wynosi ${cost} złotych. Udało Ci się zaoszczędzić ${discount} złotych`}
                    />
                }
            </div>
        </WrapperWidth>
    )
}

export default Calculator

type formData = {
    therapist?: string, 
    session: number | undefined,
    relative?: string,
    relativesCode?: number | undefined,
    workshop?: boolean,
}