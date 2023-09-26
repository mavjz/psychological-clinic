import React, { useContext, useEffect, useState } from 'react';
import Headline from '../Headline';
import Paragraph from '../Paragraph';
import { AppointmentDataContext } from 'components/wrappers/AppointmentDataContext';
import Button from '../Button';
import { useRouter } from 'next/router';
import { strapiAppointmentPut } from 'lib/strapi/appointments/put';
import { findAppointmentCodeById, createUniqueAppointmentCode } from './helper';
import { strapiAppointmentGet } from 'lib/strapi/appointments/get';
import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';

const AppointmentApproval = () => {
    // TODO: fix overflow after leaving page
    const router = useRouter();
    const [isDeclined, setIsDeclined] = useState(false);
    const [isApproved, setIsApproved] = useState(false);
    const [appointments, getAppointments] = useState<strapiAppointmentQuery[]>();
    const { appointmentID } = useContext(AppointmentDataContext);
    const bookingAppointment = {
        data: {
            is_booked: true,
            appointment_code: createUniqueAppointmentCode(appointments),
        },
    };

    useEffect(() => {
        strapiAppointmentGet().then((res) => {
            getAppointments(res.data.data);
        });
    }, [isApproved]);

    return (
        <div className="appointmentapproval">
            <div className="appointmentapproval-alert">
                {appointmentID ? (
                    <React.Fragment>
                        <Headline
                            variant="h1"
                            text="Nie powinno Cię tu być, ale..."
                            colorClass="greendark"
                            placeClass="center"
                        />
                        <Paragraph
                            size="medium"
                            text="Nie martw się! Będziesz mógł tu wrócić, gdy zarezerwujesz wizytę u swojego terapuety."
                            colorClass="greendark"
                        />
                        <Button
                            variant="h3"
                            colorClass="greendark"
                            text="Umów wizytę"
                            isLink
                            link="/contact"
                        />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Headline
                            variant="h1"
                            text={`${
                                (isApproved && 'Potwierdzono') ||
                                (isDeclined && 'Anulowano') ||
                                'Potwierdzenie wizyty'
                            }`}
                            colorClass="greendark"
                            placeClass="center"
                        />
                        {/* TODO print appointment_code */}
                        {[appointmentID]?.map((item, index) => (
                            <React.Fragment key={index}>
                                <Paragraph
                                    size="medium"
                                    text={
                                        'Wizyta u ' +
                                        item?.attributes.therapist.data.attributes.first_name +
                                        ' ' +
                                        item?.attributes.therapist.data.attributes.last_name +
                                        ' w dniu ' +
                                        item?.attributes.date.split('-').reverse().join('.') +
                                        'r. o godzinie ' +
                                        item?.attributes.time.slice(0, 5)
                                    }
                                    colorClass="greendark"
                                />
                                <Paragraph
                                    size="medium"
                                    text={`${
                                        (isApproved &&
                                            'Twój kod wizyty to ' +
                                                findAppointmentCodeById({
                                                    appointments,
                                                    appointmentID,
                                                })) ||
                                        (isDeclined && ' ') ||
                                        'Koszt: ' +
                                            item?.attributes.therapist.data.attributes
                                                .session_cost +
                                            'zł. Płatność przed wizytą gotówką lub kartą'
                                    }`}
                                    colorClass="greendark"
                                />
                            </React.Fragment>
                        ))}
                        <div className="appointmentapproval-alert__buttons">
                            {!isApproved && !isDeclined ? (
                                <React.Fragment>
                                    <Button
                                        variant="h3"
                                        colorClass="greendark"
                                        text="Zatwierdź"
                                        onClick={() => {
                                            strapiAppointmentPut(
                                                appointmentID.id,
                                                bookingAppointment
                                            );
                                            setIsApproved(true);
                                        }}
                                    />
                                    <Button
                                        variant="h3"
                                        colorClass="greendark"
                                        text="Anuluj"
                                        onClick={() => {
                                            setIsDeclined(true);
                                        }}
                                    />
                                </React.Fragment>
                            ) : (
                                <Button
                                    variant="h3"
                                    colorClass="greendark"
                                    text="Powrót do strony głównej"
                                    isLink
                                    link="/"
                                />
                            )}
                        </div>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default AppointmentApproval;
