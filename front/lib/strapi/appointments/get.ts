import { strapiGet, strapiGetPopulation } from '../strapiCRUD';

export const strapiAppointmentGet = async (filters?: Object) =>
    await strapiGet({ req_url: 'appointments', filters });

export const strapiAppointmentGetPopulation = async (req?: string) =>
    await strapiGetPopulation({ req_url: 'appointments', req });
