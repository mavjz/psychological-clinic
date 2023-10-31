import Paragraph from 'components/items/Paragraph';
import { ErrorMessage, useFormik } from 'formik';
import { strapiTherapistsGet } from 'lib/strapi/therapists/get';
import { strapiTherapistsQuery } from 'lib/strapi/therapists/queryType';
import React, { useEffect, useState } from 'react';
import { properSuffixForPrice, therapyCostCalculation } from './helper';
import WrapperWidth from 'components/wrappers/WrapperWidth';
import Button from 'components/items/Button';
import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';
import { strapiAppointmentGet } from 'lib/strapi/appointments/get';
import * as Yup from 'yup';

const Calculator = () => {
    // TODO yup validator
    // TODO solve for/label problem
    const [cost, setCost] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [appointmentList, setAppointmentList] = useState<strapiAppointmentQuery[]>();
    const [therapistList, setTherapistList] = useState<strapiTherapistsQuery[]>();
    const [data, setData] = useState<formData>();
    const [isSubmit, setIsSubmit] = useState(false);
    const idOfTherapists = therapistList?.map((item) => item.id.toString()) as string[];
    const formik = useFormik({
        initialValues: {
            therapist: '',
            session: '',
            relative: '',
            relativesCode: '',
            workshop: false,
        },
        onSubmit: () => {
            setData(formik.values);
            setIsSubmit(true);
        },
        validationSchema: Yup.object().shape({
            therapist: Yup.string().required('Wybierz terapeutę').oneOf(idOfTherapists),
            session: Yup.string()
                .matches(/^[0-9]+$/, 'Podaj liczbę spotkań w cyfrach')
                .required('Podaj liczbę spotkań'),
            relative: Yup.string()
                .matches(/(promo | regular)/)
                .required('Zaznacz jedną z opcji'),
            relativesCode: Yup.string()
                .min(6, 'Wpisz 6 cyfr kodu')
                .max(6, 'Wpisz 6 cyfr kodu')
                .matches(/^[0-9]+$/, 'Podaj kod w cyfrach'),
            workshop: Yup.boolean(),
        }),
    });

    useEffect(() => {
        strapiTherapistsGet().then((res) => {
            setTherapistList(res.data.data);
        });
        strapiAppointmentGet().then((res) => {
            setAppointmentList(res.data.data);
        });
    }, []);

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
                        {formik.errors.therapist && <div>{formik.errors.therapist}</div>}
                    </div>
                    <div className="calculator-form__question">
                        <label htmlFor="session">Podaj liczbę wizyt, które planujesz odbyć</label>
                        <input
                            type="number"
                            value={formik.values.session}
                            onChange={formik.handleChange}
                            name="session"
                            placeholder="np. 12"
                        />
                        {formik.errors.session && <div>{formik.errors.session}</div>}
                    </div>
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
                            {formik.errors.relative && <div>{formik.errors.relative}</div>}
                        </div>
                        <div className="calculator-form__question">
                            <label htmlFor="relativesCode">
                                Podaj kod wizyty bliskiej osoby (opcjonalne)
                            </label>
                            <input
                                type="number"
                                value={formik.values.relativesCode}
                                onChange={formik.handleChange}
                                name="relativesCode"
                                placeholder="np. 000024"
                            />
                            {formik.errors.relativesCode && (
                                <div>{formik.errors.relativesCode}</div>
                            )}
                        </div>
                    </div>
                    <div className="calculator-form__question">
                        <input
                            type="checkbox"
                            name="workshop"
                            value={formik.values.workshop}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="workshop">Warsztaty z pewności siebie</label>
                        {formik.errors.relativesCode && <div>{formik.errors.workshop}</div>}
                    </div>
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
