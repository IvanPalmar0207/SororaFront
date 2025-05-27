//Context-hooks
import { createContext, useContext } from "react";
//React-hooks
import { useState } from "react";
//Note Methods
import { addNote } from "../api/note";
import { updateNote } from "../api/note";
import { deleteNote } from "../api/note";
import { getOneNote } from "../api/note";
import { allNotes } from "../api/note";
//SweetAlert
import Swal from "sweetalert2";
//React-router-dom
import { useNavigate } from "react-router-dom";
//Note Context
export const NoteContext = createContext()

//UseContext
export const useNote = () => {

    const context = useContext(NoteContext)

    if(!context){
        throw new Error('Must be within a context')
    }

    return context


}

//NoteProvider
export const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState([])

    const navigate = useNavigate()

    const addNoteApi = async (note) => {                
        try{
            const res = await addNote(note)
            Swal.fire({                    
                icon : 'success',
                title : 'Nota Agregada',
                text : 'La nota ha sido agregada correctamente',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            navigate('/notes')
        }catch(e){
            Swal.fire({
                icon : 'info',
                title : 'Error Presentado',
                text : 'La nota no ha sido agregada correctamente, intenta de nuevo.',
                confirmButtonColor : '#39b9bf',
                confirmButtonText : 'Siguiente'
            })
        }
    }

    const updateNoteApi = async (id, note) => {        
        try{
            const res = await updateNote(id, note)
            Swal.fire({
                icon : 'success',
                title : 'Nota Actualizada',
                text : 'La nota ha sido actualizada correctamente',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            navigate('/notes')
        }catch(e){
            Swal.fire({
                icon : 'info',
                title : 'Error Presentado',
                text : 'La nota no ha sido actualizada correctamente, intenta de nuevo.',
                confirmButtonColor : '#39b9bf',
                confirmButtonText : 'Siguiente'
            })
        }
    }

    const deleteNoteApi = async(id) => {    
        try{
            const res = await deleteNote(id)
            console.log(res.data)
        }catch(e){
            console.log(e.message)
        }
    }

    const getOneNoteApi = async(id) => {
        try{
            const res = await getOneNote(id)
            return res.data
        }catch(e){
            console.log(e.message)
        }
    }

    const allNoteApi = async () => {
        try{
            const res = await allNotes()
            setNotes(res.data)
        }catch(e){
            console.log(e.message)
        }   
    }

    return(
        <NoteContext.Provider value={{
            addNoteApi,
            updateNoteApi,
            deleteNoteApi,
            getOneNoteApi,
            allNoteApi,

            notes
        }}>
            {children}
        </NoteContext.Provider>
    )

}