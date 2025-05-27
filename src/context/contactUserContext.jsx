//React-context-hooks
import { useContext, createContext, useState } from "react";
//Contact User Methods
import { addContactUser } from "../api/contactUser";
import { deleteContactUser } from "../api/contactUser";
import { getAllContact } from "../api/contactUser";
//React-router-dom
import { useNavigate } from "react-router-dom";
//Sweet-alert
import Swal from "sweetalert2";

//Contact User Context
export const ContactUserContext = createContext()

//Use Contact User Context
export const useContactUser = () => {
    const context = useContext(ContactUserContext)

    if(!context){
        throw new Error('Must be within a context')
    }

    return context
}

//Contact User Provider
export const ContactUserProvider = ({children}) => {

    const navigate = useNavigate()

    const [contactList, setContactList] = useState([])

    const addContactUserApi = async (contact) => {
        try{
            const res = await addContactUser(contact)
            Swal.fire({
                icon : 'success',
                title : 'Red de confianza agregada',
                text : 'La red de confianza ha sido agregada correctamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            navigate('/trustNet')
        }catch(e){
            Swal.fire({
                icon : 'info',
                title : 'Error Presentado',
                text : 'La red de confianza no ha sido agregada correctamente, intenta nuevamente.',
                confirmButtonColor : '#39b9bf',
                confirmButtonText : 'Siguiente'
            })            
        }
    }

    const deleteContactUserApi = async (id) => {
        try{
            const res = await deleteContactUser(id)
        }catch(e){
            console.log(e.message)
        }
    }    

    const getAllContactUserApi = async () => {
        try{
            const res = await getAllContact()
            setContactList(res.data)
        }catch(e){
            console.log(e.message)
        }
    }

    return (
        <ContactUserContext.Provider value={{
            addContactUserApi,
            deleteContactUserApi,            
            getAllContactUserApi,

            contactList
        }}>
            {children}
        </ContactUserContext.Provider>
    )
}