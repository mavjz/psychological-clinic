import WrapperWidth from 'components/wrappers/WrapperWidth';
import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import Paragraph from '../Paragraph';
import Button from '../Button';
import { strapiAppointmentGet } from 'lib/strapi/appointments/get';
import { filtersAppointmentCode } from './models';
import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';
import { strapiAppointmentPut } from 'lib/strapi/appointments/put';

const FindOrCancelAppointment = () => {
    // TODO: refresh annoucement
    const [data, setData] = useState<string>();
    const [isSubmited, setIsSubmited] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [isCanceling, setIsCanceling] = useState(false);
    const properCodeInput = useRef<HTMLInputElement>(null);
    const [foundAppointment, setFoundAppoinment] = useState<strapiAppointmentQuery[]>();
    const filters: filtersAppointmentCode = {
        appointment_code: {
            $eq: data,
        },
    };
    const validateCode = () => {
        if (properCodeInput.current)
            properCodeInput.current.value = properCodeInput.current.value.replace(/[^0-9]/g, '');
    };
    const canceledAppointment = {
        data: {
            appointment_code: null,
            is_booked: false,
        },
    };
    const canceledAppointmentId =
        isCanceling &&
        foundAppointment
            ?.map((item) => {
                return item.id;
            })
            .toString();

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
            console.log(formik.values.code);
            formik.resetForm({ values: { code: '' } });
            setIsSubmited(true);
            isCanceling &&
                canceledAppointmentId &&
                strapiAppointmentPut(canceledAppointmentId, canceledAppointment);
            console.log(foundAppointment);
        },
    });

    useEffect(() => {
        strapiAppointmentGet({ filters: filters, population: 'populate=*' }).then((res) => {
            setFoundAppoinment(res.data.data);
        });
    }, [data || filters || isSubmited]);

    foundAppointment?.map((item) => {
        return `Wizyta odbędzie się w dniu ${item.attributes.date
            .split('-')
            .reverse()
            .join('.')} o godzinie ${item.attributes.time.slice(0, 5)} u ${
            item.attributes.therapist.data.attributes.first_name
        } ${item.attributes.therapist.data.attributes.last_name}`;
    });

    return (
        <WrapperWidth>
            <Button
                variant="h3"
                colorClass="greendark"
                text="Wyszukaj"
                onClick={() => {
                    setIsSearching(true);
                    setIsCanceling(false);
                }}
            />
            <Button
                variant="h3"
                colorClass="greendark"
                text="Odwołaj"
                onClick={() => {
                    setIsSearching(false);
                    setIsCanceling(true);
                }}
            />
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
            {isSearching && (
                <div className={!isSubmited ? 'nonedisplay' : undefined}>
                    <Paragraph
                        text={
                            foundAppointment && foundAppointment?.length > 0
                                ? foundAppointment?.map((item) => {
                                      return `Wizyta odbędzie się w dniu ${item.attributes.date
                                          .split('-')
                                          .reverse()
                                          .join('.')}r. o godzinie ${item.attributes.time.slice(
                                          0,
                                          5
                                      )} u ${
                                          item.attributes.therapist.data.attributes.first_name
                                      } ${item.attributes.therapist.data.attributes.last_name}`;
                                  })
                                : 'Brak wizyty o podanym kodzie'
                        }
                        size="small"
                    />
                </div>
            )}
            {isCanceling && (
                <div className={!isSubmited ? 'nonedisplay' : undefined}>
                    <Paragraph
                        text={
                            foundAppointment && foundAppointment?.length > 0
                                ? 'Wizyta została odwołana'
                                : 'Brak wizyty o podanym kodzie'
                        }
                        size="small"
                    />
                </div>
            )}
        </WrapperWidth>
    );
};

export default FindOrCancelAppointment;
