import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';
import { ProperAppointmentCode } from './models';

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
    if (numberOfappointmentCode !== undefined) {
        if (numberOfappointmentCode?.length > 0) {
            return (Math.max(...numberOfappointmentCode) + 1).toString().padStart(6, '0');
        } else {
            return '000001';
        }
    }
};

export const findProperAppointmentCode = ({
    appointments,
    appointmentID,
}: ProperAppointmentCode) => {
    const object = appointments?.find((item) => {
        if (item?.id === appointmentID?.id) {
            return item;
        }
    });
    return object?.attributes.appointment_code;
};
