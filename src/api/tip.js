//Axios Client
import apiRequest from "./api";

//Add tip
export const addTips = (tip) => {
    return apiRequest.post('/apiSora/tips/tips/', tip)
}

//Update Tip
export const updateTip = (id, tip) => {
    return apiRequest.put(`/apiSora/tips/tips/${id}/`, tip)
}

//Delete Tip
export const deleteTip = (id) => {
    return apiRequest.delete(`/apiSora/tips/tips/${id}/`)
}

//Select One Tip
export const selectOneTip = (id) => {
    return apiRequest.get(`/apiSora/tips/tips/${id}/`)
}

//All TipsAdmin
export const allTips = () => {
    return apiRequest.get('/apiSora/tips/tips/')
}

//All TipsUser
export const allTipsUser = () => {
    return apiRequest.get('/apiSora/tipsAll/')
}

//Get One Tip User
export const getOneTipUser = (id) => {
    return apiRequest.get(`/apiSora/oneTipUser/${id}/`)
}