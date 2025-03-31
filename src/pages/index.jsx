//Images
import { useEffect } from 'react'
import sororaLogo from '../assets//index/sororaLogo.png'
import heartTouch from '../assets/index/HearTouch.png'
//Styles
import '../styles/index.css'
//React-router-dom
import { Link } from 'react-router-dom'
//SweetAlert
import Swal from 'sweetalert2'
function Index(){            
    
    useEffect(() => {
        Swal.fire({
            title : 'Experiencia',
            text : 'Para mejorar tu experiencia como usuario dentro de la aplicación es necesario usar un dispositivo movil, gracias.',
            icon : 'info',
            confirmButtonColor : '#39b9bf',
            confirmButtonText : 'Siguiente'
        })
    },[])

    return(
        <section className='sectionIndex'>    

            <div></div>

            <div className='containerImage'>
                <img src={sororaLogo} alt="sororaLogo" />
            </div>
                        

            <Link className='containerTouch' to={'/home'}>                
                <img src={heartTouch} alt="touchImage" />                
                <h3>
                    Toca Para Ingresar
                </h3>
            </Link>                        

        </section>
    )
}

export default Index