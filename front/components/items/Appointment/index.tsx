import WrapperWidth from 'components/wrappers/WrapperWidth';
import { isSameDay } from 'date-fns';
import { strapiAppointmentGet } from 'lib/strapi/appointments/get';
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
    formatDate,
    getDateOfAppointments,
    findMatchingAppointment,
    getTimeOfAppointments,
    placeFirstAvailableAppointmentDate,
} from './helper';
import { useAppointmentContext } from 'components/wrappers/AppointmentDataContext';
import Paragraph from '../Paragraph';

// TODO: optimize
const Appointment = () => {
    const filters: filters = {
        is_booked: {
            $eq: false,
        },
    };
    const router = useRouter();
    const { setAppointmentID } = useAppointmentContext();
    const [therapists, setTherapists] = useState<strapiTherapistsQuery[]>();
    const [appointments, setAppointments] = useState<strapiAppointmentQuery[]>();
    const [chosenTime, setChosenTime] = useState<string>();
    const [dataAppointmentWithTherapist, setDataAppointmentWithTherapist] =
        useState<strapiAppointmentQuery[]>();
    const [chosenTherapist, setChosenTherapist] = useState<number>();
    const [chosenDate, setChosenDate] = useState<Date>();
    const [latestAppointmentMonth, setLatestAppointmentMonth] = useState(new Date());
    const [isLoading, setIsLoading] = useState(true);
    const [availableTherapist, setAvailableTherapist] = useState(true);

    const isTherapistAvailable = () =>
        setAvailableTherapist(!(getDateOfAppointments({ appointments })?.length === 0));

    useEffect(() => {
        strapiTherapistsGet().then((res) => {
            setTherapists(res.data.data);
        });
        strapiAppointmentGet({ population: 'populate=*' }).then((res) => {
            setDataAppointmentWithTherapist(res.data.data);
        });
    }, []);

    useEffect(() => {
        isTherapistAvailable();
    }, [appointments]);

    useEffect(() => {
        setChosenTime(undefined);
    }, [chosenDate]);

    useEffect(() => {
        setLatestAppointmentMonth(
            placeFirstAvailableAppointmentDate({
                chosenTherapist,
                dataAppointmentWithTherapist,
            })
        );
        if (chosenDate) {
            filters.date = {
                $eq: formatDate({ chosenDate }),
            };
        }
        filters.therapist = {
            id: {
                $eq: chosenTherapist,
            },
        };
        strapiAppointmentGet({ filters: filters }).then((res) => {
            setAppointments(res.data.data);
            setIsLoading(false);
        });
    }, [chosenDate || chosenTherapist || chosenTime]);

    useEffect(() => {
        findMatchingAppointment({
            dataAppointmentWithTherapist,
            chosenTherapist,
            chosenDate,
            chosenTime,
        })?.map((item) => setAppointmentID(item));
    }, [chosenTime]);

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
                            month={latestAppointmentMonth}
                            onMonthChange={setLatestAppointmentMonth}
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
                            chosenDate || !availableTherapist
                                ? 'appointment-content__data--availabledates'
                                : 'hidden'
                        }
                    >
                        {chosenDate &&
                            getTimeOfAppointments({ appointments })?.map((item, index) => (
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
                        {availableTherapist ? null : (
                            <div className="appointment-content__data--availabledates-item">
                                <Paragraph size="big" text="Brak dostępnych terminów" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </WrapperWidth>
    );
};

export default Appointment;
