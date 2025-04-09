//Axios Client
import apiRequest from "./api";

//Register User
export const registerUser = (user) => {
    return apiRequest.post('/api/register/', user)
}

//Login User
export const loginUser = (user) => {
    return apiRequest.post('/api/token/', user)
}

//Refresh User
export const refreshToken = (token) => {
    return apiRequest.post('/api/token/refresh/',{
        refresh : token
    })
}

//Forgot Password
export const forgotPassword = (email) => {
    return apiRequest.post('/api/sendForgotPassword/', email)
}

//Confirm Password
export const confirmPassword = (token, password) => {
    return apiRequest.post(`/api/resetPassword/${token}/`, password)
}

//User Update
export const updateUser = (id, user) => {
    return apiRequest.put(`/api/user/user/${id}/`, user)
}

//Relative Information
//Age User
export const ageUserAll = () => {
    return apiRequest.get('/api/ageUser/ageUser/')
}
//Education User
export const educationUserAll = () => {
    return apiRequest.get('/api/educationUser/educationUser/')
}
//Relation User
export const relationUserAll = () => {
    return apiRequest.get('/api/relationUser/relationUser/')
}
//Work User
export const workUserAll = () => {
    return apiRequest.get('/api/workUser/workUser/')
}
//Salary User
export const salaryUserAll = () => {
    return apiRequest.get('/api/salaryUser/salaryUser/')
}