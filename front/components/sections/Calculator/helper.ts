import { formData } from '.';
import { strapiTherapistsQuery } from 'lib/strapi/therapists/queryType';

export function calculation({ data, therapistList, cost, discount }: props) {
    discount = 0;
    cost = 0;
    if (data?.workshop) {
        data.session = Number(data.session) - 1;
    }
    therapistList?.find((therapist) => {
        if (therapist?.id === Number(data?.therapist)) {
            cost = Number(therapist.attributes.session_cost) * Number(data?.session);
            if (data?.workshop) {
                if (Number(data?.session) + 1 >= 24) {
                    discount = cost * 0.1;
                    cost = cost * 0.9;
                }
            } else {
                if (Number(data?.session) >= 24) {
                    discount = cost * 0.1;
                    cost = cost * 0.9;
                }
            }
        }
    });
    if (data?.workshop) {
        cost = cost + 1300;
        data.session = Number(data.session) + 1;
    }
    if (data?.relative === 'promo') {
        discount = discount + cost * 0.05;
        cost = cost * 0.95;
    }
    discount = Math.round(discount * 100) / 100;
    cost = Math.round(cost * 100) / 100;
    return { cost, discount };
}

type props = {
    data: formData | undefined;
    therapistList: strapiTherapistsQuery[] | undefined;
    cost: number;
    discount: number;
};
