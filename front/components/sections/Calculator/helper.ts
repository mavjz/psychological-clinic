import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';
import { formData } from '.';
import { strapiTherapistsQuery } from 'lib/strapi/therapists/queryType';

export const therapyCostCalculation = ({
    data,
    therapistList,
    appointmentList,
    cost,
    discount,
}: props) => {
    discount = 0;
    cost = 0;
    let numberOfDataSession = Number(data?.session);
    if (data?.workshop) {
        numberOfDataSession = numberOfDataSession - 1;
    }
    therapistList?.find((therapist) => {
        if (therapist?.id === Number(data?.therapist)) {
            cost = Number(therapist.attributes.session_cost) * numberOfDataSession;
            if (data?.workshop) {
                if (numberOfDataSession + 1 >= 24) {
                    discount = cost * 0.1;
                    cost = cost * 0.9;
                }
            } else {
                if (numberOfDataSession >= 24) {
                    discount = cost * 0.1;
                    cost = cost * 0.9;
                }
            }
        }
    });
    if (data?.workshop) {
        cost = cost + 1300;
        numberOfDataSession = numberOfDataSession + 1;
    }
    if (data?.relative === 'promo') {
        appointmentList?.find((appointment) => {
            if (
                appointment?.attributes.appointment_code ===
                data?.relativesCode?.toString().padStart(6, '0')
            ) {
                discount = discount + cost * 0.05;
                cost = cost * 0.95;
            }
        });
    }
    discount = Math.round(discount * 100) / 100;
    cost = Math.round(cost * 100) / 100;
    return { cost, discount };
};

type props = {
    data: formData | undefined;
    therapistList: strapiTherapistsQuery[] | undefined;
    appointmentList: strapiAppointmentQuery[] | undefined;
    cost: number;
    discount: number;
};
