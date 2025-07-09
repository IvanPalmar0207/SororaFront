//Styles
import '../styles/components/footer.css'
//Images
import contact from '../assets/footer/contact.svg'
import goHome from '../assets/footer/goHome.svg'
import notes from '../assets/footer/notes.svg'
import person from '../assets/footer/person.svg'
import red from '../assets/footer/red.svg'
//React-router-dom
import { Link } from 'react-router-dom'
//UserContext
import { UseUser } from '../context/userContext'
function Footer(){

    const {user} = UseUser() 

    return(
        <footer>
            <div className='containerFooter'>

                <div>
                    <Link to={`/profileUser/${user?.user_id}`}>
                        <img src={person} alt="personImg" />
                    </Link>
                </div>

                <div>
                    <Link to={'/podcast'}>
                        <img src={red} alt="podcastImg" />
                    </Link>
                </div>

                <div>
                    <Link to={'/home'}>
                        <img className='goHome' src={goHome} alt="homeImg" />
                    </Link>
                </div>

                <div>
                    <Link to={'/notes'}>
                        <img src={notes} alt="notesLogo" />
                    </Link>
                </div>

                <div>
                    <Link to={'/alternatives'}>
                        <img src={contact} alt="alternativeImg" />
                    </Link>
                </div>

            </div>
        </footer>
    )
}

export default Footer