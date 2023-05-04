import WrapperWidth from "components/wrappers/Wrapperwidth";
import { isSameDay } from "date-fns";
import { strapiAppointmentGet } from "lib/strapi/appointments/get";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { Grid } from "react-loader-spinner";

const Appointment = () => {
    const therapist = "Bożena"
    let [chosenDate, setChosenDate] = useState<Date>();
    const filterTherapist = {
        filters: {
            therapist: {
                first_name: {
                    $eq: therapist,
            },
          },
        },
    }
    let filterDate = {
        filters: {
            date: {
                $eq: chosenDate,
            },
            therapist: {
                first_name: {
                    $eq: therapist,
                }
            }
        }
    }
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [appointmentsTherapist, setAppointentsTherapist] = useState<Array<any>>();
    const [appointmentsDate, setAppointentsDate] = useState<Array<any>>();
    useEffect(() => {
        strapiAppointmentGet(filterTherapist).then((res) => {
                setAppointentsTherapist(res.data.data);
                setIsLoading(false);
            }
        );
        strapiAppointmentGet(filterDate).then((res) => {
                setAppointentsDate(res.data.data);
                setIsLoading(false);
            }
        );
    }, [chosenDate]);
    // TODO: aktualizowanie filtrów z nowymi zmiennymi
    console.log(chosenDate)
    console.log("-----------------------")
    console.log(filterDate);
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