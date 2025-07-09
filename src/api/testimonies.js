//Axios Client
import apiRequest from "./api";

//AddTest
export const addTest = (test) => {
    return apiRequest.post('apiSora/test/test/',test)
}
//UpdateTest
export const updateTest = (id, test) => {
    return apiRequest.put(`apiSora/test/test/${id}/`, test)
}
//DeleteTest
export const deleteTest = (id) => {
    return apiRequest.delete(`apiSora/test/test/${id}/`)
}
//GetOneTest
export const getOneTest = (id) => {
    return apiRequest.get(`apiSora/test/test/${id}/`)
}
//AllTest
export const allTest = () => {
    return apiRequest.get('apiSora/test/test/')
}
//AllTestUser
export const allTestUser = (id) => {
    return apiRequest.get(`apiSora/testAll/?id=${id}`)
}

//CatTestUser
export const catTestUser = () => {
    return apiRequest.get('apiSora/catTest/')
}

//TestOneUser
export const testOneUser = (id) => {
    return apiRequest.get(`apiSora/testOneUser/${id}`)
}