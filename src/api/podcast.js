//Axios Client
import apiRequest from "./api";
//Add Podcast
export const addPodcast = (podcast) => {
    return apiRequest.post('apiSora/podcast/podcast/', podcast)
}
//delete Podcast
export const deletePodcast = (id) => {
    return apiRequest.delete(`apiSora/podcast/podcast/${id}/`)
}
//Get One Podcast
export const getOnePodcast = (id) => {
    return apiRequest.get(`apiSora/podcast/podcast/${id}/`)
}
//All Podcast
export const allPodcast = () => {
    return apiRequest.get('apiSora/podcast/podcast/')
}
//All Podcast User
export const allPodcastUser = () => {
    return apiRequest.get('apiSora/podcastUser/')
}