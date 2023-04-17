import axios from "axios";

const base_url = "http://localhost:1337/api/";

export const strapiGet = async ({req_url}: StrapiCRUDType) => await axios.get(base_url + req_url);

export const strapiPost = async ({req_url, req}: StrapiCRUDType) => await axios.post(base_url + req_url, req);

export const strapiPut = async ({req_url, req}: StrapiCRUDType) => await axios.put(base_url + req_url, req);

export const strapiDelete = async ({req_url}: StrapiCRUDType) => await axios.delete(base_url + req_url);

type StrapiCRUDType = {
    req_url: string, 
    req?: Object,
}