import React, { useContext, useEffect, useState } from 'react';
import Headline from '../Headline';
import Paragraph from '../Paragraph';
import { AppointmentDataContext } from 'components/wrappers/AppointmentDataContext';
import Button from '../Button';
import { useRouter } from 'next/router';
import { strapiAppointmentPut } from 'lib/strapi/appointments/put';
import { giveAppointmentCode } from './helper';
import { strapiAppointmentGet } from 'lib/strapi/appointments/get';
import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';

const AppointmentApproval = () => {
    document.body.style.overflow = 'hidden';
    const router = useRouter();
    const [appointments, getAppointments] = useState<strapiAppointmentQuery[]>();
    useEffect(() => {
        strapiAppointmentGet().then((res) => {
            getAppointments(res.data.data);
        });
    }, []);
    const { appointmentID } = useContext(AppointmentDataContext);
    const bookingAppointment = {
        data: { is_booked: true, appointment_code: giveAppointmentCode(appointments) },
    };

    return (
        <div className="appointmentapproval">
            <div className="appointmentapproval-alert">
                <Headline
                    variant="h1"
                    text="Potwierdzenie wizyty"
                    colorClass="greendark"
                    placeClass="center"
                />
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
                            text={
                                'Koszt: ' +
                                item?.attributes.therapist.data.attributes.session_cost +
                                'zł. Płatność przed wizytą gotówką lub kartą'
                            }
                            colorClass="greendark"
                        />
                    </React.Fragment>
                ))}
                <div className="appointmentapproval-alert__buttons">
                    <Button
                        variant="h3"
                        colorClass="greendark"
                        text="Zatwierdź"
                        onClick={() => {
                            strapiAppointmentPut(appointmentID.id, bookingAppointment);
                        }}
                    />
                    <Button
                        variant="h3"
                        colorClass="greendark"
                        text="Powrót do strony głównej"
                        onClick={() => {
                            router.push('/');
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentApproval;
