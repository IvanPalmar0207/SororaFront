//Styles
import '../../styles/session/attention.css'
//React-hooks
import { useEffect, useState } from "react"
//ArContext
import { useCat } from '../../context/catContext'
//Images
import attentionImg from '../../assets/whatToDo/attentionRoute.png'
//Components
import CardRoute from '../../components/cardRoute'

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

                <div className='containerRouteAttention'>
                    {
                        catListUser.map((route) => {
                            return(
                                <CardRoute key={route.id} id={route.id} titleAR={route.titleCat}/>
                            )
                        })
                    }
                </div>
            </div>            
        </section>
    )
}

export default Attention