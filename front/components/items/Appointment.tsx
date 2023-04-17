import { strapiGet } from "lib/strapi/strapiCRUD";
import React, { useEffect, useState } from "react";

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
            <React.Fragment>
                Dupa
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            {
                appointments?.map((item, index) => 
                    <div key={index}>{item.attributes.date + "______" + item.attributes.time + item.attributes.name}</div>
                )
            }
        </React.Fragment>
    );
}

export default Appointment