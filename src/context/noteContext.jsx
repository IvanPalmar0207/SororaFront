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

    const addNoteApi = async (note) => {                
        try{
            const res = await addNote(note)
            console.log(res.data)
        }catch(e){
            console.log(e.message)
        }
    }

    const updateNoteApi = async (id, note) => {        
        try{
            const res = await updateNote(id, note)
            console.log(res.data)
        }catch(e){
            console.log(e.message)
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