//Styles
import '../../styles/session/podcast.css'
//UsePodcast
import { usePodcast } from '../../context/podcastContex'
//Images
import podcastImg from '../../assets/podcast/podcastImg.svg'
//React-hooks
import { useEffect, useState } from 'react'
//Icons
import { CiFaceFrown } from "react-icons/ci";
//Spotify Embed
import { Spotify } from 'react-spotify-embed';
function Podcast(){

    //Podcast Methods
    const {allPodcastUserApi, podcastUser} = usePodcast()
    const [lastData, setLastData] = useState([])

    useEffect(() => {
        allPodcastUserApi()
        setLastData(podcastUser[podcastUser.length -1])
    },[podcastUser])

    return(
        <section className='sectionPodcast'>
            <div className='containerPodcastTitle'>
                <div className='containerPodcastFirst'>
                    <h2>
                        ¡Tú eres lo más
                        <br />
                        importante!
                    </h2>
                    <h4>
                        Redescubre qué es lo que
                        <br />
                        más te gusta hacer.
                    </h4>
                    <div className='containerPodcastLink'>
                        <a className='linkLastPod' href={lastData?.linkPodcast} target="_blank" rel="noopener noreferrer">
                            Escuchar
                        </a>
                    </div>
                </div>
                <div className='containerPodcastImg'>
                    <img src={podcastImg} alt="podcastImg" />
                </div>
            </div>
            <div className='containerPodcastInfo'>
                <p className='pPodcastInfo'>
                    Escucha nuestra selección de pódcast que puedan
                    ayudarte:
                </p>
                <div className='containerAllInfoData'>
                    {
                        podcastUser.length > 0
                        ?
                            podcastUser.map(podcast => {
                                return(
                                    <div>
                                        <Spotify wide link={podcast.linkPodcast} />
                                    </div>
                                )
                            })
                        :
                        <div className='containerNotDataPodcast'>
                            <div className='containerIconPod'>
                                <CiFaceFrown className='iconPodcast'/>
                            </div>
                            <p className='pNotDataPod'>
                                No hay datos de podcast para mostrar, gracias por visitar
                                esta sección e intenta mas tarde.
                            </p>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Podcast