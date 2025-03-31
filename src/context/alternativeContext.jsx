//React-hooks
import { useState } from "react";
//React-context-hooks
import { createContext, useContext } from "react";
//Methods Alternative
import { addAlternative } from "../api/alternativeAction";
import { updateAlternative } from "../api/alternativeAction";
import { deleteAlternative } from "../api/alternativeAction";
import { getOneAlternative } from "../api/alternativeAction";
import { allAlternative } from "../api/alternativeAction";
import { allAlternativeUser } from "../api/alternativeAction";
import { getOneUserAlternative } from "../api/alternativeAction";
//Methods Media Alternative
import { addMediaAlt } from "../api/alternativeAction";
import { deleteMediaAlt } from "../api/alternativeAction";
import { allMediaAlt } from "../api/alternativeAction";
import { allMediaAltUser } from "../api/alternativeAction";
//Create Alternative Context
const AlternativeContext = createContext()

//UseAlternative
export const useAlternative = () => {
    const context = useContext(AlternativeContext)

    if(!context){
        throw new Error('Must be within a context provider')
    }

    return context
}

//ProviderAlternative
export const ProviderAlternative = ({children}) => {

    const [allAlt, setAllAlt] = useState([])
    const [allUserAlt, setAllUserAlt] = useState([])

    const addAlternativeApi = async (alternative) => {
        try{
            const res = await addAlternative(alternative)
        }catch(e){
            console.error(e)
        }
    }

    const updateAlternativeApi = async (id, alternative) => {
        try{
            const res = await updateAlternative(id, alternative)
        }catch(e){
            console.error(e)
        }
    }

    const deleteAlternativeApi = async (id) => {
        try{
            const res = await deleteAlternative(id)
        }catch(e){
            console.error(e)
        }
    }

    const getOneAlternativeApi = async (id) => {
        try{
            const res = await getOneAlternative(id)
            return res.data
        }catch(e){
            console.error(e)
        }
    }

    const allAlternativeApi = async () => {
        try{
            const res = await allAlternative()
            setAllAlt(res.data)
        }catch(e){
            console.error(e)
        }
    }

    const allAlternativeUserApi = async () => {
        try{
            const res = await allAlternativeUser()
            setAllUserAlt(res.data)
        }catch(e){
            console.error(e)
        }
    }

    const getOneUserAltApi = async (id) => {
        try{
            const res = await getOneUserAlternative(id)
            return res.data
        }catch(e){
            console.error(e)
        }
    }

    //Media States
    const [mediaAlt, setMediaAlt] = useState([])
    const [mediaAltUser, setMediaAltUser] = useState([])

    const addMediaAltApi = async (idAlt, media) => {
        try{
            const res = await addMediaAlt(idAlt, media)
        }catch(e){
            console.error(e)
        }
    }

    const deleteMediaAltApi = async (idAlt, id) => {
        try{
            const res = await deleteMediaAlt(id, idAlt)
        }catch(e){
            console.error(e)
        }
    }

    const allMediaAltApi = async (idAlt) => {
        try{
            const res = await allMediaAlt(idAlt)
            setMediaAlt(res.data)
        }catch(e){
            console.error(e)
        }
    }

    const allMediaAltUserApi = async (idAlt) => {
        try{
            const res = await allMediaAltUser(idAlt)
            setMediaAltUser(res.data)
        }catch(e){
            console.error(e)
        }
    }

    return(
        <AlternativeContext.Provider value={{
            addAlternativeApi,
            updateAlternativeApi,
            deleteAlternativeApi,
            allAlternativeApi,
            allAlternativeUserApi,
            getOneAlternativeApi,
            getOneUserAltApi,
            allAlt,
            allUserAlt,

            addMediaAltApi,
            deleteMediaAltApi,
            allMediaAltApi,
            allMediaAltUserApi,

            mediaAlt,
            mediaAltUser
        }}>
            {children}
        </AlternativeContext.Provider>
    )
}