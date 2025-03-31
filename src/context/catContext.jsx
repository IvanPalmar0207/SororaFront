//Context-hooks
import { createContext, useContext } from "react";
//React-hooks
import { useState } from "react";
//Methods
import { addCat } from "../api/cat";
import { updateCat } from "../api/cat";
import { deleteCat } from "../api/cat";
import { getOneCat } from "../api/cat";
import { allCats } from "../api/cat";
import { allCatUser } from "../api/cat";
import { oneCatAr } from "../api/cat";
import { getOneCatUser } from "../api/cat";
//Create Context
export const CatContext = createContext()
//Use Cat Context
export const useCat = () => {
    const context = useContext(CatContext)

    if(!context){
        throw new Error('Must be within a context provider')
    }

    return context
}
//Cat Provider
export const CatProvider = ({children}) => {
    const [catList, setCatList] = useState([])
    const [catListUser, setCatListUser] = useState([])    

    const addCatApi = async(cat) => {
        try{
            const res = await addCat(cat)
            console.log(res.data)
        }catch(e){
            console.log(e)
        }
    }

    const updateCatApi = async (id, cat) => {
        try{
            const res = await updateCat(id, cat)
            console.log(res.data)
        }catch(e){
            console.log(e)
        }
    }

    const deleteCatApi = async (id) => {
        try{
            const res = await deleteCat(id)
            console.log(res.data)
        }catch(e){
            console.log(e)
        }
    }

    const getOneCatApi = async (id) => {
        try{
            const res = await getOneCat(id)
            return res.data
        }catch(e){
            console.log(e)
        }
    }

    const allCatsApi = async () => {
        try{
            const res = await allCats()
            setCatList(res.data)
        }catch(e){
            console.log(e)
        }
    }

    const allCatUserApi = async () => {
        try{
            const res = await allCatUser()
            setCatListUser(res.data)
        }catch(e){
            console.log(e)
        }
    }

    const oneCatArApi = async(id) => {
        try{
            const res = await oneCatAr(id)
            return res.data
        }catch(e){
            console.log(e)
        }
    }

    const getOneCatUserApi = async (id) => {
        try{
            const res = await getOneCatUser(id)
            return res.data
        }catch(e){
            console.log(e)
        }
    }

    return (
        <CatContext.Provider value={{
            addCatApi,
            updateCatApi,
            deleteCatApi,
            getOneCatApi,
            allCatsApi,
            allCatUserApi,
            oneCatArApi,
            getOneCatUserApi,

            catList,
            catListUser
        }}>
            {children}
        </CatContext.Provider>
    )
}