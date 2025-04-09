//React-context-hooks
import { createContext, useContext } from "react";
//React-hooks
import { useState } from "react";
//Podcast Methods
import { addPodcast } from "../api/podcast";
import { deletePodcast } from "../api/podcast";
import { allPodcast } from "../api/podcast";
import { allPodcastUser } from "../api/podcast";
//SweetAlert
import Swal from "sweetalert2";
//React-router-dom
import { useNavigate } from "react-router-dom";
//PodcastContext
export const PodcastContext = createContext()

//UsePodcast
export const usePodcast = () => {
    const context = useContext(PodcastContext)

    if(!context){
        throw new Error('Must be with in a context provider')
    }
    
    return context
}

//Podcast Provider
export const PodcastProvider = ({children}) => {

    //Podcast Data
    const [podcastAll, setPodcastAll] = useState([])
    const [podcastUser, setPodcastUser] = useState([])

    const navigate = useNavigate()

    //Add Podcast
    const addPodcastApi = async (podcast) => {
        try{    
            const res = await addPodcast(podcast)
            Swal.fire({
                icon : 'success',
                title : 'Podcast Agregado',
                text : 'El podcast ha sido agregado correctamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })            
            navigate('/managePodcast')
        }catch(e){
            Swal.fire({
                icon : 'info',
                title : 'Error Agregando',
                text : 'Hubo un error agregando el podcast, intenta nuevamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
        }
    }    

    //Delete Podcast
    const deletePodcastApi = async (id) => {
        try{    
            const res = await deletePodcast(id)
        }catch(e){
            console.error(e)
        }
    }    

    //All Podcast Api
    const allPodcastApi = async () => {
        try{
            const res = await allPodcast()
            setPodcastAll(res.data)
        }catch(e){  
            console.error(e)
        }
    }

    //All Podcast User
    const allPodcastUserApi = async () => {
        try{
            const res = await allPodcastUser()
            setPodcastUser(res.data)
        }catch(e){
            console.error(e)
        }
    }

    return(
        <PodcastContext.Provider value={{
            addPodcastApi,
            deletePodcastApi,
            allPodcastApi,
            allPodcastUserApi,

            podcastAll,
            podcastUser
        }}>
            {children}
        </PodcastContext.Provider>
    )
}