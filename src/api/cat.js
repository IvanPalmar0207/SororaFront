//Axios Client
import apiRequest from "./api"
//Add CatAr
export const addCat = (cat) => {
    return apiRequest.post('api/catAr/catAr/', cat)
}
//Update CatAr
export const updateCat = (id, cat) => {
    return apiRequest.put(`api/catAr/catAr/${id}/`, cat)
}
//Delete CatAr
export const deleteCat = (id) => {
    return apiRequest.delete(`api/catAr/catAr/${id}/`)
}
//getOneCatAr
export const getOneCat = (id) => {
    return apiRequest.get(`api/catAr/catAr/${id}/`)
}
//AllCatAr
export const allCats = () => {
    return apiRequest.get('api/catAr/catAr/')
}
//AllCat User
export const allCatUser = () => {
    return apiRequest.get('api/allCat/')
}

//OneCat
export const oneCatAr = (id) => {
    return apiRequest.get(`api/allARCat/?id=${id}`)
}

//GetOneCatUser
export const getOneCatUser = (id) => {
    return apiRequest.get(`api/getOneCat/${id}`)
}