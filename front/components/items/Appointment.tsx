import WrapperWidth from "components/wrappers/Wrapperwidth";
import { strapiGet } from "lib/strapi/strapiCRUD";
import React, { useEffect, useState } from "react";
import { Grid } from "react-loader-spinner";

const Appointment = () => {
    const therapist = "Bożena"
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [appointments, setAppointents] = useState<Array<any>>();
    useEffect(() => {
        strapiGet({req_url: `appointments?filters\[therapist\][first_name][$eq]=${therapist}`}).then((res) => {
                setAppointents(res.data.data);
                setIsLoading(false);
            }
        );
    }, []);
    console.log(appointments);
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

                </div>
                <div className="appointment-content__data">
                    <div className="appointment-content__data--calendar">

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