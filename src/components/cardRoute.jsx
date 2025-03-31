//Styles
import '../styles/components/cardRoute.css'
//Icons
import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
//React-router-dom
import {Link} from 'react-router-dom'

function CardRoute({id, titleAR}){
    return(
        <Link to={`/moreInfoRoute/${id}`} className='containerCardAttention'>
            <div className='cardAttentionTitle'>
                <h4>
                    {titleAR}
                </h4>
            </div>
            <div className='containerCardIconAttn'>
                <IoLogoWhatsapp className='iconAtt'/>
                <MdPhoneInTalk className='iconAtt'/>
                <FaLocationDot className='iconAtt'/>
            </div>
        </Link>
    )
}

export default CardRoute