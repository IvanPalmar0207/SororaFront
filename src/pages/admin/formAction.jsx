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
function FormAction(){

    //Router-dom
    const params = useParams()
    console.log(params.id)

    //UseForm
    const {register, handleSubmit, formState : {errors}} = useForm()

    //Action Methods
    const {addActionApi} = useExam()

    //OnSubmit Method
    const onSubmit = handleSubmit(async(values) => {
        const formValues = new FormData()

        if(values.linkAction === 'tips'){
            formValues.append('linkAction', values.linkAction)
            formValues.append('nameAction', 'Tips')
        }else if(values.linkAction === 'alternatives'){
            formValues.append('linkAction', values.linkAction)
            formValues.append('nameAction', 'Alternativas')            
        }else if(values.linkAction === 'attention'){
            formValues.append('linkAction', values.linkAction)
            formValues.append('nameAction', 'Rutas de Atención')                        
        }else if(values.linkAction === 'connectNet'){
            formValues.append('linkAction', values.linkAction)
            formValues.append('nameAction', 'Red de Apoyo')
        }else if(values.linkAction === 'trustNet'){
            formValues.append('linkAction', values.linkAction)
            formValues.append('nameAction', 'Contactos de Emergencia')
        }else if(values.linkAction === 'alarmButton'){
            formValues.append('linkAction', 'trustNet')
            formValues.append('nameAction', 'Botón de Alarma')
        }

        formValues.append('idScore', params.id)

        addActionApi(params.id, formValues, params.id)

    })

    return(
        <div className='containerFormUser'>
            <div className='containerFormLG'>
                <h1>
                    Agregar Acción
                </h1>
                
                <p>
                   Bienvenido administrador, ingresa en este formulario los datos 
                   de las acciones de la pregunta que seleccionaste anteriormente,
                   muchas gracias por visitar esta sección. 
                </p>

                <form onSubmit={onSubmit} className='formTecnic1'>
                    <br />
                    <br />

                    <label htmlFor="linkAction" className='selectLabel'>
                        Acción del Puntaje
                    </label>
                    <select {...register('linkAction',{required:true})}>
                        <option value='tips'>Tips de relación saludable</option>
                        <option value="alternatives">Alternativas</option>
                        <option value="attention">Rutas de Atención</option>
                        <option value="connectNet">Red de Apoyo</option>
                        <option value="trustNet">Contactos de Emergencia</option>
                        <option value="alarmButton">Botón de Alarma</option>
                    </select>

                    <br />
                    <br />
                    <br />
                    
                    <div className='containerButtonSubmit'>
                        <Button type='submit' className='confirmButtonLG' variant='contained'>
                            Agregar Acción
                        </Button>
                    </div>

                    <div className='containerButtonGoLG'>
                        <Link className='goBackContainer' to = {`/manageAction/${params.id}`}>
                            Volver Atrás
                        </Link>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default FormAction