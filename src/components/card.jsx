//React-router-dom
import {Link} from 'react-router-dom'
//Styles
import '../styles/components/cardNet.css'

function Card({title, text, icon, route, routeTab}){

    const titleStyle = (routeTab) => {
        switch(routeTab){
            case'toDo':
                return 'cardtitleTD'
            case 'relation':
                return 'realtionTitle'       
            default:
                return 'cardtitleN'
            
        }
    }

    const imageStyle = (routeTab) => {
        switch(routeTab){
            case 'relation':
                return 'imageRelation'
            default:
                return 'cardImgN'
        }
    }

    const paraStyle = (routeTab) => {
        switch(routeTab){
            case 'relation':
                return 'paraStyle'
            default:
                return 'cardTextN'
        }
    }

    return(
        <div className='cardBodyN'>
            <Link to={`/${route}`} className='containerCardN'>
                <div className='containerTextCN'>
                    <h3 className={titleStyle(routeTab)}>
                        {title}
                    </h3>
                    <p className={paraStyle(routeTab)}>
                        {text}
                    </p>
                    {routeTab === 'toDo' ? 
                        <div className='containerCButton'>
                            <Link className='buttonCard' to={`/${route}`}>
                                Más Información
                            </Link>
                        </div>    
                        :
                        null
                    }
                </div>
                <div className={imageStyle(routeTab)}>
                    <img src={icon} alt="logo" />
                </div>
            </Link>
        </div>
    )
}

export default Card