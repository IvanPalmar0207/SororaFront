//Axios Client
import apiRequest from "./api";

//Add Note
export const addNote = (note) => {
    return apiRequest.post('api/note/note/', note)
}
//Update Note
export const updateNote = (id, note) => {
    return apiRequest.put(`api/note/note/${id}/`, note)
}
//Delete Note
export const deleteNote = (id) => {
    return apiRequest.delete(`api/note/note/${id}/`)
}
//GetOne Note
export const getOneNote = (id) => {
    return apiRequest.get(`api/note/note/${id}/`)
}
//AllNotes
export const allNotes = () => {
    return apiRequest.get('api/note/note/')
}