import { strapiGet } from '../strapiCRUD';

export const strapiTherapistsGet = async (filters?: Object) =>
    await strapiGet({ req_url: 'therapists', filters });
