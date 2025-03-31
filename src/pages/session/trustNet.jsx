//Styles
import '../../styles/session/trustNets.css'
//AR Context
import { useAR } from '../../context/arContext'
//Components
import CardTrust from '../../components/cardTrust'
//Images
import trustImg from '../../assets/myNets/trust.svg'
import { useEffect } from 'react'
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
                <div className='containerAllNetsTrust'>
                    {
                        arUserList.length > 1 

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

                        <div>
                            No hay redes disponible, intenta en otro momento.
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default TrustNet