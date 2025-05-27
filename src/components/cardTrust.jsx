//Styles
import '../styles/components/cardTrust.css'
//Icons
import { IoLogoWhatsapp } from "react-icons/io";
import { IoTrashBinOutline } from "react-icons/io5";
//Images
import asideImageTrust from '../assets/trust/asideTrust.svg'
//SweetAlert
import Swal from 'sweetalert2';
//Contact Context
import { useContactUser } from '../context/contactUserContext';
//React-router-dom
import { useNavigate } from 'react-router-dom';
function CardTrust({id, nameCon, phoneCon}){

    //Contact Context
    const {deleteContactUserApi} = useContactUser()

    //React-router-dom
    const navigate = useNavigate()

    //Format Phone
    const phoneString = String(phoneCon).replace(/ /g, "")

    return(
        <div className='containerTrustCard'>
            <div className='containerImageTrust'>
                <img src={asideImageTrust} alt="AsideImg" />    
            </div>    
            <div className='containerInfoTrust'>
                <div className='containerTextTrust'>
                    <h4>
                        {nameCon.slice(0,22)}{nameCon.length > 22 ? '...' : '' }
                    </h4>
                    <p>
                        +57 {phoneString}                        
                    </p>
                </div>
                <div className='containerIconTrust'>
                    <a href={`https://wa.me/+57${phoneString}`} target="_blank" rel="noopener noreferrer">
                        <IoLogoWhatsapp className='iconTrust whatsTrust'/>
                    </a>
                    <a>
                        <IoTrashBinOutline className='iconTrust deleteTrust' onClick={() => {
                            const deleteContact = Swal.mixin({

                            })

                            deleteContact.fire({
                                title : 'Eliminar Red de Confianza',
                                text : 'Estas seguro/a de eliminar la red de confianza?',
                                icon : 'warning',
                                showCloseButton : true,
                                showCancelButton : true,
                                confirmButtonText : 'Si, eliminar!',
                                confirmButtonColor : '#ff2d2d',
                                reverseButtons : true,
                                cancelButtonText : 'Cancelar',
                                cancelButtonColor : '#3ed634'
                            }).then(result => {
                                if(result.isConfirmed){
                                    deleteContact.fire({
                                        title : 'Eliminar Red de Confianza',
                                        text : 'La red de confianza ha sido eliminada correctamente',
                                        icon : 'success',
                                        confirmButtonColor : '#3ed634',
                                        confirmButtonText : 'Siguiente'
                                    })
                                    deleteContactUserApi(id)
                                    navigate('/trustNet')
                                }
                                else if(result.dismiss === Swal.DismissReason.cancel){
                                    deleteContact.fire({
                                        title : 'Operación Cancelada',
                                        text : 'La red de confianza no sera eliminada, intenta nuevamente.',
                                        icon : 'info',
                                        confirmButtonColor : '#3ed634',
                                        confirmButtonText : 'Cancelar'
                                    })
                                }
                            })

                        }}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardTrust