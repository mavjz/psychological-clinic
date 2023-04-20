import WrapperWidth from "components/wrappers/Wrapperwidth";
import { isSameDay } from "date-fns";
import { strapiAppointmentGet } from "lib/strapi/appointments/get";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { Grid } from "react-loader-spinner";

const Appointment = () => {
    const therapist = "Bożena"
    const filter = {
        filters: {
            therapist: {
                first_name: {
                    $eq: therapist,
            },
          },
        },
    }
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [appointments, setAppointents] = useState<Array<any>>();
    useEffect(() => {
        strapiAppointmentGet(filter).then((res) => {
                setAppointents(res.data.data);
                setIsLoading(false);
            }
        );
    }, []);
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
    const allDates: string[] | undefined = appointments?.map(item => item.attributes.date);
    const stringDate: string[] | undefined = allDates?.filter((item, index) => {return allDates?.indexOf(item) === index});
    const availableDate: Date[] | undefined = stringDate?.map(item => new Date(item));
    console.log(availableDate);
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
                                disabled: 'appointment-content__data--calendar-disabled'
                            }}
                        />
                    </div>
                    <div className="appointment-content__data--availabledates">
                        {
                            appointments?.map((item, index) => 
                                <div key={index}>{item.attributes.date + "______" + item.attributes.time + item.attributes.name}</div>
                            )
                        }
                    </div>
                </div>
            </div>
            
        </WrapperWidth>
    );
}

export default Appointment