//Axios Client
import apiRequest from "./api";
//Add Podcast
export const addPodcast = (podcast) => {
    return apiRequest.post('api/podcast/podcast/', podcast)
}
//delete Podcast
export const deletePodcast = (id) => {
    return apiRequest.delete(`api/podcast/podcast/${id}/`)
}
//Get One Podcast
export const getOnePodcast = (id) => {
    return apiRequest.get(`api/podcast/podcast/${id}/`)
}
//All Podcast
export const allPodcast = () => {
    return apiRequest.get('api/podcast/podcast/')
}
//All Podcast User
export const allPodcastUser = () => {
    return apiRequest.get('api/podcastUser/')
}