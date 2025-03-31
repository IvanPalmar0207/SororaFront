//Styles
import '../styles/components/cardTestimonies.css'
//Icons
import { FaCirclePlay } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { MdOutlinePersonOutline } from "react-icons/md";
//React-router-dom
import { Link } from 'react-router-dom';
function CardTestimonie({id, authorTest, descriptionTestf, articleTest}){
    return(
        <Link to={`/moreInfoTest/${id}`} className='containerCardTest'>
            <div className='sectionCardTest'>
                <div className='containerAuthorTest'>
                    <MdOutlinePersonOutline className='iconCTest'/>
                    <h3>
                        {authorTest}:
                    </h3>
                </div>
                <p className='textCardTest'>
                    {descriptionTestf.slice(0, 60)}...
                </p>
                <div className='linkCardTest'>
                    <FaCirclePlay className='iconVideoCT'/>
                    <a href={articleTest} className='containerIconCardT' target="_blank" rel="noopener noreferrer">
                        <FaLink className='iconLinkCT'/>
                    </a>
                </div>
            </div>
        </Link>
    )
}

export default CardTestimonie