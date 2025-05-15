//Styles
import '../../styles/session/trustNets.css'
//AR Context
import { useAR } from '../../context/arContext'
//Components
import CardTrust from '../../components/cardTrust'
//Images
import trustImg from '../../assets/myNets/trust.svg'
import { useEffect } from 'react'
//Icons
import { CiFaceFrown } from "react-icons/ci";
function TrustNet(){

    //ArData
    const {allArUserApi, arUserList} = useAR()

    useEffect(() => {
        allArUserApi()
    },[])

    return(
        <section className='sectionTrustNet'>
            <div className='containerTrustNet'>
                <div className='containerTrustTitle'>
                    <div>
                        <h3>
                            Redes de Confianza
                        </h3>
                        <h2>
                            ¿En quiénes 
                            <br /> 
                            puedo confiar?
                        </h2>
                    </div>
                    <div>
                        <img src={trustImg} alt="TrustImg" />
                    </div>
                </div>

                <div className='containerDescTrust'>
                    <p>
                        Aquí puedes incluir los contactos de emergencia y redes de 
                        familiares y amigos con quienes compartir tu situación.
                    </p>
                </div>

                <div className='containerAllNetsTrust'>
                    {
                        arUserList.length > 0
                        ?                         
                            arUserList.map((ar) => {
                                return(
                                    <CardTrust 
                                        key={ar.key} 
                                        whatsappAR={ar.whatsappAR} 
                                        phoneAR={ar.phoneAR}
                                    />
                                )
                            })
                        :
                            <div className='containerNotDataTrust'>
                                <div className='containerIconTrustND'>
                                    <CiFaceFrown />
                                </div>
                                <p className='textNotDataTrust'>
                                    No hay redes de confianza para mostrar,
                                    muchisimas gracias visitar por esta sección,
                                    vuelve pronto.
                                </p>
                            </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default TrustNet