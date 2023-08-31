import WrapperWidth from 'components/wrappers/Wrapperwidth';
import { isSameDay } from 'date-fns';
import { strapiAppointmentGet } from 'lib/strapi/appointments/get';
import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';
import { strapiTherapistGet } from 'lib/strapi/therapists/get';
import { strapiTherapistQuery } from 'lib/strapi/therapists/queryType';
import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { Grid } from 'react-loader-spinner';
import Button from '../Button';
import { filters, getDateofAppointments, getTimeOfAppointment } from './helper';

const Appointment = () => {
    const filters: filters = {};
    const [therapists, setTherapists] = useState<strapiTherapistQuery[]>();
    const [appointments, setAppointments] = useState<strapiAppointmentQuery[]>();
    const [chosenTherapist, setChosenTherapist] = useState<string>();
    const [chosenDate, setChosenDate] = useState<Date>();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        strapiTherapistGet().then((res) => {
            setTherapists(res.data.data);
        });
    }, []);
    useEffect(() => {
        if (chosenDate) {
            // changing timezone by reducing by 2h (because of polish timezone (GMT+2))
            const rightTime = new Date(chosenDate?.getTime() - -120 * 60 * 1000);
            // changing format of date to YYYY-MM-DD
            const queryChosenDate = rightTime?.toISOString().slice(0, 10);
            filters.date = {
                $eq: queryChosenDate,
            };
        }
        filters.therapist = {
            first_name: {
                $eq: chosenTherapist,
            },
        };
        strapiAppointmentGet(filters).then((res) => {
            setAppointments(res.data.data);
            setIsLoading(false);
        });
    }, [chosenDate || chosenTherapist]);
    // ??? https://github.com/gpbl/react-day-picker/issues/768
    const isDayDisabled = (day: Date) => {
        return !getDateofAppointments({ appointments })?.some((disabledDay) =>
            isSameDay(day, disabledDay)
        );
    };
    if (isLoading) {
        return (
            <WrapperWidth>
                <div className="appointment-loading">
                    <Grid
                        height="100"
                        width="100"
                        color="#3C493F"
                        ariaLabel="grid-loading"
                        radius="12.5"
                        visible={true}
                    />
                </div>
            </WrapperWidth>
        );
    }
    return (
        <WrapperWidth>
            <div className="appointment-content">
                <div className="appointment-content__panel">
                    <Button
                        variant="h3"
                        text="Wszyscy terapeuci"
                        colorClass="greendark"
                        onClick={() => setChosenTherapist(undefined)}
                        className="appointment-content__panel--button"
                    />
                    {therapists?.map((therapist, index) => (
                        <Button
                            key={index}
                            variant="h3"
                            text={
                                therapist.attributes.first_name +
                                ' ' +
                                therapist.attributes.last_name
                            }
                            colorClass="greendark"
                            onClick={() => {
                                setChosenTherapist(therapist.attributes.first_name);
                                setChosenDate(undefined);
                            }}
                            className="appointment-content__panel--button"
                        />
                    ))}
                </div>
                <div className="appointment-content__data">
                    <div className="appointment-content__data--calendar">
                        <DayPicker
                            showOutsideDays
                            ISOWeek
                            fromMonth={new Date()}
                            disabled={isDayDisabled}
                            modifiersClassNames={{
                                disabled: 'appointment-content__data--calendar-disabled',
                                selected: 'appointment-content__data--calendar-selected',
                                today: 'appointment-content__data--calendar-today',
                            }}
                            mode="single"
                            selected={chosenDate}
                            onSelect={setChosenDate}
                        />
                    </div>
                    <div
                        className={
                            chosenDate ? 'appointment-content__data--availabledates' : 'hidden'
                        }
                    >
                        {getTimeOfAppointment({ appointments })?.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </div>
                </div>
            </div>
        </WrapperWidth>
    );
};

export default Appointment;
