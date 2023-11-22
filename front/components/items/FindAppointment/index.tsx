import WrapperWidth from 'components/wrappers/WrapperWidth';
import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import Paragraph from '../Paragraph';
import Button from '../Button';
import { strapiAppointmentGet } from 'lib/strapi/appointments/get';
import { filtersAppointmentCode } from './helper';
import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';

const FindAppointment = () => {
    const [data, setData] = useState<string>();
    const [isSubmited, setIsSubmited] = useState(false);
    const properCodeInput = useRef<HTMLInputElement>(null);
    const [foundAppointment, setFoundAppoinment] = useState<strapiAppointmentQuery[]>();
    const filters: filtersAppointmentCode = {
        appointment_code: {
            $eq: data,
        },
    };
    const formik = useFormik({
        initialValues: {
            code: '',
        },
        validationSchema: Yup.object().shape({
            code: Yup.string()
                .length(6, 'Kod powinien posuadać 6 cyfr')
                .matches(/^[0-9]*$/, 'Podaj kod w cyfrach')
                .required('Wymagane'),
        }),
        onSubmit: () => {
            setData(formik.values.code);
            setIsSubmited(true);
        },
    });

    const validateCode = () => {
        if (properCodeInput.current)
            properCodeInput.current.value = properCodeInput.current.value.replace(/[^0-9]/g, '');
    };

    useEffect(() => {
        strapiAppointmentGet({ filters: filters }).then((res) => {
            setFoundAppoinment(res.data.data);
        });
    }, [isSubmited]);

    return (
        <WrapperWidth>
            <form onSubmit={formik.handleSubmit}>
                <label id="code">Podaj kod wizyty</label>
                <input
                    id="code"
                    ref={properCodeInput}
                    type="text"
                    value={formik.values.code}
                    onChange={formik.handleChange}
                    placeholder="np. 000122"
                    onInput={validateCode}
                />
                {formik.errors.code && formik.touched.code && (
                    <Paragraph text={formik.errors.code} size="small" colorClass="red" />
                )}
                <Button variant="h3" colorClass="greendark" text="Sprawdź" type="submit" />
            </form>
            <div className={!isSubmited ? 'nonedisplay' : undefined}>
                <Paragraph
                    text={
                        foundAppointment && foundAppointment?.length > 0
                            ? `${foundAppointment}`
                            : 'Brak wizyty o takim kodzie'
                    }
                    size="small"
                />
            </div>
        </WrapperWidth>
    );
};

export default FindAppointment;
