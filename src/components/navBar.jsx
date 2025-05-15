//React Hooks
import { useState } from 'react'
//Styles
import '../styles/components/navBar.css'
//Icons
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";
//Images
import logoNormal from '../assets/navBar/logoNormal.png'
import logoRes from '../assets/navBar/logoRes.png'
//React-router-dom
import { Link } from 'react-router-dom';
//User Context
import { UseUser } from '../context/userContext';
import { IoArrowBackCircleOutline } from "react-icons/io5";
const NavBar = ({routeTab}) => {

    //Menu State
    const [menu, setMenu] = useState(false)

    //Show Menu
    const toggleMenu = () => {
        setMenu(!menu)
    }    

    //User Context
    const {logOutApi, isAuthenticated, user} = UseUser()   

    //Load Data Center
    const loadData = (data) => {
        if(data === 'whatToDo'){
            return(
                <h4 className='titleNav colorWtoDo'>
                    <span className='colorLightWtoDo'>
                        ¿Qué puedo
                    </span>
                    <br />
                    hacer?
                </h4>
            )
        }
        else if(data === 'myNets'){
            return(
                <h4 className='titleNav colorMyNets'>
                    <span className='lightMyNets'>
                        ¿Quiénes son
                    </span>
                    <br />
                    mis redes?
                </h4>
            )
        }
        else if(data === 'podcast'){
            return(
                <h4 className='titleNav podcastNav'>
                    Pódcast
                </h4>
            )
        }
        else if(data === 'relationship' || data === 'testInfo'){
            return(
                <h4 className={`titleNav relationNav ${data === 'testInfo' ? 'testInfoLigh' : null}`}>
                    <span className='lighRelationN'>
                        ¿Cómo va
                    </span>
                    <br />
                    mi relación?
                </h4>
            )
        }
        else if(data === 'notes' || data === 'tellRed'){              
            return(
                <h4 className='titleNav notesNav'>
                    {data === 'notes' && 'Notas'}
                    {data === 'tellRed' && <span>Red Cuéntanos</span>}                    
                </h4>
            )
        }
        else if(data === 'trustNet'){
            return(
                <h4 className='titleNav'>
                    <span className='lightWhite'>
                        ¿Quiénes son
                    </span>
                    <br />
                    mis redes?
                </h4>
            )
        }
        else if(data === 'connectNet'){
            return(
                <h4 className='titleNav'>
                    <span className='lightWhite'>
                        ¿Quiénes son
                    </span>
                    <br />
                    mis redes?
                </h4>
            )
        }
        else if(data === 'testimonie' || data === 'moreTest'){
            return(
                <h4 className='titleNav'>
                    <span className='lightWhite'>
                        ¿Quiénes son
                    </span>
                    <br />
                    mis redes?
                </h4>
            )               
        }
        else if(data === 'tips' || data === 'moreInfoTips'){
            return(
                <h4 className='titleNav'>
                    <span className='lightWhite'>
                        ¿Qué puedo
                    </span>
                    <br />
                    hacer?
                </h4>
            )
        }
        else if(data === 'attention'|| data === 'moreAttention'){
            return(
                <h4 className='titleNav'>
                    <span className='lightWhite'>
                        ¿Qué puedo
                    </span>
                    <br />
                    hacer?
                </h4>
            )
        }
        else if(data === 'alternative' || data === 'altMore'){
            return(
                <h4 className='titleNav'>
                    <span className='lightWhite'>
                        ¿Qué puedo
                    </span>
                    <br />
                    hacer?
                </h4>
            )
        }
        else if(data === 'formNote'){
            return(
                <h4 className='titleNav noteFormNav'>
                    Mi Diario
                </h4>
            )
        }else if(data === 'credits'){
            return(
                <h4 className='titleNav creditNav'>
                    Créditos
                </h4>
            )
        }
        else{
            return(
                <a href="/home">
                    <img src={logoNormal} alt="Logo Nav" />                                   
                </a>
            )
        }
    }

    //Load Data Back
    const loadBackData = (data) => {
        if(data == 'trustNet'){
            return 'trustNetBack'
        }
        else if(data === 'connectNet'){
            return 'connectBack'
        }
        else if(data === 'testimonie' || data === 'moreTest'){
            return 'testimonieBack'
        }
        else if(data === 'tips' || data === 'moreInfoTips'){
            return 'tipsBack'
        }
        else if(data === 'attention' || data === 'moreAttention'){
            return 'attentionBack'
        }
        else if(data === 'alternative' || data === 'altMore'){
            return 'altBack'
        }
        else if(data === 'formNote'){
            return 'formNoteBack'
        }
        else if(data === 'testInfo'){
            return 'testInfoBack'
        }
        else{
            return 'navBarClass'
        }
    }   

    //Load Data Button
    const loadButton = (data) => {
        if(
            data === 'trustNet' ||
            data === 'connectNet' ||
            data === 'testimonie' ||
            data === 'moreTest' ||
            data === 'tips' ||
            data === 'moreInfoTips' ||
            data === 'attention' ||
            data === 'moreAttention' ||
            data === 'alternative' || 
            data === 'altMore' ||
            data === 'formNote' ||
            data === 'testInfo'
        ){
            return 'lightButton'
        }else{
            return null
        }
    }

    //Load Menu
    const loadMenu = (data) => {
        if(data === 'trustNet'){
            return 'lighMenuTrust'
        }
        else if(data === 'connectNet'){
            return 'lightMenuConnect'
        }
        else if(data === 'testimonie' || data === 'moreTest'){
            return 'lightMenuTest'
        }
        else if(data === 'tips' || data === 'moreInfoTips'){
            return 'lightMenuTips'
        }
        else if(data === 'attention' || data === 'moreAttention'){
            return 'lightMenuAtt'
        }
        else if(data === 'alternative' || data === 'altMore'){
            return 'lightMenuAlt'
        }
        else if(data === 'formNote'){
            return 'noteFormMenu'
        }
        else if(data === 'testInfo'){
            return 'testInfoMenu'
        }
        else{
            return null
        }
    }

    //Load Links
    const loadLinks = (data) => {
        if(data === 'tips' || data === 'attention' || data === 'alternative'){
            return 'whatToDo'
        }
        else if(data === 'trustNet' || data === 'connectNet' || data === 'testimonie'){
            return 'myNets'
        }
        else if(data === 'moreInfoTips'){
            return 'tips'
        }
        else if(data === 'moreAttention'){
            return 'attention'
        }
        else if(data === 'altMore'){
            return 'alternatives'
        }
        else if(data === 'formNote'){
            return 'notes'
        }
        else if(data === 'moreTest'){
            return 'netTestimonie'
        }
        else if(data === 'testInfo'){
            return 'relationship'
        }

        return 'home'
    }

    return (
        <header className={`navBarClass ${loadBackData(routeTab)}`}>
            {
                routeTab === 'home' || routeTab === 'login' || routeTab === 'register' || routeTab === undefined ? 
                    <div></div>
                :
                    <div>
                        <Link to={`/${loadLinks(routeTab)}`} className='containerBackBut'>
                            <IoArrowBackCircleOutline className={`backButt ${loadButton(routeTab)} ${menu ? 'isActiveIcon' : null}`} />
                        </Link>
                    </div>
            }
            
            {
                menu ? '' :
                <>
                    <div className='navBarLogo'>                
                        {
                            loadData(routeTab)
                        }
                    </div>

                    <button className='navbarButton' onClick={toggleMenu}>
                        {menu ? '' : <HiOutlineMenu className={`navBarSvg ${loadMenu(routeTab)}`}/> }                
                    </button>
                </>
            }            

            
            <nav className={`navBarNav ${menu ? 'isActive' : ''}`}>

            {
                menu ? 
                <div className='containerLogoRes'>
                    <a href="/home">
                        <img src={logoRes} alt="logo" />
                    </a>
                </div> : null
            }

            {user?.is_admin                 
            ?                
            <ul className='navBarUl'>              
                <li className='navBarli'>
                    <a href="/manageExams" className='navBarA'>
                        G. Examenes
                    </a>
                </li>
                <li className='navBarli'>
                    <a href="/managePodcast" className='navBarA'>
                        G. Podcast
                    </a>
                </li>
                <li className='navBarli'>
                    <a href="/manageAlternative" className='navBarA'>
                        G. Acciones Alternativas
                    </a>
                </li>
                <li className='navBarli'>
                    <a href="/manageTest" className='navBarA'>
                        G. Testimonios
                    </a>
                </li>
                <li className='navBarli'>
                    <a href="/manageCat" className='navBarA'>
                        G. Categorias de RA
                    </a>    
                </li>                                                                           
                <li className='navBarli'>
                    <a href="/manageAr" className='navBarA'>
                        G. Rutas de atención
                    </a>    
                </li>                
                <li className='navBarli'>
                    <a href="/manageTips" className='navBarA'>
                        G. Tips
                    </a>    
                </li>                                                    
            </ul>            
            :

            <ul className='navBarUl'>
                <li className='navBarli'>
                    <a href="/home" className='navBarA'>
                    Inicio
                    </a>    
                </li>       
                <li className='navBarli'>
                    <a href="/relationship" className='navBarA'>
                    ¿Cómo va mi relación?
                    </a>    
                </li>       
                <li className='navBarli'>
                    <a href="/whatToDo" className='navBarA'>
                        ¿Qué puedo hacer?
                    </a>    
                </li>                    
                <li className='navBarli'>
                    <a href="/myNets" className='navBarA'>
                        ¿Quiénes son mis redes?
                    </a>
                </li>                    
                <li className='navBarli'>
                    <a href="/tellRed" className='navBarA'>
                        Red Cuéntanos
                    </a>
                </li>                    
                <li className='navBarli'>
                    <a href="/podcast" className='navBarA'>
                        Pódcast
                    </a>
                </li>          
                <li className='navBarli'>
                    <a href="/notes" className='navBarA'>
                        Mi Diario
                    </a>
                </li>   
                <li className='navBarli'>
                    <a href="/credits" className='navBarA'>
                        Créditos
                    </a>
                </li>   
            </ul>
            }

            {isAuthenticated ? 
                <ul>
                    <li className='navBarli'>
                        <a onClick={logOutApi} href='/home' className='navBarA logOutBut'>
                            Cerrar Sesión
                        </a>
                    </li>                    
                </ul>        
            :
                <ul>
                    <li className='navBarli'>
                        <Link to={'/login'} className='navBarA logOutBut'>
                            Iniciar Sesión
                        </Link>
                    </li>                    
                    <li className='navBarli'>
                        <Link to={'/register'} className='navBarA logOutBut'>
                            Registrarse
                        </Link>
                    </li>                    
                </ul>        
            }

                <button onClick={toggleMenu} className='buttonClose'>
                    {menu ? <IoMdCloseCircleOutline className='navClose'/> : ''}
                </button>
            </nav>     
            
        </header>
    )
}

export default NavBar