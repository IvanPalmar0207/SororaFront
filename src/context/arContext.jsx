//Context-hooks
import { createContext, useContext } from "react";
//React-hooks
import { useState } from "react";
//Methods AR
import { addAr } from "../api/ar";
import { updateAr } from "../api/ar";
import { deleteAr } from "../api/ar";
import { getOneAr } from "../api/ar";
import { allAr } from "../api/ar";
import { allArUser } from "../api/ar";
import { arOneUser } from "../api/ar";
//SweetAlert
import Swal from "sweetalert2";
//React-router-dom
import { useNavigate } from "react-router-dom";
//AR Context
export const ARContext = createContext()

//UseContext
export const useAR = () => {
    const context = useContext(ARContext)


    if(!context){
        throw new Error('Must be within a context')
    }

    return context
}

//ArProvider
export const ArProvider = ({children}) => {

    const [arList, setArList] = useState([])
    const [arUserList, setArUserList] = useState([])

    const navigate = useNavigate()

    const addArApi = async (ar) => {
        try{
            const res = await addAr(ar)
            Swal.fire({
                icon : 'success',
                title : 'Ruta agregada',
                text : 'La ruta ha sido agregada correctamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente',                        
            })
            navigate('/manageAr')
        }catch(e){
            Swal.fire({
                icon : 'info',
                title : 'Error Agregando',
                text : 'Hubo un error agregando la ruta.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente',                        
            })
        }
    }

    const updateArApi = async (id, ar) => {
        try{    
            const res = await updateAr(id, ar)
            Swal.fire({
                icon : 'success',
                title : 'Ruta actualizada',
                text : 'La ruta ha sido actualizada correctamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente',                        
            })
            navigate('/manageAr')
        }catch(e){  
            Swal.fire({
                icon : 'info',
                title : 'Error Actualizando',
                text : 'Hubo un error actualizando la ruta.',
                confirmButtonColor : '#39b9bf',
                confirmButtonText : 'Siguiente',                        
            })
        }
    }

    const deleteArApi = async (id) => {
        try{
            const res = await deleteAr(id)
            console.log(res.data)
        }catch(e){
            console.log(e)
        }
    }

    const getOneArApi = async(id) => {
        try{
            const res = await getOneAr(id)
            return res.data
        }catch(e){
            console.log(e)
        }
    }

    const allArApi = async () => {
        try{
            const res = await allAr()
            setArList(res.data)
        }catch(e){
            console.log(e)
        }
    }

    const allArUserApi = async () => {
        try{
            const res = await allArUser()
            setArUserList(res.data)
        }catch(e){
            console.log(e)
        }
    }

    const arOneUserApi = async(id) => {
        try{
            const res = await arOneUser(id)
            return res.data
        }catch(e){
            console.log(e)
        }
    }

    return(
        <ARContext.Provider value={{
            addArApi,
            updateArApi,
            deleteArApi,
            getOneArApi,
            allArApi,
            allArUserApi,
            arOneUserApi,
            
            arUserList,
            arList
        }}>
            {children}
        </ARContext.Provider>        
    )
}