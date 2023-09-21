import { strapiPut } from '../strapiCRUD';

export const strapiAppointmentPut = async (url_id: string, req?: Object) =>
    await strapiPut({ req_url: 'appointments/' + url_id, req });
