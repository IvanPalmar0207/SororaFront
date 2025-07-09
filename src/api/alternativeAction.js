//Axios Client
import apiRequest from "./api";

//Add Alternative
export const addAlternative = (alternative) => {
    return apiRequest.post('apiSora/alternative/alternative/', alternative)
}
//Update Alternative
export const updateAlternative = (id, alternative) => {
    return apiRequest.put(`apiSora/alternative/alternative/${id}/`, alternative)
}
//Delete Alternative
export const deleteAlternative = (id) => {
    return apiRequest.delete(`apiSora/alternative/alternative/${id}/`)
}
//GetOne Alternative
export const getOneAlternative = (id) => {
    return apiRequest.get(`apiSora/alternative/alternative/${id}/`)
}
//All Alternative
export const allAlternative = () => {
    return apiRequest.get('apiSora/alternative/alternative/')
}

//All Alternative User
export const allAlternativeUser = () => {
    return apiRequest.get('apiSora/alternativeUser/')
}

//GetOneAlternative User
export const getOneUserAlternative = (id) => {
    return apiRequest.get(`apiSora/alternativeOne/${id}`)
}

//Media Alternatives
//Add Media Alt
export const addMediaAlt = (idAlt, media) => {
    return apiRequest.post(`apiSora/mediaAlt/mediaAlt/?id=${idAlt}`, media)    
}
//Delete Media Alt
export const deleteMediaAlt = (id, idAlt) => {
    return apiRequest.delete(`apiSora/mediaAlt/mediaAlt/${id}/?id=${idAlt}`)
}
//All MediaAlt
export const allMediaAlt = (idAlt) => {
    return apiRequest.get(`apiSora/mediaAlt/mediaAlt/?id=${idAlt}`)
}

//All MediaAlt
export const allMediaAltUser = (idAlt) => {
    return apiRequest.get(`apiSora/mediaAltUser/?id=${idAlt}`)
}