//Images
import creditImg from '../../assets/logoArea.png'
import invesI from '../../assets/credits/investigationI.png'
import designI from '../../assets/credits/designI.png'
import logoIA from '../../assets/credits/logoAI.png'
//Styles
import '../../styles/session/credits.css'
//Material UI
import {Dialog, DialogContent, DialogTitle} from '@mui/material'
//React hooks
import { useState } from 'react'
function Credits(){

    //Open and Close Functions
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    const handleOpen1 = (id) => {
        setOpen1(true)
    }

    const handleClose1 = (id) => {
        setOpen1(false)
    }

    const handleOpen2 = (id) => {
        setOpen2(true)
    }

    const handleClose2 = (id) => {
        setOpen2(false)
    }

    const handleOpen3 = (id) => {
        setOpen3(true)
    }

    const handleClose3 = (id) => {
        setOpen3(false)
    }

    return(
        <section className='sectionCredits'>
            <div className='containerCredits'>
                <div className='titlesCredits'>                    
                    <div>
                        <h4>
                            Créditos
                        </h4>
                        <h2>
                            Créditos Sorora a los <br /> participantes del proyecto
                        </h2>
                    </div>                    
                    <div className='containerImgCred'>
                        <img src={creditImg} alt="Logo Area" />
                    </div>
                </div>
                <div className='containerCreditsAll'>                    
                    <div className='containerSingleCredit' onClick={handleOpen1}>
                        <div>
                            <img src={logoIA} alt="logoAre" />
                        </div>
                        <h4>
                            Fundación Universitaria del Área Andina 
                        </h4>                        
                    </div>
                    <Dialog                        
                        open = {open1}
                        onClose = {handleClose1}
                        aria-labelledby = 'titleDialog'
                        aria-describedby = 'contentDialog'                                                
                    >
                        <DialogTitle id='titleDialog' className = 'containerDialog'>
                            <h3>
                                Fundación Universitaria del Área Andina
                            </h3>
                        </DialogTitle>
                        <DialogContent id='contentDialog' className = 'containerDialog'>
                            <div className='contentDialog'>
                                <ul>
                                    <li>
                                        Equipo interdisciplinar de investigación y acción contra la violencia
                                        invisible hacia las mujeres.
                                    </li>
                                    <li>
                                        Equipo de Operaciones Virtuales.
                                    </li>
                                </ul>                              
                            </div>  
                        </DialogContent>
                        <div className='containerButtonDiag'>
                            <button onClick={handleClose1}>
                                Cerrar
                            </button>
                        </div>
                    </Dialog>
                    <div className='containerSingleCredit' onClick={handleOpen2}>           
                        <div>
                            <img src={invesI} alt="investigationLogo" />
                        </div>
                        <h4>
                            Grupos de Investigación
                        </h4>                        
                    </div>
                    <Dialog
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby='titleDialog'
                        aria-describedby='contentDialog'
                    >
                        <DialogTitle id='titleDialog' className='containerDialog'>
                            <h3>
                                Grupos de Investigación
                            </h3>
                        </DialogTitle>
                        <DialogContent id='contentDialog' className='containerDialog'>
                            <div className='contentDialog'>
                                <ul>
                                    <li>
                                        Educación Transformadora
                                    </li>
                                    <li>
                                        Vicerrectoría Académica Nacional
                                    </li>
                                    <li>
                                        Grupo de Investigación en Estudios de Desarrollo 
                                        Social y Humano
                                    </li>
                                    <li>
                                        Departamento de Humanidades - Bogotá
                                    </li>
                                    <li>
                                        Facultad de Ciencias Sociales y Humanas
                                    </li>
                                    <li>
                                        Verbaiuris
                                    </li>
                                    <li>
                                        Programa de Derecho - Bogotá
                                    </li>
                                    <li>
                                        Psynergia
                                    </li>
                                    <li>
                                        Programa de Psicología - Bogotá
                                    </li>
                                    <li>
                                        Facultad de Ciencias Sociales y Humanas
                                    </li>
                                </ul>
                            </div>
                        </DialogContent>
                        <div className='containerButtonDiag'>
                            <button onClick={handleClose2}>
                                Cerrar
                            </button>
                        </div>
                    </Dialog>
                    <div className='containerSingleCredit' onClick={handleOpen3}>
                        <div>
                            <img src={designI} alt="desginI" />
                        </div>
                        <h4>
                            Colaboración Especial
                        </h4>                        
                    </div>
                    <Dialog
                        open = {open3}
                        onClose = {handleClose3}                        
                        aria-labelledby = 'titleDialog'
                        aria-describedby = 'contentDialog'
                    >
                        <DialogTitle id = 'titleDialog' className='containerDialog'>
                            <h3>
                                Colaboración Especial
                            </h3>
                        </DialogTitle>  
                        <DialogContent id = 'contentDialog' className='containerDialog'>
                            <div className='contentDialog'>
                                <ul>
                                    <li>
                                        Grupo de Investigación Proyecta
                                    </li>
                                    <li>
                                        Programa de Diseño Gráfico - Bogotá
                                    </li>
                                    <li>
                                        Facultad de Diseño, Comunicación y Bellas Artes
                                    </li>
                                </ul>
                            </div>
                        </DialogContent>
                        <div className='containerButtonDiag'>
                            <button onClick={handleClose3}>
                                Cerrar
                            </button>
                        </div>
                    </Dialog>
                </div>
            </div>
        </section>
    )
}

export default Credits