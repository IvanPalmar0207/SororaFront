//Images
import { useEffect, useState } from 'react'
import sororaLogo from '../assets//index/sororaLogo.png'
import heartTouch from '../assets/index/HearTouch.png'
//Styles
import '../styles/index.css'
//React-router-dom
import { Link } from 'react-router-dom'
//SweetAlert
import Swal from 'sweetalert2'

const useMobileDevice = () => {
    const mobileSize = () => window.innerWidth <= 750

    const [isMobile, setIsMobile] = useState(mobileSize);

    useEffect(() => {
        const onResize = () => {
            setIsMobile(mobileSize);
        }        
        
        window.addEventListener("resize", onResize);            

        return () => {
            window.removeEventListener("resize", onResize);
        }        
    },[])

    return isMobile
}

function Index(){         
    
    const isMobile = useMobileDevice()
    const [swalInstance, setSwalInstance] = useState(null)

    useEffect(() => {
        if(!isMobile){
            const instance = Swal.fire({
                title : 'Experiencia',
                text : 'Para mejorar tu experiencia como usuario dentro de la aplicación es necesario usar un dispositivo movil, gracias.',
                icon : 'info',                    
                showCloseButton : false,
                showConfirmButton : false,
                allowOutsideClick : false,        
                timer: 3000        
            })
            setSwalInstance(instance)
        }else{
            if(swalInstance){
                swalInstance.close()
                setSwalInstance(null)
            }
        }
    },[isMobile])

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