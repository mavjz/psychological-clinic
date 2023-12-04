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
    const [data, setData] = useState<string>();
    const [isSubmited, setIsSubmited] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [isCanceling, setIsCanceling] = useState(false);
    const [isCancelingProperlyDone, setIsCancelingProperlyDone] = useState<string>();
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
    const canceledAppointmentId = () => {
        if (foundAppointment?.length === 1 && isCanceling) {
            return foundAppointment
                .map((item) => {
                    return item.id;
                })
                .toString();
        }
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
        onSubmit: async () => {
            setData(formik.values.code);
            canceledAppointmentId();
            formik.resetForm({ values: { code: '' } });
            setIsSubmited(true);
        },
    });

    useEffect(() => {
        strapiAppointmentGet({ filters: filters, population: 'populate=*' }).then((res) => {
            setFoundAppoinment(res.data.data);
        });
    }, [data || isSubmited]);

    useEffect(() => {
        const canceledAppointmentIdResult = canceledAppointmentId();
        console.log(foundAppointment);
        console.log(canceledAppointmentIdResult);
        console.log(canceledAppointmentIdResult !== undefined);
        const cancellingAppointment = async () => {
            if (isCanceling && canceledAppointmentIdResult !== undefined) {
                try {
                    await strapiAppointmentPut(canceledAppointmentIdResult, canceledAppointment);
                    setIsCancelingProperlyDone('Wizyta została odwołana');
                } catch {
                    setIsCancelingProperlyDone(
                        'Nastąpił błąd systemu. Wizyta nie została odwołana'
                    );
                }
            }
        };
        cancellingAppointment();
    });

    return (
        <WrapperWidth>
            <Button
                variant="h3"
                colorClass="greendark"
                text="Wyszukaj"
                onClick={() => {
                    setIsSearching(true);
                    setData(undefined);
                    setFoundAppoinment(undefined);
                    setIsCanceling(false);
                    setIsSubmited(false);
                }}
            />
            <Button
                variant="h3"
                colorClass="greendark"
                text="Odwołaj"
                onClick={() => {
                    setIsSearching(false);
                    setData(undefined);
                    setFoundAppoinment(undefined);
                    setIsCanceling(true);
                    setIsSubmited(false);
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
                                ? foundAppointment
                                      ?.map((item) => {
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
                                      .toString()
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
                            isCancelingProperlyDone &&
                            foundAppointment &&
                            foundAppointment?.length > 0
                                ? isCancelingProperlyDone
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
