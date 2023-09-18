import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';

export type filters = {
    [Keys: string]: Object;
};
type propsOfFormingDate = {
    chosenDate: Date;
};
type props = {
    appointments: strapiAppointmentQuery[] | undefined;
};
type propsOfGetId = {
    fullDataAppointment: strapiAppointmentQuery[] | undefined;
    chosenTherapist: number | undefined;
    chosenDate: Date | undefined;
    chosenTime: string | undefined;
};

export const formingDate = ({ chosenDate }: propsOfFormingDate) => {
    // changing timezone by reducing by 2h (because of polish timezone (GMT+2))
    const rightTime = new Date(chosenDate?.getTime() - 60 * 1000 * -120);
    // changing format of date to YYYY-MM-DD
    return rightTime?.toISOString().slice(0, 10);
};

export const getTimeOfAppointments = ({ appointments }: props) => {
    let allHours = appointments?.map((item) => item.attributes.time);
    let sortedHours = allHours?.sort(function (a, b) {
        return Number(a.replace(/:/g, '')) - Number(b.replace(/:/g, ''));
    });
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

export const getIdOfAppointment = ({
    fullDataAppointment,
    chosenTherapist,
    chosenDate,
    chosenTime,
}: propsOfGetId) => {
    return fullDataAppointment?.filter((item) => {
        if (item.attributes.therapist.data.id === chosenTherapist) {
            if (chosenDate !== undefined) {
                if (item.attributes.date === formingDate({ chosenDate })) {
                    if (item.attributes.time === chosenTime + ':00.000') {
                        return item;
                    }
                }
            }
        }
    });
};
