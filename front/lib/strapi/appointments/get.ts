import { strapiGet } from '../strapiCRUD';
type props = {
    filters?: Object;
    population?: string;
};

export const strapiAppointmentGet = async ({ filters, population }: props = {}) =>
    await strapiGet({ req_url: 'appointments', filters, population });
