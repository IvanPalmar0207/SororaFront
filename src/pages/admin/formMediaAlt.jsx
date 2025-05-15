//Styles
import '../../styles/admin/formManage.css'
//React-hook-form
import { useForm } from 'react-hook-form'
//React-router-dom 
import { Link, useParams } from 'react-router-dom'
//ProviderAlt
import { useAlternative } from '../../context/alternativeContext'
//Material UI
import { Alert, Button } from '@mui/material'
function FormMediaAlt(){
    //React-router-dom    
    const params = useParams()

    //React-hook.form
    const {register, handleSubmit, formState : {errors}} = useForm()

    //MediaAlt Media
    const {addMediaAltApi} = useAlternative()

    //onSubmit
    const onSubmit = handleSubmit(async (values) => {
        const formValues = new FormData()

        formValues.append('linkAlternative', values.linkAlternative)
        formValues.append('nameAlternative', values.nameAlternative)
        formValues.append('alternativeAction', params.id)

        if(params.id){            
            addMediaAltApi(params.id, formValues, params.id)            
        }
    })

    return(
        <div className='containerFormUser'>
            <div className='containerFormLG'>
                <h1>
                    Agregar Dato Multimedia
                </h1>
                <p>
                    Bienvenido administrador, ingresa el enlace del dato 
                    multimedia traido directamente desde spotify, gracias
                    por visitar esta sección.
                </p>

                <br />
                <br />
                <br />

                <form onSubmit={onSubmit} className='formTecnic1'>     

                    <input type="text" 
                        {...register('nameAlternative',{
                            required : true,
                            minLength : 5
                        })}
                        placeholder='Nombre del dato multimedia'
                    />

                    <br />
                    <br />                    

                    <textarea
                        {...register('linkAlternative', {
                            required : true,
                            pattern : {                                
                                message : 'Ingresa un enlace valido, el enlace tiene que ser de spotify.',
                                value : '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?'
                            },
                            minLength : 5
                        })}
                        placeholder='Enlace del dato multimedia'
                    ></textarea>
                    {
                        errors.linkAlternative && <Alert className='alertForm' severity='error'>Ingresa un enlace valido.</Alert>
                    }                        
                                    
                    <br />
                    <br />

                    <div className='containerButtonSubmit'>
                        <Button type='submit' className = 'confirmButtonLG' variant='contained'>
                            Agregar Multimedia
                        </Button>
                    </div>                    
                    
                    <div className='containerButtonGoLG'>
                        <Link className='goBackContainer' to={`/manageMediaAl/${params.id}`}>
                            Volver Atrás
                        </Link>
                    </div>                    
                    <br />                    
                </form>

            </div>
        </div>
    )
}

export default FormMediaAlt