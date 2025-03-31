//React-context-hooks
import { createContext, useContext } from "react";
//React-hooks
import { useState } from "react";
//Podcast Methods
import { addPodcast } from "../api/podcast";
import { deletePodcast } from "../api/podcast";
import { allPodcast } from "../api/podcast";
import { allPodcastUser } from "../api/podcast";

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

    //Add Podcast
    const addPodcastApi = async (podcast) => {
        try{    
            const res = await addPodcast(podcast)
        }catch(e){
            console.error(e)
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