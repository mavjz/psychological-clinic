import { formData } from ".";
import { strapiTherapistQuery } from "lib/strapi/therapists/queryType";

export function calculation({data, therapistList, cost, setCost, discount, setDiscount}: props) {
  if (data?.workshop) {
    data.session = Number(data.session) - 1;
  }
  therapistList?.map((therapist) => {
    if (data?.therapist === therapist.attributes.first_name) {
      setCost(therapist.attributes.session_cost * Number(data.session));
      if (data?.workshop) {
        if (Number(data.session) + 1 >= 24) {
          setDiscount(cost * 0.1);
          setCost(cost * 0.9);
        }
      } else {
        if (Number(data.session) >= 24) {
          setDiscount(cost * 0.1);
          setCost(cost * 0.9);
        }
      }
    }
  });
  if (data?.workshop) {
    setCost(cost + 1300);
    data.session = Number(data.session) + 1;
  }
  if (data?.relative === 'promo') {
    setDiscount(discount + cost * 0.05);
    setCost(cost * 0.95);
  }
  setDiscount(Math.round(discount * 100) / 100);
  setCost(Math.round(cost * 100) / 100);
  console.log(cost + "-------" + discount);
} 
type props = {
  data: formData | undefined,
  therapistList: strapiTherapistQuery[] | undefined,
  cost: number,
  setCost: React.Dispatch<React.SetStateAction<number>>, 
  discount: number, 
  setDiscount: React.Dispatch<React.SetStateAction<number>>,
}