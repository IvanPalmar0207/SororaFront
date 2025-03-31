//Styles
import '../styles/components/cardAlternative.css'
//Icons
import { LuCirclePlus } from "react-icons/lu";
//React-router-dom
import { Link } from 'react-router-dom';
function CardAlternative({id, titleAlternative}){
    return(
        <div className='containerCA'>
            <div className='containerTextCA'>
                <h5>
                    {titleAlternative.slice(0, 64)}...
                </h5>
            </div>
            <div className='containerIconCA'>
                <Link to={`/moreInfoAlt/${id}`}>
                    <LuCirclePlus className='iconCA' />
                </Link>
            </div>
        </div>
    )
}

export default CardAlternative