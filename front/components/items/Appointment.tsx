import WrapperWidth from "components/wrappers/Wrapperwidth";
import { isSameDay } from "date-fns";
import { strapiAppointmentGet } from "lib/strapi/appointments/get";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { Grid } from "react-loader-spinner";

const Appointment = () => {
    const TEMPtherapist = "Bożena"
    const TEMPdate = new Date(2023, 7, 14);
    let [chosenDate, setChosenDate] = useState<Date>();
    let filters: filters = {};
    filters.therapist = {
        first_name: {
            $eq: TEMPtherapist
        }
    }
    filters.date = {
        $eq: TEMPdate
    }
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [appointmentsTherapist, setAppointmentsTherapist] = useState<Array<any>>();
    const [appointmentsDate, setAppointmentsDate] = useState<Array<any>>();
    useEffect(() => {
        strapiAppointmentGet(filters.therapist).then((res) => {
            console.log(res.data.data);
                setAppointmentsTherapist(res.data.data);
                setIsLoading(false);
            }
        );
        // strapiAppointmentGet(filters.date).then((res) => {
        //         setAppointmentsDate(res.data.data);
        //         setIsLoading(false);
        //     }
        // );
    }, [chosenDate]);

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
    const allDates: string[] | undefined = appointmentsTherapist?.map(item => item.attributes.date);
    const stringDate: string[] | undefined = allDates?.filter((item, index) => {return allDates?.indexOf(item) === index});
    // deleting repeated dates 
    /* indexOf is searching the first index numer of current item value and 
    then compering to the left elements. If they're same, value's true, 
    if they're reapeted value's false and won't stay in new array
    e.g "water" is 0, but also 3, 4, 5, so only "0 water" would stay, because 0 doesn't equal 3 */
    const availableDate: Date[] | undefined = stringDate?.map(item => new Date(item));
    let allHours: Date[] | undefined = appointmentsDate?.map(item => item.attributes.time);
    let sortHours: Date[] | undefined = allHours?.sort(function (a, b) {
        return Number(new Date('2023/01/01 ' + a)) - Number(new Date('2023/01/01 ' + b));
    });
    let allHourswoSeconds: Date[] | String[] | undefined | any = sortHours?.map(item => item.toString().slice(0,5));
    function isDayDisabled(day: Date) {
        return !availableDate?.some(disabledDay => 
            isSameDay(day, disabledDay)
        )
    }
    // ??? https://github.com/gpbl/react-day-picker/issues/768
    return (
        <WrapperWidth>
            <div className="appointment-content">
                <div className="appointment-content__panel">

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
                    <div className="appointment-content__data--availabledates">
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