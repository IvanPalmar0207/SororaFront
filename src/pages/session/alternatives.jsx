//Styles
import '../../styles/session/alternatives.css'
//Images
import alternativesImg from '../../assets/whatToDo/alternatives.png'
//AlternativeProvider
import { useAlternative } from '../../context/alternativeContext'
import { useEffect } from 'react'
//Components
import CardAlternative from '../../components/cardAlternative'

//Icons
import { CiFaceFrown } from "react-icons/ci";
function Alternatives(){

    //Alternative Context
    const {allAlternativeUserApi, allUserAlt} = useAlternative()

    useEffect(() => {
        allAlternativeUserApi()
    },[allUserAlt])        

    return(
        <section className='sectionAlternatives'>
            <div className='containerAlternatives'>
                <div className='containerTitleAlt'>
                    <div>
                        <h4>
                            Acciones Alternativas
                        </h4>
                        <h2>
                            ¿Qué otras
                            <br />
                            opciones tengo?
                        </h2>
                    </div>
                    <div>
                        <img src={alternativesImg} alt="imgAlternatives" />
                    </div>
                </div>

                <div className='containerDesAlt'>
                    <p>
                        A veces cuando vivimos experiencias dolorosas o confusas en
                        una relación no siempre queremos ir afuera, así que es 
                        momento de ir adentro. Aquí encontrarás acceso a recursos y 
                        alternativas que pueden ayudarte para cuidarte y trabajar 
                        contigo misma.
                    </p>
                </div>

                {
                    allUserAlt.length > 0
                    ?
                    <div className='containerDataAlternatives'>
                    {                        
                            allUserAlt.map((alt) => {
                                return(
                                    <div className='containerDataAlt'>
                                        <CardAlternative 
                                            key={alt.id} 
                                            id={alt.id} 
                                            titleAlternative={alt.titleAlternative}
                                        />
                                    </div>
                                )
                            })                                                                                                            
                    }     
                    </div>                                   
                    :
                    <div className='containerNoDataAlt'>
                        <div className='containerIconAS'>
                            <CiFaceFrown className='iconAltSad' />
                        </div>
                        <p>
                            No hay acciones alternativas para mostrar, gracias por visitar 
                            esta sección y no dudes en regresar, buen día.
                        </p>
                    </div>
                }
            </div>
        </section>
    )
}

export default Alternatives