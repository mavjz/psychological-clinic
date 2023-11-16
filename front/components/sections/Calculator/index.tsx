import Paragraph from 'components/items/Paragraph';
import { ErrorMessage, useFormik } from 'formik';
import { strapiTherapistsGet } from 'lib/strapi/therapists/get';
import { strapiTherapistsQuery } from 'lib/strapi/therapists/queryType';
import React, { useEffect, useState, useRef } from 'react';
import { properSuffixForPrice, therapyCostCalculation } from './helper';
import WrapperWidth from 'components/wrappers/WrapperWidth';
import Button from 'components/items/Button';
import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';
import { strapiAppointmentGet } from 'lib/strapi/appointments/get';
import * as Yup from 'yup';

const Calculator = () => {
    // TODO solve for/label problem
    const [cost, setCost] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [appointmentList, setAppointmentList] = useState<strapiAppointmentQuery[]>();
    const [therapistList, setTherapistList] = useState<strapiTherapistsQuery[]>();
    const [data, setData] = useState<formData>();
    const [isSubmit, setIsSubmit] = useState(false);
    const [isRelativeChecked, setIsRelativeChecked] = useState(false);
    const onlyNumberInput = useRef<HTMLInputElement>(null);
    const idOfTherapists = therapistList ? therapistList?.map((item) => item.id.toString()) : [];

    const formik = useFormik({
        initialValues: {
            therapist: '',
            session: '',
            relative: '',
            relativesCode: '',
            workshop: false,
        },
        validationSchema: Yup.object().shape({
            therapist: Yup.string().required('Wymagane').oneOf(idOfTherapists),
            session: Yup.string()
                .matches(/^[0-9]+$/, 'Podaj liczbę spotkań w cyfrach')
                .required('Wymagane'),
            relative: Yup.string().required('Zaznacz jedną z opcji'),
            relativesCode: Yup.string().when('relative', {
                is: (relative: string) => relative === 'promo',
                then: () =>
                    Yup.string()
                        .length(6, 'Wpisz 6 cyfr kodu')
                        .matches(/^[0-9]*$/, 'Podaj kod w cyfrach')
                        .required('Wymagane'),
            }),
            workshop: Yup.boolean(),
        }),
        onSubmit: () => {
            setData(formik.values);
            setIsSubmit(true);
        },
    });

    const validateNumericInput = () => {
        if (onlyNumberInput.current) {
            onlyNumberInput.current.value = onlyNumberInput.current.value.replace(/[^0-9]/g, '');
        }
    };

    useEffect(() => {
        strapiTherapistsGet().then((res) => {
            setTherapistList(res.data.data);
        });
        strapiAppointmentGet().then((res) => {
            setAppointmentList(res.data.data);
        });
    }, []);

    useEffect(() => {
        if (formik.values.relative === 'promo') setIsRelativeChecked(true);
        else setIsRelativeChecked(false);
    }, [formik.values.relative]);

    useEffect(() => {
        setCost(
            therapyCostCalculation({ data, therapistList, appointmentList, cost, discount })?.cost
        );
        setDiscount(
            therapyCostCalculation({ data, therapistList, appointmentList, cost, discount })
                ?.discount
        );
    }, [data]);

    return (
        <WrapperWidth>
            {/* If above 24 sessions, 15% discount
              If has relatives, 5% discount 
              If workshops, 1 therapy session free
            */}
            <div className="calculator">
                <form className="calculator-form" onSubmit={formik.handleSubmit}>
                    <div className="calculator-form__question">
                        <label htmlFor="therapist">Wybierz terapeutę</label>
                        <select
                            onChange={formik.handleChange}
                            name="therapist"
                            defaultValue={'DEFAULT'}
                        >
                            <option disabled hidden value={'DEFAULT'}>
                                Kliknij by rozwinąć listę
                            </option>
                            {therapistList?.map((therapist, index) => (
                                <option value={therapist.id} key={index}>
                                    {therapist.attributes.first_name +
                                        ' ' +
                                        therapist.attributes.last_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {formik.errors.therapist && formik.touched.therapist && (
                        <Paragraph text={formik.errors.therapist} size="small" colorClass="red" />
                    )}
                    <div className="calculator-form__question">
                        <label htmlFor="session">Podaj liczbę wizyt, które planujesz odbyć</label>
                        <input
                            type="number"
                            value={formik.values.session}
                            onChange={formik.handleChange}
                            name="session"
                            placeholder="np. 12"
                        />
                    </div>
                    {formik.errors.session && formik.touched.session && (
                        <Paragraph text={formik.errors.session} size="small" colorClass="red" />
                    )}
                    <div className="calculator-form__relatives">
                        <label>Czy ktoś z Twoich bliskich korzystał z usług HumanHealth.com?</label>
                        <div className="calculator-form__relatives--answer">
                            <div className="calculator-form__question">
                                <input
                                    type="radio"
                                    name="relative"
                                    value="promo"
                                    checked={formik.values.relative === 'promo'}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="relative">Tak</label>
                            </div>
                            <div className="calculator-form__question">
                                <input
                                    type="radio"
                                    name="relative"
                                    value="regular"
                                    checked={formik.values.relative === 'regular'}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="relative">Nie</label>
                            </div>
                        </div>
                        {formik.errors.relative && formik.touched.relative && (
                            <Paragraph
                                text={formik.errors.relative}
                                size="small"
                                colorClass="red"
                            />
                        )}
                        <div className="calculator-form__question">
                            <label htmlFor="relativesCode">
                                Podaj kod wizyty bliskiej osoby (opcjonalne)
                            </label>
                            <input
                                ref={onlyNumberInput}
                                type="text"
                                value={formik.values.relativesCode}
                                onChange={formik.handleChange}
                                pattern="\d*"
                                name="relativesCode"
                                placeholder="np. 000024"
                                disabled={!isRelativeChecked}
                                onInput={validateNumericInput}
                            />
                        </div>
                        {formik.errors.relativesCode && formik.touched.relativesCode && (
                            <Paragraph
                                text={formik.errors.relativesCode}
                                size="small"
                                colorClass="red"
                            />
                        )}
                    </div>
                    <div className="calculator-form__question">
                        <input
                            type="checkbox"
                            name="workshop"
                            value={formik.values.workshop}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="workshop">Warsztaty z pewności siebie</label>
                    </div>
                    {formik.errors.workshop && formik.touched.workshop && (
                        <Paragraph text={formik.errors.workshop} size="small" colorClass="red" />
                    )}
                    <Button
                        variant="h3"
                        colorClass="greendark"
                        text="Oblicz"
                        type="submit"
                        className="calculator-form__submit"
                    />
                </form>
                {isSubmit && (
                    <Paragraph
                        size="big"
                        placeClass="center"
                        colorClass="black"
                        text={`Łączny koszt wynosi ${cost} złot${properSuffixForPrice(
                            cost
                        )}. Udało Ci się zaoszczędzić ${discount} złot${properSuffixForPrice(
                            discount
                        )}.`}
                    />
                )}
            </div>
        </WrapperWidth>
    );
};

export default Calculator;

export type formData = {
    therapist?: string;
    session: string;
    relative?: string;
    relativesCode?: string;
    workshop?: boolean;
};
