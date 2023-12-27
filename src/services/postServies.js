import { request } from "./httpsRequest";

export const fetchProducts = (param) => {
    request({method: "get", url: "products", param})
}

export const fetchProduct = (id)=> {
    request({method: "get", url: "products/" + id})
}