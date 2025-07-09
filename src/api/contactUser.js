//Axios Client
import apiRequest from "./api";
//Add Contact User
export const addContactUser = (contact) => {
    return apiRequest.post(`apiSora/userCon/userCon/`, contact)
}
//Update Contact User
export const updateContactUser = (id, contact) => {
    return apiRequest.put(`apiSora/userCon/userCon/${id}/`, contact)
}
//Delete Contact User
export const deleteContactUser = (id) => {
    return apiRequest.delete(`apiSora/userCon/userCon/${id}/`)
}
//Get One Contact User
export const getOneContactUser = (id) => {
    return apiRequest.get(`apiSora/userCon/userCon/${id}/`)
}
//Get All Contact
export const getAllContact = () => {
    return apiRequest.get('apiSora/userCon/userCon/')
}