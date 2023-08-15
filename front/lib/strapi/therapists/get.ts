import { strapiGet } from "../strapiCRUD";

export const strapiTherapistGet = async (filters: Object) => await strapiGet({req_url: 'therapists', filters})