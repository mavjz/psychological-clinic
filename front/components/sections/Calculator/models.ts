import { strapiTherapistsQuery } from 'lib/strapi/therapists/queryType';
import { formData } from '.';
import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';

export type propsOfTherapyCostCalculation = {
    data: formData | undefined;
    therapistList: strapiTherapistsQuery[] | undefined;
    appointmentList: strapiAppointmentQuery[] | undefined;
    cost: number;
    discount: number;
};
