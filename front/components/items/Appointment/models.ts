import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';

export type filtersIsBooked = {
    [Keys: string]: Object;
};
export type propsOfFormingDate = {
    chosenDate: Date;
};
export type propsOfAppointments = {
    appointments: strapiAppointmentQuery[] | undefined;
};

export type propsOfFindMatchingAppointment = {
    dataAppointmentWithTherapist: strapiAppointmentQuery[] | undefined;
    chosenTherapist: number | undefined;
    chosenDate: Date | undefined;
    chosenTime: string | undefined;
};

export type propsOfSetFirstAvailableAppointmentDate = {
    dataAppointmentWithTherapist: strapiAppointmentQuery[] | undefined;
    chosenTherapist: number | undefined;
};
