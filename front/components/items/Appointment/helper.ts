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
        return (
            Number(new Date('2023/01/01 ' + a)) -
            Number(new Date('2023/01/01 ' + b))
        );
    });
    let allHourswoSeconds = sortedHours?.map((item) => item.slice(0, 5));
    return allHourswoSeconds;
};

export const getDateofAppointments = ({ appointments }: props) => {
    const allDates = appointments?.map((item) => item.attributes.date);
    // deleting repeated dates
    /* indexOf is searching the first index numer of current item value and 
    then compering to the left elements. If they're same, value's true, 
    if they're reapeted value's false and won't stay in new array
    e.g "water" is 0, but also 3, 4, 5, so only "0 water" would stay, because 0 doesn't equal 3 */
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
