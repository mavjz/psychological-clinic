import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';

export type filters = {
    [Keys: string]: Object;
};
export type propsOfFormingDate = {
    chosenDate: Date;
};
export type propsAppointment = {
    appointments: strapiAppointmentQuery[] | undefined;
};

export type propsOfGetId = {
    dataAppointmentWithTherapist: strapiAppointmentQuery[] | undefined;
    chosenTherapist: number | undefined;
    chosenDate: Date | undefined;
    chosenTime: string | undefined;
};
