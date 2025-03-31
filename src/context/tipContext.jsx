//React-context
import { createContext, useContext, useState } from "react";
//Methods
import { addTips } from "../api/tip";
import { updateTip } from "../api/tip";
import { deleteTip } from "../api/tip";
import { selectOneTip } from "../api/tip";
import { allTips } from "../api/tip";
import { allTipsUser } from "../api/tip";

//Tip context
export const TipContext = createContext()

//UseTip
export const useTip = () => {

    const context = useContext(TipContext)

    if(!context){
        throw new Error('Must be with a context provider')
    }
    
    return context
}

//Tip context
export const TipProvider = ({children}) => {
    const [tipList, setTipList] = useState([]) 
    const [tipUserList, setTipUserList] = useState([])

    const addTipApi = async (tip) => {
        try{
            const res = await addTips(tip)
            console.log(res.data)    
        }catch(err){
            console.log(err.message)
        }
    }

    const updateTipApi = async (id, tip) => {
        try{
            const res = await updateTip(id, tip)
            console.log(res.data)
        }catch(err){
            console.log(err.message)
        }
    }

    const deleteTipApi = async (id) => {
        try{
            const res = await deleteTip(id)
        }catch(err){
            console.log(err.message)
        }
    }

    const getOneTip = async (id) => {
        try{
            const res = await selectOneTip(id)
            return res.data
        }catch(err){
            console.log(err.message)
        }
    }

    const allTipsApi = async () => {
        try{
            const res = await allTips()
            setTipList(res.data)
        }catch(err){
            console.log(err.message)
        }
    }

    const allTipsUserApi = async () => {
        try{
            const res = await allTipsUser()
            setTipUserList(res.data)
        }catch(err){
            console.log(err.message)
        }
    }

    return(
        <TipContext.Provider value={{
            addTipApi,
            updateTipApi,
            deleteTipApi,
            getOneTip,
            allTipsApi,

            tipList,
            
            allTipsUserApi,
            tipUserList
        }}>
            {children}
        </TipContext.Provider>
    )

}