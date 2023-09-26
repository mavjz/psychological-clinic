import { strapiGet } from '../strapiCRUD';

export const strapiAppointmentGet = async (filters?: Object, population?: string) =>
    await strapiGet({ req_url: 'appointments', filters, population });
