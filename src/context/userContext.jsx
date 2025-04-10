//React-hooks-context
import { createContext, useContext, useState, useEffect } from "react";
//Methods
import { confirmPassword, forgotPassword, registerUser } from "../api/user";
import { loginUser } from "../api/user";
import { refreshToken } from "../api/user";
import { updateUser } from "../api/user";
import { getOneUser } from "../api/user";
import { ageUserAll } from "../api/user";
import { educationUserAll } from "../api/user";
import { relationUserAll } from "../api/user";
import { workUserAll } from "../api/user";
import { salaryUserAll } from "../api/user";
//Token
import { ACCESS_TOKEN } from "../constants";
import { REFRESH_TOKEN } from "../constants";
import {jwtDecode} from 'jwt-decode'
//Sweetalert
import Swal from "sweetalert2";
//React-router-dom
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

export const UseUser = () => {
    const context = useContext(UserContext)

    if(!context){
        throw new Error('Must be within an UserProvider')
    }

    return context
    
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const [errorUser, setErrorUser] = useState([])
    const [forgot, setForgot] = useState([])
    const [confirmPass, setConfirmPass] = useState([])        

    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if(token){
            setIsAuthenticated(true)
            setUser(jwtDecode(token))
        }else{
            setIsAuthenticated(false)
        }
    },[])

    const navigate = useNavigate()

    const mobileSize = () => window.innerWidth <= 750

    const [isMobile, setIsMobile] = useState(mobileSize);

    useEffect(() => {
        const onResize = () => {
            setIsMobile(mobileSize);
        }

        window.addEventListener("resize", onResize);
        
        if(!isMobile){
            navigate('/')
        }

        return () => {
            window.removeEventListener("resize", onResize);
        }
    },[isMobile, navigate])

    

    const registerUserApi = async (user) => {
        try{
            const res = await registerUser(user)                                         
            Swal.fire({
                title : 'Registro Correcto',
                text : 'Ya te encuentras registrado dentro del sistema, inicia sesión.',
                icon : 'success',
                confirmButtonText : 'Siguiente',
                confirmButtonColor : '#3ed634'
            })
            navigate('/login')
            setErrorUser([])
        }catch(err){
            setErrorUser([err.response.data.email])            
        }
    }

    //RememberMe State
    const [rememberMe, setRememberMe] = useState(false)

    const loginUserApi = async (user, rememberMe) => {
        try{
            const res = await loginUser(user)
            setIsAuthenticated(true)            

            localStorage.setItem(ACCESS_TOKEN, res.data.access)
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh)

            const token = localStorage.getItem(ACCESS_TOKEN)

            setUser(jwtDecode(token))

            Swal.fire({
                title : 'Inicio de sesión',
                text : 'Has iniciado sesión correctamente, bienvenido.',
                icon : 'success',
                confirmButtonText : 'Siguiente',
                confirmButtonColor : '#3ed634'
            })

            setRememberMe(rememberMe)

            setErrorUser([])
        }catch(err){
            setErrorUser([err.response.data.detail])            
        }
    }

    const forgotPasswordApi = async (email) => {
        try{
            const res = await forgotPassword(email)
            Swal.fire({
                title : 'Envio de link',
                text : res.data.message,
                icon : 'success',
                confirmButtonText : 'Siguiente',
                confirmButtonColor : '#3ed634'
            })
            navigate('/login')
        }catch(e){
            setForgot([e.response.data.message])
        }
    }

    const confirmPassApi = async (token, password) => {
        try{
            const res = await confirmPassword(token, password)
            Swal.fire({
                title : 'Contraseña restablecida',
                text : res.data.message,
                icon : 'success',
                confirmButtonText : 'Siguiente',
                confirmButtonColor : '#3ed634'
            })
            navigate('/login')
            console.log('Hola')
        }catch(e){
            setConfirmPass([e.response.data.message])
        }
    }

    const logOutApi = () => {
        setIsAuthenticated(false)
        setUser(null) 
        localStorage.clear()                  
    }   

    //LoadErros
    useEffect(() => {
        if(errorUser.length > 0){
            const time = setTimeout(() => {
                setErrorUser([])
            },5000)
            return() => {
                clearTimeout(time)
            }
        }
    },[errorUser])

    useEffect(() => {
        if(forgot.length > 0){
            const timer = setTimeout(() => {
                setForgot([])
            }, 5000)
            return () => {clearTimeout(timer)}
        }
    },[forgot])

    useEffect(() => {
        if(confirmPass.length > 0){
            const timer = setTimeout(() => {
                setConfirmPass([])
            }, 5000)

            return() => {clearTimeout(timer)}
        }
    },[confirmPass])    

    useEffect(() => {
        let intervalId

        async function checkToken() {
            const token = localStorage.getItem(ACCESS_TOKEN)

            if(!token){
                setIsAuthenticated(false)
                return
            }

            try{
                const decoded = jwtDecode(token)
                const tokenExpiration = decoded.exp
                const now = Date.now() / 1000
                const timeExpiry = tokenExpiration - now

                if(rememberMe){
                    if(timeExpiry < 300){
                        const refresh = localStorage.getItem(REFRESH_TOKEN)
                        if(!refresh){
                            throw new Error('No refresh token')
                        }

                        try{
                            const res = await refreshToken(refresh)
                            localStorage.setItem(ACCESS_TOKEN, res.data.access)
                            setIsAuthenticated(true)
                            setUser(jwtDecode(res.data.access))
                            return
                        }catch(e){
                            console.error('Failed to refresh token: ' + e)
                            logOutApi()
                            navigate('/')
                            return
                        }
                    }
                }else{
                    if(timeExpiry <= 0){
                        logOutApi()
                        navigate('/')
                        return
                    }
                }

                setIsAuthenticated(true)
                setUser(decoded)

            }catch(e){
                console.error('Token verification. ' + e)
                logOutApi()
                navigate('/')
            }
        }

        checkToken()

        intervalId = setInterval(checkToken, 60000)

        return() => {
            if(intervalId) clearInterval(intervalId)
        }

    },[rememberMe, navigate, isAuthenticated])

    //Update User
    const updateUserApi = async (id, user, params) => {
        try{
            const res = await updateUser(id, user)
            Swal.fire({
                icon : 'success',
                title : 'Usuario Actualizado',
                text : 'El usuario ha sido actualizado correctamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            navigate(`/home`)
        }catch(e){
            Swal.fire({
                icon : 'info',
                title : 'Error Actualizando',
                text : 'Hubo un error actualizando al usuario, intenta nuevamente.',
                confirmButtonColor : '#39b9bf',
                confirmButtonText : 'Siguiente'
            })
        }
        
    }

    //Get One User
    const getOneUserApi = async (id) => {
        try{
            const res = await getOneUser(id)
            return res.data
        }catch(e){
            console.error(e)
        }
    }

    //All Ages
    const [ages, setAges] = useState([])
    
    const ageUserAllApi = async () => {
        try{
            const res = await ageUserAll()
            setAges(res.data)
        }catch(e){
            console.error(e)
        }
    }

    //All Education
    const [educations, setEducations] = useState([])
    
    const educationUserAllApi = async () => {
        try{
            const res = await educationUserAll()
            setEducations(res.data)
        }catch(e){
            console.error(e)
        }
    }

    //All Relations
    const [relations, setRelations] = useState([])

    const relationUserAllApi = async () => {
        try{
            const res = await relationUserAll()
            setRelations(res.data)
        }catch(e){
            console.error(e)
        }
    }

    //All Works
    const [works, setWorks] = useState([])

    const workUserAllApi = async () => {
        try{
            const res = await workUserAll()
            setWorks(res.data)
        }catch(e){
            console.error(e)
        }
    }

    //Salary User
    const [salaries, setSalaries] = useState([])

    const salarayUserAllApi = async () => {
        try{
            const res = await salaryUserAll()
            setSalaries(res.data)
        }catch(e){
            console.error(e)
        }
    }

    return(
        <UserContext.Provider value={{
            loginUserApi,
            registerUserApi,
            logOutApi,
            forgotPasswordApi,
            confirmPassApi,
            updateUserApi,
            getOneUserApi,
    
            isAuthenticated,
            errorUser,
            user,
            forgot,
            confirmPass,

            ageUserAllApi,
            ages,

            educationUserAllApi,
            educations,

            relationUserAllApi,
            relations,

            workUserAllApi,
            works,

            salarayUserAllApi,
            salaries
        }}
        
        >
            {children}
        </UserContext.Provider>
    )

}