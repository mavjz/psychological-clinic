import WrapperWidth from "components/wrappers/Wrapperwidth";
import { isSameDay } from "date-fns";
import { strapiAppointmentGet } from "lib/strapi/appointments/get";
import { strapiAppointmentQuery } from "lib/strapi/appointments/queryType";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { Grid } from "react-loader-spinner";

const Appointment = () => {
    const TEMPtherapist = "Bożena";
    let rightTime: Date;
    let queryChosenDate: string | undefined;
    const filters: filters = {};
    filters.therapist = {
        first_name: {
            $eq: TEMPtherapist
        }
    };
    let [chosenDate, setChosenDate] = useState<Date>();
    const [isLoading, setIsLoading] = useState(true);
    const [appointmentsTherapist, setAppointmentsTherapist] = useState<strapiAppointmentQuery[]>();
    const [appointmentsDate, setAppointmentsDate] = useState<strapiAppointmentQuery[]>();
    useEffect(() => {
        if (chosenDate) {
            // changing timezone by reducing by 2h (because of polish timezone (GMT+2))
            rightTime = new Date(chosenDate?.getTime() - (-120*60*1000));    
            // changing format of date to YYYY-MM-DD
            queryChosenDate = rightTime?.toISOString().slice(0, 10);
            filters.date = {
                $eq: queryChosenDate
            };
        }
        strapiAppointmentGet(filters).then((res) => {
                setAppointmentsTherapist(res.data.data);
                setAppointmentsDate(res.data.data);
                setIsLoading(false);
            }
        );
    }, [chosenDate]);
    const allDates = appointmentsTherapist?.map(item => item.attributes.date);
    // deleting repeated dates 
    /* indexOf is searching the first index numer of current item value and 
    then compering to the left elements. If they're same, value's true, 
    if they're reapeted value's false and won't stay in new array
    e.g "water" is 0, but also 3, 4, 5, so only "0 water" would stay, because 0 doesn't equal 3 */
    const stringDate = allDates?.filter((item, index) => {return allDates?.indexOf(item) === index});
    const availableDate = stringDate?.map(item => new Date(item));
    let allHours = appointmentsDate?.map(item => item.attributes.time);
    let sortedHours = allHours?.sort(function (a, b) {
        return Number(new Date('2023/01/01 ' + a)) - Number(new Date('2023/01/01 ' + b));
    });
    let allHourswoSeconds = sortedHours?.map(item => item.slice(0,5));
    // ??? https://github.com/gpbl/react-day-picker/issues/768
    function isDayDisabled(day: Date) {
        return !availableDate?.some(disabledDay => 
            isSameDay(day, disabledDay)
        )
    }
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
                    {/* TODO making panel to choose therapists */}
                </div>
                <div className="appointment-content__data">
                    <div className="appointment-content__data--calendar">
                        <DayPicker
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
                    <div className={chosenDate ? "appointment-content__data--availabledates": "hidden"}>
                        {
                            allHourswoSeconds?.map((item, index) => 
                                <div key={index}> 
                                    {item}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </WrapperWidth>
    );
}

export default Appointment

type filters = {
    [Keys: string]: Object,
}

