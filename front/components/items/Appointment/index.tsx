import WrapperWidth from 'components/wrappers/WrapperWidth';
import { isSameDay } from 'date-fns';
import { strapiAppointmentGet, strapiAppointmentGetPopulation } from 'lib/strapi/appointments/get';
import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';
import { strapiTherapistsGet } from 'lib/strapi/therapists/get';
import { strapiTherapistsQuery } from 'lib/strapi/therapists/queryType';
import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { Grid } from 'react-loader-spinner';
import Button from '../Button';
import { useRouter } from 'next/router';
import { filters } from './models';
import {
    formingDate,
    getDateOfAppointments,
    getIdOfAppointment,
    getTimeOfAppointments,
} from './helper';

const Appointment = () => {
    const filters: filters = {};
    const router = useRouter();
    const [therapists, setTherapists] = useState<strapiTherapistsQuery[]>();
    const [appointments, setAppointments] = useState<strapiAppointmentQuery[]>();
    const [chosenTime, setChosenTime] = useState<string>();
    const [fullDataAppointment, setFullDataAppointment] = useState<strapiAppointmentQuery[]>();
    const [chosenTherapist, setChosenTherapist] = useState<number>();
    const [chosenDate, setChosenDate] = useState<Date>();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        strapiTherapistsGet().then((res) => {
            setTherapists(res.data.data);
        });
        strapiAppointmentGetPopulation('populate=*').then((res) => {
            setFullDataAppointment(res.data.data);
        });
    }, []);
    useEffect(() => {
        setChosenTime(undefined);
    }, [chosenDate]);
    useEffect(() => {
        if (chosenDate) {
            filters.date = {
                $eq: formingDate({ chosenDate }),
            };
        }
        filters.therapist = {
            id: {
                $eq: chosenTherapist,
            },
        };
        strapiAppointmentGet(filters).then((res) => {
            setAppointments(res.data.data);
            setIsLoading(false);
        });
        getIdOfAppointment({ fullDataAppointment, chosenTherapist, chosenDate, chosenTime });
    }, [chosenDate || chosenTherapist || chosenTime]);
    const isDayDisabled = (day: Date) => {
        return !getDateOfAppointments({ appointments })?.some((avaibleDay) =>
            isSameDay(day, avaibleDay)
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
                    {/* TODO: Adding Names next to time of appointment */}
                    {/* <Button
                        variant="h3"
                        text="Wszyscy terapeuci"
                        colorClass="greendark"
                        onClick={() => {
                            setChosenTherapist(undefined);
                            setChosenDate(undefined);
                        }}
                        className="appointment-content__panel--button"
                    /> */}
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
                                setChosenTherapist(therapist.id);
                                setChosenDate(undefined);
                                setChosenTime(undefined);
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
                        {getTimeOfAppointments({ appointments })?.map((item, index) => (
                            <div
                                key={index}
                                className="appointment-content__data--availabledates-item"
                            >
                                <div>{item}</div>
                                <Button
                                    colorClass="greendark"
                                    className="appointment-content__data--availabledates-item__button"
                                    variant="h4"
                                    text="Umów wizytę"
                                    onClick={() => {
                                        setChosenTime(item);
                                        router.push('/managingappointment');
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </WrapperWidth>
    );
};

export default Appointment;
