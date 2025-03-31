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