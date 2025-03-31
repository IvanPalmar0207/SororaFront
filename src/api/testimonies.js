//Axios Client
import apiRequest from "./api";

//AddTest
export const addTest = (test) => {
    return apiRequest.post('api/test/test/',test)
}
//UpdateTest
export const updateTest = (id, test) => {
    return apiRequest.put(`api/test/test/${id}/`, test)
}
//DeleteTest
export const deleteTest = (id) => {
    return apiRequest.delete(`api/test/test/${id}/`)
}
//GetOneTest
export const getOneTest = (id) => {
    return apiRequest.get(`api/test/test/${id}/`)
}
//AllTest
export const allTest = () => {
    return apiRequest.get('api/test/test/')
}
//AllTestUser
export const allTestUser = (id) => {
    return apiRequest.get(`api/testAll/?id=${id}`)
}

//CatTestUser
export const catTestUser = () => {
    return apiRequest.get('api/catTest/')
}

//TestOneUser
export const testOneUser = (id) => {
    return apiRequest.get(`api/testOneUser/${id}`)
}