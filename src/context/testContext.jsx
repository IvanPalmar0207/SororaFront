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


    const addTestApi = async (test) => {
        try{
            const res = await addTest(test)
            console.log(res.data)
        }catch(e){  
            console.log(e)
        }
    }

    const updateTestApi = async (id, test) => {
        try{
            const res = await updateTest(id, test)
            console.log(res.data)
        }catch(e){
            console.log(e)
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
            console.error(e)
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