//Styles
import '../../styles/session/formContact.css'
//Images
import trustImg from '../../assets/myNets/trust.svg'
//Contact Context
import { useContactUser } from '../../context/contactUserContext'
//User Context
import { UseUser } from '../../context/userContext'
//Use Form
import { useForm } from 'react-hook-form'
//Material UI
import { Alert, Button } from '@mui/material'
//Icons
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
function FormContact(){

    //React-hook-form
    const {register, handleSubmit, formState : {errors}} = useForm()

    //User Context
    const {user} = UseUser()

    //Contact User Context
    const {addContactUserApi} = useContactUser()

    //OnSubmit Method
    const onSubmit = handleSubmit(async(values) => {
        if(values){
            addContactUserApi({
                nameContact : values.nameContact,
                numberContact : values.numberContact,
                ownerUser : user.id
            })
        }
    })

    return(
        <section className='sectionFormContact'>
            <div className='containerFormContact'>
                <div className='containerTitleFC'>
                    <div>
                        <h4>
                            Redes de Confianza
                        </h4>
                        <h2>
                            Tus propias redes de confianza
                        </h2>
                    </div>
                    <div className='imageTitleFC'>
                        <img src={trustImg} alt="imageTrust" />
                    </div>
                </div>

                <div className='containerDescFC'>
                    <p>
                        Bienvenida, usuaria. En esta sección tendrás la opción de poder agregar
                        tus propias redes de confianza de tus contactos cercanos, como familia, 
                        amigos o conocidos que puedan ayudarte en los momentos más difíciles.
                    </p>
                </div>

                <div className='containerRealFC'>
                    <form onSubmit={onSubmit}>
                        <div className='inputContainerFC'>      
                            <label htmlFor="nameContact">Nombre del Contacto:</label>                      
                            <div className='containerIFC'>
                                <div>
                                    <MdDriveFileRenameOutline className='iconFC'/>
                                </div>
                                <input 
                                    type="text" 
                                    {...register('nameContact',{
                                        required : true,
                                        minLength : 5
                                    })}
                                    required = {true}
                                    autoFocus = {true}
                                    placeholder='Ingresa el nombre de tu  contacto'    
                                />
                            </div>                            
                        </div>
                        {errors.nameContact && <Alert severity='error' className='alertForm'>El nombre del contacto debe tener almenos 5 caracteres.</Alert>}
                        
                        <br />                        

                        <div className='inputContainerFC'>
                            <label htmlFor="numberContact">Número del Contacto:</label>                            
                            <div className='containerIFC'>                                
                                <div>
                                    <MdContactPhone className='iconFC'/>
                                </div>
                                <input 
                                    type="text" 
                                    {...register('numberContact',{
                                        required : true,
                                        minLength : 10,
                                        maxLength : 10
                                    })}
                                    required = {true}
                                    placeholder='Ingresa el número de tu contacto'
                                />
                            </div>
                        </div>
                        {errors.numberContact && <Alert severity='error' className='alertForm'>El número de tu contacto debe de tener 10 digitos.</Alert>}

                        <div className='containerButtonFormFC'>
                            <div>
                                <Button type='submit' className='buttonFC addFC'>
                                    Agregar
                                </Button>
                            </div>
                            <div>
                                <Button type='reset' className='buttonFC deleteFC'>
                                    Borrar
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default FormContact