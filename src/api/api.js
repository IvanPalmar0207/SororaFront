//Axios
import axios from 'axios'
//Constants
import { ACCESS_TOKEN } from '../constants'

const apiRequest = axios.create({
    baseURL : import.meta.env.VITE_API_URL
})

apiRequest.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default apiRequest