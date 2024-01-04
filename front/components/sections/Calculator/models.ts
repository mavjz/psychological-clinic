import { strapiTherapistsQuery } from 'lib/strapi/therapists/queryType';
import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';

export type propsOfTherapyCostCalculation = {
    data: formData | undefined;
    therapistList: strapiTherapistsQuery[] | undefined;
    appointmentList: strapiAppointmentQuery[] | undefined;
    cost: number;
    discount: number;
};

export type formData = {
    therapist?: string;
    session: string;
    relative?: string;
    relativesCode?: string;
    workshop?: boolean;
};
