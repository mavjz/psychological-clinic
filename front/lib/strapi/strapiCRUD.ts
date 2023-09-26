import axios from 'axios';
import qs from 'qs';

const base_url = 'http://localhost:1337/api/';

export const strapiGet = async ({ req_url, filters, population }: StrapiCRUDType) =>
    await axios.get(base_url + req_url + '?' + (qs.stringify({ filters }) || population));

export const strapiPost = async ({ req_url, req }: StrapiCRUDType) =>
    await axios.post(base_url + req_url, req);

export const strapiPut = async ({ req_url, req }: StrapiCRUDType) =>
    await axios.put(base_url + req_url, req);

export const strapiDelete = async ({ req_url }: StrapiCRUDType) =>
    await axios.delete(base_url + req_url);

type StrapiCRUDType = {
    req_url: string;
    filters?: Object;
    population?: Object;
    req?: Object;
};
