import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';

export type filters = {
    [Keys: string]: Object;
};
type props = {
    appointments: strapiAppointmentQuery[] | undefined;
};

export const getTimeOfAppointments = ({ appointments }: props) => {
    let allHours = appointments?.map((item) => item.attributes.time);
    let sortedHours = allHours?.sort(function (a, b) {
        return Number(a.replace(/:/g, "")) - Number(b.replace(/:/g, ""));
    })
    return sortedHours?.map((item) => item.slice(0, 5));
};

export const getDateOfAppointments = ({ appointments }: props) => {
    const allDates = appointments?.map((item) => item.attributes.date);
    // deleting repeated dates
    const stringDate = allDates?.filter((item, index) => {
        return allDates?.indexOf(item) === index;
    });
    const appointmentsDate = stringDate?.map((item) => new Date(item));
    return appointmentsDate?.filter((item) => {
        if (new Date() <= item) {
            return item;
        }
    });
};
