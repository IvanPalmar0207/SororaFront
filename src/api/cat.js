//Axios Client
import apiRequest from "./api"
//Add CatAr
export const addCat = (cat) => {
    return apiRequest.post('apiSora/catAr/catAr/', cat)
}
//Update CatAr
export const updateCat = (id, cat) => {
    return apiRequest.put(`apiSora/catAr/catAr/${id}/`, cat)
}
//Delete CatAr
export const deleteCat = (id) => {
    return apiRequest.delete(`apiSora/catAr/catAr/${id}/`)
}
//getOneCatAr
export const getOneCat = (id) => {
    return apiRequest.get(`apiSora/catAr/catAr/${id}/`)
}
//AllCatAr
export const allCats = () => {
    return apiRequest.get('apiSora/catAr/catAr/')
}
//AllCat User
export const allCatUser = () => {
    return apiRequest.get('apiSora/allCat/')
}

//OneCat
export const oneCatAr = (id) => {
    return apiRequest.get(`apiSora/allARCat/?id=${id}`)
}

//GetOneCatUser
export const getOneCatUser = (id) => {
    return apiRequest.get(`apiSora/getOneCat/${id}`)
}