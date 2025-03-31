//Styles
import '../../styles/session/attention.css'
//Images
import attentionImg from '../../assets/whatToDo/attentionRoute.png'
import imgAside from '../../assets/attention/asideImg.svg'
//ArContext
import { useCat } from '../../context/catContext'
//React-hooks
import { useEffect } from 'react'
import { useState } from 'react'
//Icons
import { CiFaceFrown } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
//React-router-dom
import { useParams } from 'react-router-dom'

function MoreInfoRoute(){

    //React-router-dom
    const params = useParams()

    const {oneCatArApi, getOneCatUserApi } = useCat()

    const [catArList, setCatArList] = useState([])
    
    const [data, setData] = useState(false)

    useEffect(() => {
        async function loadData() {
            if(params.id){
                const res = await oneCatArApi(params.id)
                setCatArList(res)
            }
        }            
        loadData()    
    },[])

    useEffect(() => {
        if(catArList.length <= 0){
            setData(false)
        }else{
            setData(true)
        }
    },[catArList])

    console.log(data)

    useEffect(() => {
        async function loadDataCat() {
            if(params.id){
                const res = await getOneCatUserApi(params.id)
                
                const titleARM = document.getElementById('titleARM')
                titleARM.innerHTML = res?.titleCat
            }
        }
        loadDataCat()
    },[])

    return(
        <section className={`${data ? 'sectionAttention' : 'noData'}`}>
            <div className='containerAttention'>
                <div className='textAttention'>
                    <div>
                        <h4>
                            Rutas de Atención
                        </h4>
                        <h2 id='titleARM'>

                        </h2>
                    </div>
                    <div>
                        <img src={attentionImg} alt="attentionImg" />
                    </div>
                </div>

                <div className='containerAllCatAr'>
                {
                    catArList.length > 0 
                    ?
                    catArList.map(cat => {
                        return(
                            <div className='containerMoreInfoAtt'>
                                <div>
                                    <img src={imgAside} alt="AsideImg" />
                                </div>
                                <div className='containerIconMRI'>
                                    <h3>
                                        Contacto de emergencia
                                    </h3>
                                    <div className='containerIRoute'>
                                        <IoLogoWhatsapp className='iconMRI' />
                                        <h5 id='whatsARM'>
                                            {cat.whatsappAR}
                                        </h5>
                                    </div>
                                    <div className='containerIRoute'>
                                        <MdPhoneInTalk className='iconMRI'/>
                                        <h5 id='phoneARM'>
                                            {cat.phoneAR}
                                        </h5>
                                    </div>
                                    <div className='containerIRoute'>
                                        <FaLocationDot className='iconMRI'/>
                                        <h5 id='locationARM'>
                                            {cat.locationAR}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :

                    <div className='containerNotData'>
                        <div>
                            <CiFaceFrown className='iconNotDataA'/>
                        </div>
                        <p>
                            No hay información de contactos en esta ruta de atención, 
                            intenta con otra ruta de atención, gracias por visitarnos.
                        </p>
                    </div>
                }
                </div>

            </div>
        </section>
    )
}

export default MoreInfoRoute