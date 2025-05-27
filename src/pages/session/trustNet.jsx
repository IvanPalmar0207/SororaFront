//Styles
import '../../styles/session/trustNets.css'
//AR Context
import { useContactUser } from '../../context/contactUserContext'
//Components
import CardTrust from '../../components/cardTrust'
//Images
import trustImg from '../../assets/myNets/trust.svg'
import { useEffect, useState } from 'react'
import { IoPersonAdd } from "react-icons/io5";
//Icons
import { CiFaceFrown } from "react-icons/ci";
//React-Router-dom
import { Link } from 'react-router-dom'
//Components
import Loader from '../../components/loader'
function TrustNet(){

    //States
    const [loading, setLoading] = useState(true)

    //Contact Data
    const {getAllContactUserApi, contactList} = useContactUser()

    useEffect(() => {
        try{
            getAllContactUserApi()
        }catch(e){
            console.log(e)
        }finally{
            setLoading(false)
        }
    },[contactList])

    if(loading){
        return <Loader />
    }

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
                        contactList.length > 0
                        ?                         
                            contactList.map((con) => {
                                return(
                                    <CardTrust                                         
                                        key={con.id} 
                                        id={con.id}
                                        nameCon={con.nameContact} 
                                        phoneCon={con.numberContact}
                                    />
                                )
                            })
                        :
                            <div className='containerNotDataTrust'>
                                <div className='containerIconTrustND'>
                                    <CiFaceFrown />
                                </div>
                                <p className='textNotDataTrust'>
                                    No tienes redes de confianza para poder visualizar,
                                    muchisimas gracias por visitar esta sección, vuelve pronto
                                    o agrega una nueva red de confianza.
                                </p>
                            </div>
                    }
                </div>

                <div className='containerNewNet'>
                    <Link to={'/formContactU'} className='containerLinkAN'>                        
                        <h3>
                            Agregar Red                                            
                        </h3>
                        <div className='containerIconNet'>
                            <IoPersonAdd className='iconNet'/>
                        </div>                        
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default TrustNet