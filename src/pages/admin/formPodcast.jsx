//Styles
import '../../styles/admin/formManage.css'
//React-hook-form
import { useForm } from 'react-hook-form'
//React-router-dom
import { Link, useNavigate } from 'react-router-dom'
//UsePodcast
import { usePodcast } from '../../context/podcastContex'
//SweetAlert
import Swal from 'sweetalert2'
//Material UI
import { Alert, Button } from '@mui/material'
function FormPodcast(){

    //React-router-dom
    const navigate = useNavigate()

    //UseForm
    const {register, handleSubmit, formState : {errors}} = useForm()

    //Podcast Methods
    const {addPodcastApi} = usePodcast()

    //OnSubmit Methods
    const onSubmit = handleSubmit(async(values) => {
        const formValues = new FormData()

        formValues.append('linkPodcast', values.linkPodcast)

        try{
            Swal.fire({
                icon : 'success',
                title : 'Podcast Agregado',
                text : 'El podcast ha sido agregado correctamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            addPodcastApi(formValues)
            navigate('/managePodcast')
        }catch(e){
            Swal.fire({
                icon : 'info',
                title : 'Error Agregando',
                text : 'Hubo un error agregando el podcast, intenta nuevamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
        }

    })

    return(
        <div className='containerFormUser'>
            <div className='containerFormLG'>
                <h1>
                    Agregar Podcast
                </h1>
                <p>
                    Bienvenido administrador, ingresa el enlace del podcast
                    correspondiente traido directamente desde Spotify, gracias
                    por visitar esta sección.
                </p>
                
                <br />
                <br />
                <br />

                <form className='formTecnic1' onSubmit={onSubmit}>
                    <textarea 
                        {...register('linkPodcast',{
                            required : true,
                            pattern : {
                                value : /^(https?:\/\/)?(?:www\.)?open\.spotify\.com\/(track|playlist|album|episode|show)\/[a-zA-Z0-9]+(\?.*)?$/i,
                                message : 'Ingresa un enlace valido, intenta nuevamente.'
                            },
                            minLength : 5
                        })}
                        placeholder='Enlace del Podcast(Spotify)'
                    ></textarea>
                    {
                        errors.linkPodcast && <Alert className='alertForm' severity='error'>Ingresa un enlace valido de Spotify.</Alert>
                    }

                    <br />
                    <br />
                    <br />

                    <div className='containerButtonSubmit'>
                        <Button type='submit' className='confirmButtonLG' variant='contained'>
                            Agregar Podcast
                        </Button>
                    </div>

                    <div className='containerButtonGoLG'>
                        <Link className='goBackContainer' to={'/managePodcast'}>
                            Volver Atrás
                        </Link>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default FormPodcast