import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';

export type AppointmentApprovalType = {
    therapist?: string;
    date?: Date;
    time?: string;
};

export type ProperAppointmentCode = {
    appointments?: strapiAppointmentQuery[] | undefined;
    appointmentID: any;
};
