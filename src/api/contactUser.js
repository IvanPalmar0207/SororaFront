//Axios Client
import apiRequest from "./api";
//Add Contact User
export const addContactUser = (contact) => {
    return apiRequest.post(`api/userCon/userCon/`, contact)
}
//Update Contact User
export const updateContactUser = (id, contact) => {
    return apiRequest.put(`api/userCon/userCon/${id}/`, contact)
}
//Delete Contact User
export const deleteContactUser = (id) => {
    return apiRequest.delete(`api/userCon/userCon/${id}/`)
}
//Get One Contact User
export const getOneContactUser = (id) => {
    return apiRequest.get(`api/userCon/userCon/${id}/`)
}
//Get All Contact
export const getAllContact = () => {
    return apiRequest.get('api/userCon/userCon/')
}