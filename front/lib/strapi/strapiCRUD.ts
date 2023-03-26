import axios from "axios";

const base_url = "https://localhost:1337/api/";

export const strapiGet = ({req_url}: StrapiCRUDType) => axios.get(base_url + req_url);

export const strapiPost = ({req_url, req}: StrapiCRUDType) => axios.post(base_url + req_url, req);

export const strapiPut = ({req_url, req}: StrapiCRUDType) => axios.put(base_url + req_url, req);

export const strapiDelete = ({req_url}: StrapiCRUDType) => axios.delete(base_url + req_url);

type StrapiCRUDType = {
    req_url: string, 
    req?: Object,
}