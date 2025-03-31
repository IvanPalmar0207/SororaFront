//Styles
import '../../styles/admin/formManage.css'
//React-hook-form
import { useForm } from 'react-hook-form'
//React-router-dom 
import { Link, useParams, useNavigate } from 'react-router-dom'
//ProviderAlt
import { useAlternative } from '../../context/alternativeContext'
//SweetAlert
import Swal from 'sweetalert2'
//Material UI
import { Alert, Button } from '@mui/material'
function FormMediaAlt(){
    //React-router-dom
    const navigate = useNavigate()
    const params = useParams()

    //React-hook.form
    const {register, handleSubmit, formState : {errors}} = useForm()

    //MediaAlt Media
    const {addMediaAltApi} = useAlternative()

    //onSubmit
    const onSubmit = handleSubmit(async (values) => {
        const formValues = new FormData()

        formValues.append('linkAlternative', values.linkAlternative)
        formValues.append('alternativeAction', params.id)

        if(params.id){
            Swal.fire({
                icon : 'success',
                title : 'Dato multimedia agregado',
                text : 'El dato multimedia ha sido agregado correctamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            addMediaAltApi(params.id, formValues)
            navigate(`/manageMediaAl/${params.id}`)
        }else{
            Swal.fire({
                icon : 'info',
                title : 'Error agregando',
                text : 'No se puede agregar un dato multimedia o podcast a una acción inexistente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
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
                    <textarea
                        {...register('linkAlternative', {
                            required : true,
                            pattern : {
                                value : /^(https?:\/\/)?(?:www\.)?open\.spotify\.com\/(track|playlist|album|episode|show)\/[a-zA-Z0-9]+(\?.*)?$/i,
                                message : 'Ingresa un enlace valido, el enlace tiene que ser de spotify.'
                            },
                            minLength : 5
                        })}
                        placeholder='Enlace del Podcast (Spotify)'
                    ></textarea>
                    {
                        errors.linkAlternative && <Alert className='alertForm' severity='error'>Ingresa un enlace valido de spotify.</Alert>
                    }                        

                    
                    <br />
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