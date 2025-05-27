//Styles
import '../styles/components/cardRoute.css'
//React-router-dom
import {Link} from 'react-router-dom'

function CardRoute({id, titleAR, imageAtt}){
    return(
        <Link to={`/moreInfoRoute/${id}`} className='containerCardAttention'>
            <div className='cardAttentionTitle'>
                <h4>
                    Violencia {titleAR}
                </h4>
            </div>            
            <div className='containerCardIconAttn'>
                <img src={imageAtt} alt="imageAttention" />
            </div>
        </Link>
    )
}

export default CardRoute