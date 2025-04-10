//Styles
import '../../styles/admin/formManage.css'
//React-hook-form
import { useForm } from 'react-hook-form'
//React-router-dom
import { Link, useParams } from 'react-router-dom'
//UseExam
import { useExam } from '../../context/examContext'
//Material Ui
import { Alert, Button } from '@mui/material'
//React-hooks
import { useEffect, useState } from 'react'
//SweetAlert
import Swal from 'sweetalert2'
//Components
import Loader from '../../components/loader'
function FormScore(){

    //React-router-dom
    const params = useParams()

    //UseForm
    const {register, handleSubmit, formState : {errors}} = useForm()

    //Score Methods
    const {addScoreApi, allScoresApi, score} = useExam()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadData() {
            if(params.id){
                try{
                    allScoresApi(params.id)
                }catch(e){  
                    console.error(e)
                }
                finally{
                    setLoading(false)
                }
            }   
        }
        loadData()
    },[score, params.id])

    //Score Logic
    const scoreLogin = (scoreNX, scoreName) => {
        const maxMinScore = score.find(sco => scoreNX >= sco.minScore && scoreNX <= sco.maxScore)
        if(maxMinScore){
            Swal.fire({
                icon : 'info',
                title : 'Puntaje Incorrecto',
                text : `El puntaje ${scoreName} se encuentra en un rango de los puntajes que ya estan registrados.`,
                confirmButtonColor : '#39b9bf',
                confirmButtonText : 'Siguiente'
            })
        }else{
            return null
        }
    }

    //OnSubmit Method
    const onSubmit = handleSubmit(async (values) => {

            const formValues = new FormData()

            formValues.append('minScore', values.minScore)
            formValues.append('maxScore', values.maxScore)
            formValues.append('idExam', params.id)

            if(values.violenceType){
                formValues.append('violenceType', values.violenceType)
            }
            
            formValues.append('messageScore', values.messageScore)
            
            if(scoreLogin(values.minScore, 'Minimo')){
                scoreLogin(values.minScore, 'Minimo')
            }
            else if(scoreLogin(values.maxScore, 'Maximo')){
                scoreLogin(values.maxScore, 'Maximo')
            }
            else if(scoreLogin(values.minScore, 'Minimo') === null && scoreLogin(values.maxScore, 'Maximo') === null){
                addScoreApi(params.id, formValues, params.id)
            }                                                    
        }    
    )

    //Type Violence
    const [violence, setViolence] = useState()

    const toggleViolence = () => {
        setViolence(!violence)
    }

    if(loading){
        return (
            <div className='containerLoaderAl'>
                <Loader />
            </div>
        )
    }

    return(
        <div className='containerFormUser'>
            <div className='containerFormLG'>
                <h1>
                    Agregar Puntuación
                </h1>
                <p>
                    Bienvenido administrador, ingresa en este formulario los 
                    datos relacionados al puntaje que va a ser ingresado en el
                    examen, muchas gracias por visitar esta sección.
                </p>

                <br />
                <br />

                <form onSubmit={onSubmit} className='formTecnic1'>
                    <input type='number'
                        {...register('minScore',{
                            required : true,
                            valueAsNumber : true,
                            pattern : {
                                value : /^(0|[1-9]\d*)(\.\d+)?$/ 
                            }
                        })}
                        placeholder='Puntaje Minímo'
                    />
                    {
                        errors.minScore && <Alert className='alertForm' severity='error'>El puntaje minímo debe de ser un valor numerico.</Alert>
                    }

                    <br />
                    <br />

                    <input type="number"
                        {...register('maxScore',{
                            required : true,
                            valueAsNumber : true,
                            pattern : {
                                value : /^(0|[1-9]\d*)(\.\d+)?$/ 
                            }
                        })}
                        placeholder='Puntaje Maximo'
                    />
                    {
                        errors.maxScore && <Alert className='alertForm' severity='error'>El puntaje maximo es un valor requerido y debe ser un valor numerico.</Alert>
                    }
                    
                    <br />
                    <br />

                    
                    <div className='containerButtonSubmit'>
                        <Button className='confirmButtonLG' onClick={() => toggleViolence()}>
                            {violence 
                            ?
                            <span>Cerrar</span>   
                            :
                            <span>Agregar Tipo de Violencia</span>   
                            }   
                        </Button>
                        <br />
                        <br />
                        {
                            violence && <input 
                                            type="text" 
                                            {...register('violenceType',{
                                                required : false,
                                                minLength : 5
                                            })}
                                            placeholder='Tipo de violencia'
                                        />
                        } 
                                               
                    </div>                    
                    <br />
                    {
                        errors.violenceType && <Alert severity='error' className='alertForm'>El tipo de violencia debe de tener almenos 5 caracteres.</Alert>
                    }
                    
                    <textarea
                        {...register('messageScore', {
                            required : true,
                            minLength : 5
                        })}
                        placeholder = 'Mensaje del Puntaje'
                    ></textarea>
                    {
                        errors.messageScore && <Alert className='alertForm' severity='error'>El mensaje del puntaje debe de tener almenos 5 caracteres.</Alert>
                    }

                    <br />
                    <br />                                 

                     <div className='containerButtonSubmit'>
                        <Button type='submit' className='confirmButtonLG' variant='contained'>
                            Agregar Puntaje
                        </Button>
                     </div>

                     <div className='containerButtonGoLG'>
                        <Link className='goBackContainer' to={`/manageScore/${params.id}`}>
                            Volver Atrás
                        </Link>
                     </div>

                </form>

            </div>
        </div>
    )
}

export default FormScore