//Styles
import '../styles/components/cardTips.css'
//React-router-dom
import {Link} from 'react-router-dom'

function CardTip({image, name}){
    return(
        <Link className='containerCardTip'>            
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