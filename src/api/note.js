//Axios Client
import apiRequest from "./api";

//Add Note
export const addNote = (note) => {
    return apiRequest.post('apiSora/note/note/', note)
}
//Update Note
export const updateNote = (id, note) => {
    return apiRequest.put(`apiSora/note/note/${id}/`, note)
}
//Delete Note
export const deleteNote = (id) => {
    return apiRequest.delete(`apiSora/note/note/${id}/`)
}
//GetOne Note
export const getOneNote = (id) => {
    return apiRequest.get(`apiSora/note/note/${id}/`)
}
//AllNotes
export const allNotes = () => {
    return apiRequest.get('apiSora/note/note/')
}