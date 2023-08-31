import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';

export type filters = {
    [Keys: string]: Object;
};
type props = {
    appointments: strapiAppointmentQuery[] | undefined;
};

export const getTimeOfAppointment = ({ appointments }: props) => {
    let allHours = appointments?.map((item) => item.attributes.time);
    let sortedHours = allHours?.sort(function (a, b) {
        return Number(new Date('2023/01/01 ' + a)) - Number(new Date('2023/01/01 ' + b));
    });
    let allHourswoSeconds = sortedHours?.map((item) => item.slice(0, 5));
    return allHourswoSeconds;
};

export const getDateofAppointments = ({ appointments }: props) => {
    const allDates = appointments?.map((item) => item.attributes.date);
    // deleting repeated dates
    const stringDate = allDates?.filter((item, index) => {
        return allDates?.indexOf(item) === index;
    });
    const appointmentsDate = stringDate?.map((item) => new Date(item));
    const avaibleDates = appointmentsDate?.filter((item) => {
        if (new Date() <= item) {
            return item;
        }
    });
    return avaibleDates;
};
