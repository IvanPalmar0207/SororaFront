//Images
import React, { useEffect, useState } from 'react'
import sororaLogo from '../assets//index/sororaLogo.png'
import heartTouch from '../assets/index/HearTouch.png'
//Styles
import '../styles/index.css'
//React-router-dom
import { Link } from 'react-router-dom'
//SweetAlert
import Swal from 'sweetalert2'
//Icons
import { IoIosOpen } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
//Material UI
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
//React-player
import ReactPlayer from 'react-player'
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

    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(true)        
    }

    const toggleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        if(!isMobile){
            const instance = Swal.fire({
                title : 'Experiencia',
                text : 'Para mejorar tu experiencia como usuario dentro de la aplicación es necesario usar un dispositivo movil, gracias.',
                icon : 'info',                    
                showCloseButton : false,
                showConfirmButton : false,
                allowOutsideClick : false,          
                timer : 10000                           
            })
            setSwalInstance(instance)
        }else if(isMobile && swalInstance){
            if(swalInstance){
                swalInstance.close()
                setSwalInstance(null)
            }
        }
    },[isMobile])    

    return(
        <section className='sectionIndex'>    

<div className='containerSecondIndex'>
                <h3>
                    "Si es tu primera vez, conoce Sorora."
                </h3>
                <div className='containerIconI'>
                    <button onClick={toggleOpen} className='buttonIconI'>
                        <h5>
                            Conocer Sorora 
                        </h5>
                        <div>
                            <FaRegHeart className='iconIS' />
                        </div>
                    </button>                    
                </div>
            </div>                                 
            <Dialog
                open = {open}
                onClose = {toggleClose}                                
            >
                <div className='containerDBut'>
                    <button onClick={toggleClose}>
                        <IoIosCloseCircleOutline className='buttonDIcon'/>
                    </button>
                </div> 
                <DialogTitle>
                    <h3 className='titleDialogIndex'>
                        ¡Bienvenida a SORORA!
                    </h3>
                </DialogTitle>
                <DialogContent>
                    <div className='containerContDiaIndex'>
                        <div>
                            <ReactPlayer 
                                url = {'https://www.youtube.com/watch?v=o2TSS5r9fKs'}
                                playing
                                width = {'100%'}
                                height = {'170px'}
                                controls = {true}
                                muted = {false}                                
                            />
                        </div>
                        <div className='textContentDialogIn'>
                            <p>
                                SORORA significa hermandad, apoyo, respeto y unión entre mujeres.
                                La plataforma busca ser tu aliada para identificar la presencia y los
                                tipos de violencias en tu relación de pareja, conocer qué acciones puedes llevar
                                a cabo para frenarlas o prevenirlas y conectar con otras mujeres para compartir
                                tus experiencias y darse apoyo mutuo. No olvides ¡Que amar no te cueste la vida!
                            </p>
                        </div>
                        <Link className='registerDialogOpt' to={'/register'}>
                            <div className='registerOpt'>
                                Registrate
                            </div>
                            <div>
                                <IoPersonAdd className='registerIDia' />
                            </div>
                        </Link>
                    </div>
                </DialogContent>                
            </Dialog>

            <div className='containerImage'>
                <img src={sororaLogo} alt="sororaLogo" />
            </div>            

            <div className='containerDownSectI'>
                <h3>
                    Si ya te encuentras registrado/a:
                </h3>
                <div className='sectionTouch'>
                    <Link className='containerTouch' to={'/home'}>                               
                            <img src={heartTouch} alt="touchImage" />                                
                        <h3>
                            Toca Para Ingresar
                        </h3>
                    </Link>          
                </div>                  
            </div>

        </section>
    )
}

export default Index