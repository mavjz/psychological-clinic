import { propsAppointment, propsOfFormingDate, propsOfGetId } from './models';

export const formatDate = ({ chosenDate }: propsOfFormingDate) =>
    new Date(chosenDate?.getTime() - 60 * 1000 * -120).toISOString().slice(0, 10);

export const getTimeOfAppointments = ({ appointments }: propsAppointment) => {
    let allHours = appointments?.map((item) => item.attributes.time);
    let sortedHours = allHours?.sort(
        (a, b) => Number(a.replace(/:/g, '')) - Number(b.replace(/:/g, ''))
    );
    return sortedHours?.map((item) => item.slice(0, 5));
};

export const getDateOfAppointments = ({ appointments }: propsAppointment) => {
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

export const returnAppointmentByID = ({
    dataAppointmentWithTherapist,
    chosenTherapist,
    chosenDate,
    chosenTime,
}: propsOfGetId) =>
    dataAppointmentWithTherapist?.filter((item) => {
        if (
            item.attributes.therapist.data.id === chosenTherapist &&
            chosenDate &&
            item.attributes.date === formatDate({ chosenDate }) &&
            item.attributes.time.slice(0, 5) === chosenTime
        ) {
            return item;
        }
    });
