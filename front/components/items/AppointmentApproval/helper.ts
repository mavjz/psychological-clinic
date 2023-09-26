import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';
import { ProperAppointmentCode } from './models';

// This function is created solely for project requirements and
// should not be used commercially due to data security concerns

export const createUniqueAppointmentCode = (appointments?: strapiAppointmentQuery[]) => {
    const appointmentCodes = appointments?.map((item) => item.attributes.appointment_code);
    const numberOfAppointmentCode = appointmentCodes
        ?.filter((item) => item)
        .map((item) => Number(item));
    if (numberOfAppointmentCode && numberOfAppointmentCode?.length > 0) {
        return (Math.max(...numberOfAppointmentCode) + 1).toString().padStart(6, '0');
    } else {
        return '000001';
    }
};

export const findAppointmentCodeById = ({ appointments, appointmentID }: ProperAppointmentCode) => {
    appointments?.find((item) => item?.id === appointmentID?.id)?.attributes.appointment_code;
};
