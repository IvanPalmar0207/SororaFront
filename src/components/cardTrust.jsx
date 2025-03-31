//Styles
import '../styles/components/cardTrust.css'
//Icons
import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
//Images
import asideImageTrust from '../assets/trust/asideTrust.svg'

function CardTrust({whatsappAR, phoneAR}){

    const whatString = String(whatsappAR).replace(/ /g, "")    
    const phoneString = String(phoneAR).replace(/ /g, "")

    return(
        <div className='containerTrustCard'>
            <div className='containerImageTrust'>
                <img src={asideImageTrust} alt="AsideImg" />    
            </div>    
            <div className='containerInfoTrust'>
                <div className='containerTextTrust'>
                    <h4>
                        Contactos de emergencia
                    </h4>
                    <p>
                        {phoneAR}                        
                    </p>
                </div>
                <div className='containerIconTrust'>
                    <a href={`https://wa.me/${whatString}`} target="_blank" rel="noopener noreferrer">
                        <IoLogoWhatsapp className='iconTrust'/>
                    </a>
                    <a href={`tel:${phoneString}`}>
                        <MdPhoneInTalk className='iconTrust'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardTrust