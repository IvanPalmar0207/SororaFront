//Axios Client
import apiRequest from "./api";

//Add AR
export const addAr = (ar, idCat) => {
    return apiRequest.post(`apiSora/AR/AR/?id=${idCat}`, ar)
}
//Update AR
export const updateAr = (id, idCat,ar) => {
    return apiRequest.put(`apiSora/AR/AR/${id}/?id=${idCat}`, ar)
}
//Delete AR
export const deleteAr = (id, idCat) => {
    return apiRequest.delete(`apiSora/AR/AR/${id}/?id=${idCat}`)
}
//GetOne AR
export const getOneAr = (id, idCat) => {
    return apiRequest.get(`apiSora/AR/AR/${id}/?id=${idCat}`)
}
//AllAr
export const allAr = (idCat) => {
    return apiRequest.get(`apiSora/AR/AR/?id=${idCat}`)
}
//AllArUser
export const allArUser = (idCat) => {
    return apiRequest.get(`apiSora/allAR/?id=${idCat}`)
}

//ArOneUser
export const arOneUser = (id, idCat) => {
    return apiRequest.get(`apiSora/arOne/${id}/$id=${idCat}`)
}