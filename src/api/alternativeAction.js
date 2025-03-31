//Axios Client
import apiRequest from "./api";

//Add Alternative
export const addAlternative = (alternative) => {
    return apiRequest.post('api/alternative/alternative/', alternative)
}
//Update Alternative
export const updateAlternative = (id, alternative) => {
    return apiRequest.put(`api/alternative/alternative/${id}/`, alternative)
}
//Delete Alternative
export const deleteAlternative = (id) => {
    return apiRequest.delete(`api/alternative/alternative/${id}/`)
}
//GetOne Alternative
export const getOneAlternative = (id) => {
    return apiRequest.get(`api/alternative/alternative/${id}/`)
}
//All Alternative
export const allAlternative = () => {
    return apiRequest.get('api/alternative/alternative/')
}

//All Alternative User
export const allAlternativeUser = () => {
    return apiRequest.get('api/alternativeUser/')
}

//GetOneAlternative User
export const getOneUserAlternative = (id) => {
    return apiRequest.get(`api/alternativeOne/${id}`)
}

//Media Alternatives
//Add Media Alt
export const addMediaAlt = (idAlt, media) => {
    return apiRequest.post(`api/mediaAlt/mediaAlt/?id=${idAlt}`, media)    
}
//Delete Media Alt
export const deleteMediaAlt = (id, idAlt) => {
    return apiRequest.delete(`api/mediaAlt/mediaAlt/${id}/?id=${idAlt}`)
}
//All MediaAlt
export const allMediaAlt = (idAlt) => {
    return apiRequest.get(`api/mediaAlt/mediaAlt/?id=${idAlt}`)
}

//All MediaAlt
export const allMediaAltUser = (idAlt) => {
    return apiRequest.get(`api/mediaAltUser/?id=${idAlt}`)
}