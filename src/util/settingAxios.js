import axios from "axios"
import { Acces_stoken, TOKEN_CYBERSOFT, DOMAIN } from "./setting"

export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000, // Thời gian nếu như load lâu sẽ out
})
http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'tokenByClass': TOKEN_CYBERSOFT,
        'token':  Acces_stoken
    }
    return config
}, (errors => {
    return Promise.reject(errors)
}))
