//Context-hooks
import { createContext, useContext } from "react";
//React-hooks
import { useState } from "react";
//Methods
import { addTest } from "../api/testimonies";
import { updateTest } from "../api/testimonies";
import { deleteTest } from "../api/testimonies";
import { getOneTest } from "../api/testimonies";
import { allTest } from "../api/testimonies";
import { allTestUser } from "../api/testimonies";
import { catTestUser } from "../api/testimonies";
import { testOneUser } from '../api/testimonies'
//SweetAlert
import Swal from "sweetalert2";
//React-router-dom
import { useNavigate } from "react-router-dom";
//TestimonieContext
export const TestimonieContext = createContext()

//UseTestimonie
export const useTestimonie = () => {
    const context = useContext(TestimonieContext)

    if(!context){
        throw new Error('Must be within a context provider')
    }
    
    return context
}

//Testimonie Provider
export const TestimonieProvider = ({children}) => {

    const [allTestA, setAllTestA] = useState([])
    const [catTest, setCatTest] = useState([])

    const navigate = useNavigate()

    const addTestApi = async (test) => {
        try{
            const res = await addTest(test)
            Swal.fire({
                icon : 'success',
                title : 'Testimonio Agregado',
                text : 'El testimonio ha sido agregado correctamente',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            navigate('/manageTest')
        }catch(e){  
            Swal.fire({
                icon : 'info',
                title : 'Error Agregando',
                text : 'Hubo un error agregando el testimonio, intenta nuevamente.',
                confirmButtonColor : '#39b9bf',
                confirmButtonText : 'Siguiente'
            })
        }
    }

    const updateTestApi = async (id, test) => {
        try{
            const res = await updateTest(id, test)
            Swal.fire({
                icon : 'success',
                title : 'Testimonio Actualizado',
                text : 'El testimonio ha sido actualizado correctamente',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            navigate('/manageTest')       
        }catch(e){
            Swal.fire({
                icon : 'info',
                title : 'Error Actualizando',
                text : 'Hubo un error actualizando el testimonio, intenta nuevamente.',
                confirmButtonColor : '#39b9bf',
                confirmButtonText : 'Siguiente'
            })            
        }
    }

    const deleteTestApi = async (id) => {
        try{
            const res = await deleteTest(id)
            console.log(res.data)
        }catch(e){
            console.error(e)
        }
    }

    const getOneTestApi = async (id) => {
        try{
            const res = await getOneTest(id)
            return res.data
        }catch(e){
            console.error(e)
        }
    }

    const allTestApi = async () => {
        try{
            const res = await allTest()
            setAllTestA(res.data)
        }catch(e){
            console.error(e)
        }
    }

    const allTestUserApi = async (id) => {
        try{
            const res = await allTestUser(id)                        
            return res.data                      
        }catch(e){
            return []
        }
    }

    const catTestUserApi = async () => {
        try{
            const res = await catTestUser()
            setCatTest(res.data)
        }catch(e){
            console.error(e)
        }
    }

    const testOneUserApi = async (id) => {
        try{
            const res = await testOneUser(id)
            return res.data
        }catch(e){
            console.error(e)
        }
    }

    return(
        <TestimonieContext.Provider value={{
            addTestApi,
            updateTestApi,
            deleteTestApi,
            getOneTestApi,
            allTestApi,
            allTestUserApi,
            catTestUserApi,
            testOneUserApi,

            allTestA,
            catTest
        }}>
            {children}
        </TestimonieContext.Provider>
    )
}