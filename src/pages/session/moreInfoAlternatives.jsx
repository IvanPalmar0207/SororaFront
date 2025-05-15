//Styles
import '../../styles/session/moreInfoAlternatives.css'
//Reaact-router-dom
import {useParams} from 'react-router-dom'
//AltContext
import { useAlternative } from '../../context/alternativeContext'
//Components
import CardMAlternative from '../../components/cardMAlternative'
//React-hooks
import { useEffect, useState } from 'react'
//Icons
import { CiFaceFrown } from "react-icons/ci";
function MoreInfoAlternatives(){

    //React-router-dom
    const params = useParams()

    //AltMethods
    const [altData, setAltData] = useState([])

    const {getOneUserAltApi, allMediaAltUserApi, mediaAltUser} = useAlternative()

    useEffect(() => {
        if(params.id){
            allMediaAltUserApi(params.id)            
        }
    },[mediaAltUser])

    useEffect(() => {
        async function loadData(){
            const res = await getOneUserAltApi(params.id)
            setAltData(res)
        }
        loadData()
    },[])

    return(
        <section className='sectionMoreInfoAlt'>
            <div className='containerMoreInfoAlt'>                
                <div className='containerTextInfoAlt'>
                    <h4>
                        Acciones Alternativas
                    </h4>
                    <h2>
                        {altData.titleAlternative}
                    </h2>
                </div>

                <div className='containerDesInfoAlt'>
                    <p>
                        {altData.descriptionAlternative}
                    </p>
                </div>

                <div className='containerDesMediaIA'>
                    <p>
                        Aquí te ofrecemos algunas opciones para que inicies en este camino:
                    </p>
                    <div className='containerAllMediaA'>
                        {
                            mediaAltUser.length > 0
                            ?                            
                            mediaAltUser.map(media => {
                                return(
                                <div key={media.id}>
                                    <CardMAlternative urlAlt={media.linkAlternative} nameAlt={media.nameAlternative}/> 
                                </div>
                                )
                            })                                
                            :
                            <div className='notDataMoreInfoAlt'>
                                <div className='containerIconMIA'>
                                    <CiFaceFrown className='iconMIA'/>
                                </div>
                                <p className='notDataTextMIA'>
                                    No hay datos multimedia relacionados a esta acción 
                                    alternativa, muchas gracias por visitarnos.
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreInfoAlternatives