import { strapiGet } from "../strapiCRUD";

export const strapiAppointmentGet = async (filter: Object) => await strapiGet({req_url: 'appointments', filter})