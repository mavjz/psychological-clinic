import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';

// This function is created solely for project requirements and
// should not be used commercially due to data security concerns

export const giveAppointmentCode = (appointments: strapiAppointmentQuery[] | undefined) => {
    const appointmentCodes = appointments?.map((item) => item.attributes.appointment_code);
    const numberOfappointmentCode = appointmentCodes
        ?.filter((item) => {
            if (item !== null && item !== undefined) {
                return item;
            }
        })
        .map((item) => Number(item));
    let latestAppointment;
    if (numberOfappointmentCode !== undefined) {
        if (numberOfappointmentCode?.length > 0) {
            latestAppointment = (Math.max(...numberOfappointmentCode) + 1).toString;
        } else {
            latestAppointment = '1';
        }
    }
    return latestAppointment;
};
