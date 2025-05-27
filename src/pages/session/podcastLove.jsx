//Styles
import '../../styles/session/podcastLove.css'
//Images
import imgPodcast from '../../assets/podcast/podcastLove.png'
//Spotify Component
import { Spotify } from 'react-spotify-embed'
function PodcastLove(){
    return(
        <section className='sectionPodcastLove'>
            <div className='containerPodcastLove'>
                <div className='containerTitlePL'>
                    <div>
                        <h4>
                            Podcast - Areandina
                        </h4>
                        <h2>
                            Que amar no<br />te cueste la vida
                        </h2>                    
                    </div>
                    <div>
                        <img src={imgPodcast} alt="podcastLoveImg" />
                    </div>
                </div>

                <p className='pPodcastLove'>
                    Que amar no te cueste la vida es un podcast que permite conocer más 
                    sobre la violencia de pareja dirigida hacia las mujeres. De la mano del 
                    Equipo Interdisciplinar de Investigación y Acción contra la Violencia 
                    Invisible hacia las Mujeres de la Fundación Universitaria del Área 
                    Andina se acceden a reflexiones, casos, cifras y tips para identificar 
                    la violencia, sus tipos y herramientas para prevenirla y construir 
                    relaciones saludables. 
                    <br />
                    <br />
                    <span className='textPodcastLove'>Escucha nuestro Podcast que Amar no te cueste la vida en Spotify:</span>
                </p>

                <div className='containerPodcastPL'>
                    <Spotify              
                        width={'100%'}           
                        link='https://open.spotify.com/show/3g7klrpsxwFv17Qtcb6HQp?si=ROoxc5ICRritQUwlOkHyoQ&nd=1&dlsi=5c7e37f0aeee4af9'
                    />
                </div>

            </div>
        </section>
    )
}

export default PodcastLove