import { strapiTherapistsQuery } from '../therapists/queryType';

export type strapiAppointmentQuery = {
    id: string;
    attributes: {
        date: string;
        time: string;
        appointment_code?: number;
        createdAt: string;
        updatedAt: string;
        id: number;
        therapist: {
            data: strapiTherapistsQuery;
        };
    };
};
