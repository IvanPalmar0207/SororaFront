//Styles
import '../../styles/admin/formManage.css'
//React-hook-fom
import { useForm } from 'react-hook-form'
//React-router-dom
import { Link, useNavigate, useParams } from 'react-router-dom'
//UseExam
import { useExam } from '../../context/examContext'
//SweetAlert
import Swal from 'sweetalert2'
//Material Ui
import { Alert, Button } from '@mui/material'
function FormQuestion(){
    //React-router-dom
    const navigate = useNavigate()
    const params = useParams()

    //UseForm
    const {register, handleSubmit, formState : {errors}} = useForm()

    //Question Methods
    const {addQuestionApi} = useExam()

    //OnSubmit Method
    const onSubmit = handleSubmit(async(values) => {
        
        const formValues = new FormData()

        formValues.append('nameQuestion', values.nameQuestion)
        formValues.append('scoreQuestion', values.scoreQuestion)
        formValues.append('examBelong', params.id)

        try{
            Swal.fire({
                icon : 'success',
                title : 'Pregunta Agregada',
                text : 'La pregunta ha sido agregada correctamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            addQuestionApi(params.id, formValues)
            navigate(`/manageQuestion/${params.id}`)
        }catch(e){
            Swal.fire({
                icon : 'info',
                title : 'Error Agregando',
                text : 'Hubo un error agregando la pregunta, intenta nuevamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
        }
    })

    return(
        <div className='containerFormUser'>
            <div className='containerFormLG'>
                <h1>
                    Agregar Pregunta
                </h1>
                <p>
                    Bienvenido administrador, ingresa en este formulario
                    la información relacionada a la pregunta que va a ser
                    agregada al examen que seleccionaste, muchas gracias por 
                    visitar esta sección.
                </p>
                
                <br />
                <br />

                <form onSubmit={onSubmit} className='formTecnic1'>
                    <textarea
                        {...register('nameQuestion',{
                            required : true, 
                            minLength : 5
                        })}
                        placeholder='Descripción de la pregunta'
                    >                        
                    </textarea>
                    {
                        errors.nameQuestion && <Alert severity='error' className='alertForm'>La pregunta debe de tener almenos 5 caracteres.</Alert>
                    }
                    <br />
                    <br />
                    
                    <input 
                        type="number"
                        {...register('scoreQuestion',{
                            required : true, 
                            valueAsNumber : true, 
                            pattern : {
                                value : /^(0|[1-9]\d*)(\.\d+)?$/
                            }
                        })}
                        placeholder='Puntaje de la pregunta'
                    />
                    {
                        errors.scoreQuestion && <Alert className='alertForm' severity='error'>El puntaje debe ser un valor numerico.</Alert>
                    }
                    
                    <br />
                    <br />
                    <br />

                    <div className='containerButtonSubmit'>
                        <Button type='submit' className='confirmButtonLG' variant='contained'>
                            Agregar Pregunta
                        </Button>
                    </div>

                    <div className='containerButtonGoLG'>
                        <Link className='goBackContainer' to={`/manageQuestion/${params.id}`}>
                            Volver Atrás
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormQuestion