//React-context
import { createContext, useContext, useState } from "react";
//Methods
import { addTips } from "../api/tip";
import { updateTip } from "../api/tip";
import { deleteTip } from "../api/tip";
import { selectOneTip } from "../api/tip";
import { allTips } from "../api/tip";
import { allTipsUser } from "../api/tip";
import { getOneTipUser } from "../api/tip";
//SweetAlert
import Swal from "sweetalert2";
//React-router-dom
import { useNavigate } from "react-router-dom";
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

    const navigate = useNavigate()

    const addTipApi = async (tip) => {
        try{
            const res = await addTips(tip)
            Swal.fire({
                icon : 'success',
                title : 'Tip Agregado',
                text : 'El tip ha sido agregado correctamente',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })            
            navigate('/manageTips')            
        }catch(err){
            Swal.fire({
                icon : 'info',
                title : 'Error Agregando',
                text : 'Hubo un error agregando el tip, intenta nuevamente.',
                confirmButtonColor : '#39b9bf',
                confirmButtonText : 'Siguiente'
            })
        }
    }

    const updateTipApi = async (id, tip) => {
        try{
            const res = await updateTip(id, tip)
            Swal.fire({
                icon : 'success',
                title : 'Tip Actualizado',
                text : 'El tip ha sido actualizado correctamente',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            navigate('/manageTips')            
        }catch(err){
            Swal.fire({
                icon : 'info',
                title : 'Error Actualizando',
                text : 'Hubo un error actualizando el tip, intenta nuevamente.',
                confirmButtonColor : '#39b9bf',
                confirmButtonText : 'Siguiente'
            })
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

    const getOneTipUserApi = async (id) => {
        try{
            const res = await getOneTipUser(id)
            return res
        }catch(e){
            console.error(e)
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
            tipUserList,
            getOneTipUserApi
        }}>
            {children}
        </TipContext.Provider>
    )

}