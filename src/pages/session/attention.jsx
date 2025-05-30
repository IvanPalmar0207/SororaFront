//Styles
import '../../styles/session/attention.css'
//React-hooks
import { useEffect } from "react"
//React-router-dom
import { Link } from 'react-router-dom'
//ArContext
import { useCat } from '../../context/catContext'
//Images
import attentionImg from '../../assets/whatToDo/attentionRoute.png'
import imgExam from '../../assets/attention/imgExam.png'
//Components
import CardRoute from '../../components/cardRoute'
//Icons
import { CiFaceFrown } from "react-icons/ci";

function Attention(){

    //Ar Data
    const {allCatUserApi, catListUser} = useCat()    

    useEffect(() => {
        allCatUserApi()                
    },[catListUser])    

    return(
        <section className='sectionAttention'>
            <div className='containerAttention'>
                <div className='textAttention'>
                    <div>
                        <h4>
                            Rutas de atención
                        </h4>
                        <h2>
                            ¿A dónde acudir?
                        </h2>
                    </div>
                    <div>
                        <img src={attentionImg} alt="atImg" />
                    </div>
                </div>

                {
                    catListUser.length > 0
                    ?
                        <div className='containerRouteAttention'>
                            {
                                catListUser.map((route) => {                                    
                                    return(
                                        <CardRoute 
                                            key={route.id} 
                                            id={route.id} 
                                            titleAR={route.nameCat} 
                                            imageAtt={route.imageCat}
                                        />
                                    )
                                })
                            }
                        </div>
                    :
                        <div className='containerNotDataAtt'>
                            <div className='iconNotDataAtt'>
                                <CiFaceFrown />
                            </div>
                            <p className='textNotDataAtt'>
                                No hay rutas de atención para mostrar,
                                muchisimas gracias visitar por esta sección,
                                vuelve pronto.
                            </p>
                        </div>
                }

                <Link to={`/relationship`} className='containerTestMI'>
                    <Link className='linkMITest'>
                        Realizar <br /> Examenes
                    </Link>
                    <div>
                        <img src={imgExam} alt="imgExam" />
                    </div>
                </Link>
            </div>            
        </section>
    )
}

export default Attention