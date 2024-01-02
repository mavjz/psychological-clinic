import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import Paragraph from '../Paragraph';
import Button from '../Button';
import { strapiAppointmentGet } from 'lib/strapi/appointments/get';
import { filtersAppointmentCode } from './models';
import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';
import { strapiAppointmentPut } from 'lib/strapi/appointments/put';
import WrapperColumn from 'components/wrappers/WrapperColumn';

const FindOrCancelAppointment = () => {
    const [data, setData] = useState<string>();
    const [isSubmited, setIsSubmited] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [isCanceling, setIsCanceling] = useState(false);
    const [messageOfCancelingProperlyDone, setMessageOfCancelingProperlyDone] = useState<string>();
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
            return foundAppointment[0].id.toString();
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

        const cancellingAppointment = async () => {
            if (isCanceling && canceledAppointmentIdResult) {
                try {
                    await strapiAppointmentPut(canceledAppointmentIdResult, canceledAppointment);
                    setMessageOfCancelingProperlyDone('Wizyta została odwołana');
                } catch {
                    setMessageOfCancelingProperlyDone(
                        'Nastąpił błąd systemu. Wizyta nie została odwołana'
                    );
                }
            }
        };

        cancellingAppointment();
    });

    return (
        <WrapperColumn>
            <div className="findorcancelappointment">
                <div className="findorcancelappointment-buttons">
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
                        className={`findorcancelappointment-buttons__button${
                            isSearching ? '--active' : ''
                        }`}
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
                        className={`findorcancelappointment-buttons__button${
                            isCanceling ? '--active' : ''
                        }`}
                    />
                </div>
                <form onSubmit={formik.handleSubmit} className="findorcancelappointment-form">
                    <label id="code">Podaj kod wizyty</label>
                    <div>
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
                    </div>
                    <Button
                        variant="h3"
                        colorClass="greendark"
                        text="Sprawdź"
                        type="submit"
                        className="findorcancelappointment-form__button"
                    />
                </form>
                {isSearching && (
                    <div className={!isSubmited ? 'nonedisplay' : undefined}>
                        <Paragraph
                            text={
                                foundAppointment && foundAppointment?.length > 0
                                    ? foundAppointment
                                          .map((appointment) => {
                                              return `Wizyta odbędzie się w dniu ${appointment.attributes.date
                                                  .split('-')
                                                  .reverse()
                                                  .join(
                                                      '.'
                                                  )}r. o godzinie ${appointment.attributes.time.slice(
                                                  0,
                                                  5
                                              )} u ${
                                                  appointment.attributes.therapist.data.attributes
                                                      .first_name
                                              } ${
                                                  appointment.attributes.therapist.data.attributes
                                                      .last_name
                                              }`;
                                          })
                                          .toString()
                                    : 'Brak wizyty o podanym kodzie'
                            }
                            size="small"
                            colorClass="greendark"
                        />
                    </div>
                )}
                {isCanceling && (
                    <div className={!isSubmited ? 'nonedisplay' : undefined}>
                        <Paragraph
                            text={
                                messageOfCancelingProperlyDone &&
                                foundAppointment &&
                                foundAppointment?.length > 0
                                    ? messageOfCancelingProperlyDone
                                    : 'Brak wizyty o podanym kodzie'
                            }
                            size="small"
                            colorClass="greendark"
                        />
                    </div>
                )}
            </div>
        </WrapperColumn>
    );
};

export default FindOrCancelAppointment;
