import axios from "axios";
import { URL_API } from "./url";

export default axios.create({
    baseURL:URL_API,
    headers:{
        "Content-type":"application/json"
    }
})
export const URL=URL_API