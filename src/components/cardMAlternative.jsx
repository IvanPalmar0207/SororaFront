//Styles
import '../styles/components/cardMAlternative.css'
//Icons
import { FaCirclePlay } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";
function CardMAlternative({nameAlt, urlAlt}){
    return(
        <div className='sectionCardM'>
            <a className='containerSectionM' href={urlAlt} target="_blank" rel="noopener noreferrer">
                <div className='containerPlayM'>
                    <div>
                        <FaCirclePlay className='iconM'/>
                    </div>
                    <p>
                        {nameAlt}
                    </p>
                </div>
                <div className='moreM'>
                    <IoMdMore className='iconMoreM'/>
                </div>
            </a>
        </div>
    )
}

export default CardMAlternative