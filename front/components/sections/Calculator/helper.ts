import { formData } from ".";
import { strapiTherapistQuery } from "lib/strapi/therapists/queryType";

export function calculation({
  data,
  therapistList,
  cost,
  discount,
  // setCost,
  // setDiscount,
}: props) {
  if (data?.workshop) {
    data.session = Number(data.session) - 1;
  }
  for (let i = 0; i < Number(therapistList?.length); i++) {
    if (therapistList?.[i].attributes.first_name === data?.therapist) {
      cost =
        Number(therapistList?.[i].attributes.session_cost) *
        Number(data?.session);
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
  }
  if (data?.workshop) {
    cost = cost + 1300;
    data.session = Number(data.session) + 1;
  }
  if (data?.relative === "promo") {
    discount = discount + cost * 0.05;
    cost = cost * 0.95;
  }
  discount = Math.round(discount * 100) / 100;
  cost = Math.round(cost * 100) / 100;
  return [cost, discount]
}
type props = {
  data: formData | undefined,
  therapistList: strapiTherapistQuery[] | undefined,
  cost: number,
  discount: number,
  // setCost: React.Dispatch<React.SetStateAction<number>>, 
  // setDiscount: React.Dispatch<React.SetStateAction<number>>,
};
