//React-hooks
import { useState, useEffect } from "react";
//React-router-dom
import { Navigate } from "react-router-dom";
//Jwt Authentication
import {jwtDecode} from 'jwt-decode'
//Token Method
import { refreshToken } from "../api/user";
//Constants
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
//React-hooks
import { Outlet } from "react-router-dom";
function ProtectedRoutes(){
    const [isAuthorized, setIsAuthorized] = useState(null)

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    },[])
    
    const refreshTok = async () => {
        const refresh = localStorage.getItem(REFRESH_TOKEN)

        try{

            const res = await refreshToken(refresh)

            if(res.statusCode === 200){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorized(true)
            }else{
                setIsAuthorized(false)
            }

        }catch(err){
            setIsAuthorized(false)
        }
    }

    const auth = async() => {
        const token = localStorage.getItem(ACCESS_TOKEN)

        if(!token){
            setIsAuthorized(false)
            return
        }

        const decoded = jwtDecode(token)
        const tokenExpiration = decoded.exp
        const now = Date.now() / 1000

        if(tokenExpiration < now) {
            await refreshTok()
        }else{
            setIsAuthorized(true)
        }        
    }        

    if(isAuthorized === null){
        return <div>Loading</div>
    }

    if(!isAuthorized){
        localStorage.setItem('message', 'Debes iniciar sesión para acceder, intenta nuevamente.')
    }

    return isAuthorized ? <Outlet /> : <Navigate to='/login' replace={true}/>

}

export default ProtectedRoutes