//Styles
import '../styles/components/cardTips.css'
//React-router-dom
import {Link} from 'react-router-dom'
function CardTip({id, image, name}){
    return(
        <Link className='containerCardTip' to={`/moreInfoTip/${id}`}>  
            <div>
                <img src={image} alt="imageTip" />
            </div>
            <h4>
                {name}
            </h4>
        </Link>
    )
}

export default CardTip