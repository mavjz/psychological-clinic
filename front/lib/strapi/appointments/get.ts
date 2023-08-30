import { strapiGet } from '../strapiCRUD';

export const strapiAppointmentGet = async (filters?: Object) =>
    await strapiGet({ req_url: 'appointments', filters });
