//Axios Client
import apiRequest from "./api";

//Register User
export const registerUser = (user) => {
    return apiRequest.post('/apiSora/register/', user)
}

//Login User
export const loginUser = (user) => {
    return apiRequest.post('/apiSora/token/', user)
}

//Refresh User
export const refreshToken = (token) => {
    return apiRequest.post('/apiSora/token/refresh/',{
        refresh : token
    })
}

//Forgot Password
export const forgotPassword = (email) => {
    return apiRequest.post('/apiSora/sendForgotPassword/', email)
}

//Confirm Password
export const confirmPassword = (token, password) => {
    return apiRequest.post(`/apiSora/resetPassword/${token}/`, password)
}

//User Update
export const updateUser = (id, user) => {
    return apiRequest.patch(`/apiSora/user/user/${id}/`, user)
}

//OneUser
export const getOneUser = (id) => {
    return apiRequest.get(`/apiSora/user/user/${id}/`)
}

//Relative Information
//Age User
export const ageUserAll = () => {
    return apiRequest.get('/apiSora/ageUser/ageUser/')
}
//Education User
export const educationUserAll = () => {
    return apiRequest.get('/apiSora/educationUser/educationUser/')
}
//Relation User
export const relationUserAll = () => {
    return apiRequest.get('/apiSora/relationUser/relationUser/')
}
//Work User
export const workUserAll = () => {
    return apiRequest.get('/apiSora/workUser/workUser/')
}
//Salary User
export const salaryUserAll = () => {
    return apiRequest.get('/apiSora/salaryUser/salaryUser/')
}