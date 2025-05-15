//React-router-dom
import { Link } from "react-router-dom"
//Images
import speaker from '../../assets/home/imageHome.png'
import myNets from '../../assets/home/myNets.png'
import myRela from '../../assets/home/myRela.png'
import whatToDo from '../../assets/home/whatToDo.png'
//Styles
import '../../styles/session/home.css'
//PodcastProvider
import { usePodcast } from "../../context/podcastContex"
//React-hooks
import { useEffect, useState } from "react"
//Spotify Embed
import { Spotify } from "react-spotify-embed"
function Home(){    

    //PodcastMethods
    const {allPodcastUserApi, podcastUser} = usePodcast()
    const [loadPodcast, setLoadPodcast] = useState([])

    useEffect(() => {
        allPodcastUserApi()
        setLoadPodcast(podcastUser.slice(-2))
    },[podcastUser])

    return(
        <section className="sectionHome">                        
            <div className="containerPopularTP">
                <div className="containerNets">
                    <div className="containerLinkH1">
                        <Link className="linkH" to={'/relationship'}>
                            <img src={myRela} alt="imageRelation" />                    
                            <h3>
                                ¿Cómo va <br /> <span className="boldFont">mi relación?</span>
                            </h3>
                        </Link>
                    </div>
                </div>

                <div className="containerNets">
                    <div className="containerAllNets">
                        <div className="containerP containerWhatTo">
                            <Link className="linkH" to={'/whatToDo'}>
                                <img src={whatToDo} alt="imageWhatTo" />
                                <h3>
                                    ¿Qué puedo <br /> <span className="boldFont">hacer?</span>
                                </h3>
                            </Link>
                        </div>                    
                    
                        <div className="containerP containerNet">
                            <Link to={'/myNets'} className="linkH">  
                                <img className="imageNet" src={myNets} alt="imageNets" />
                                <h3>
                                    ¿Quiénes son <br /> <span className="boldFont">mis redes?</span>
                                </h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homeFisrtPart">
                <div className="containerKhow">
                    <h4>¡Conoce las <br /> rutas de atención!</h4>
                    <p>
                        ¿En quiénes puedo confiar?
                    </p>
                    <div className="containerLinkFP">
                        <Link className="linkFP" to={'/myNets'}>
                            Más Información
                        </Link>
                    </div>
                </div>
                <div className="containerImgFP">
                    <img src={speaker} alt="speaker" />
                </div>
            </div>
            

            <div className="containerPodcastH">
                <h4>
                    Pódcast Populares
                </h4>                
                <div className="podcastHomeContainer">
                    {
                        podcastUser.length > 0
                        ?
                        loadPodcast.map(podcast => {
                            return(
                                <div>
                                    <Spotify wide link={podcast.linkPodcast} />
                                </div>
                            )
                        })
                        :
                        null
                    }
                </div>
            </div>

        </section>
    )
}

export default Home