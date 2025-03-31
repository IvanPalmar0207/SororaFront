//Axios Client
import apiRequest from "./api";

//Add tip
export const addTips = (tip) => {
    return apiRequest.post('/api/tips/tips/', tip)
}

//Update Tip
export const updateTip = (id, tip) => {
    return apiRequest.put(`/api/tips/tips/${id}/`, tip)
}

//Delete Tip
export const deleteTip = (id) => {
    return apiRequest.delete(`/api/tips/tips/${id}/`)
}

//Select One Tip
export const selectOneTip = (id) => {
    return apiRequest.get(`/api/tips/tips/${id}/`)
}

//All TipsAdmin
export const allTips = () => {
    return apiRequest.get('/api/tips/tips/')
}

//All TipsUser
export const allTipsUser = () => {
    return apiRequest.get('/api/tipsAll/')
}