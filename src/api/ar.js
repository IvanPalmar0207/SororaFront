//Axios Client
import apiRequest from "./api";

//Add AR
export const addAr = (ar) => {
    return apiRequest.post('api/AR/AR/', ar)
}
//Update AR
export const updateAr = (id, ar) => {
    return apiRequest.put(`api/AR/AR/${id}/`, ar)
}
//Delete AR
export const deleteAr = (id) => {
    return apiRequest.delete(`api/AR/AR/${id}/`)
}
//GetOne AR
export const getOneAr = (id) => {
    return apiRequest.get(`api/AR/AR/${id}/`)
}
//AllAr
export const allAr = () => {
    return apiRequest.get('api/AR/AR/')
}
//AllArUser
export const allArUser = () => {
    return apiRequest.get('api/allAR/')
}

//ArOneUser
export const arOneUser = (id) => {
    return apiRequest.get(`api/arOne/${id}`)
}