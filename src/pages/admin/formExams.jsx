//Styles
import '../../styles/admin/formManage.css'
//React-hooks
import { useEffect } from 'react'
//React-hook.form
import { useForm } from 'react-hook-form'
//React-route-dom
import { Link, useParams } from 'react-router-dom'
//UseExam
import { useExam } from '../../context/examContext'
//Material UI
import { Alert, Button } from '@mui/material'
function FormExams(){

    //React-router-dom    
    const params = useParams()

    //UseForm
    const {register, handleSubmit, setValue, formState : {errors}} = useForm()

    //Exam Methods
    const {getOneExamApi, addExamApi, updateExamApi} = useExam()

    //OnSubmit Methods
    const onSubmit = handleSubmit(async(values) => {
        const formValues = new FormData()

        formValues.append('titleExam', values.titleExam)

        if(params.id){                            
            updateExamApi(params.id, formValues)                                                    
        }else{                            
            addExamApi(formValues)                                                    
        }
    })

    //Load Data
    useEffect(() => {
        async function loadData(){
            if(params.id){
                const res = await getOneExamApi(params.id)
                setValue('titleExam', res.titleExam)

                const titleForm = document.getElementById('titleForm')
                titleForm.innerHTML = 'Actualizar Examen'

                const textForm = document.getElementById('textForm')
                textForm.innerHTML = 'Bienvenido administrador, ingresa el nuevo nombre del examen que vas a actualizar para poder realizar su gestión.'

                const buttonForm = document.getElementById('buttonForm')
                buttonForm.innerHTML = 'Actualizar Examen'
            }
        }
        loadData()
    },[])

    return(
        <section className='containerFormUser'>
            <div className='containerFormLG'>
                <h1 id='titleForm'>
                    Agregar Examen
                </h1>
                <p id='textForm'>
                    Bienvenido administrador, ingresa el nombre del examen
                    para que en el apartado de visualización de examenes puedas 
                    agregar las preguntas que correspondientes, gracias.
                </p>

                <br />
                <br />
                <br />

                <form className='formTecnic1' onSubmit={onSubmit}>
                    <textarea 
                        {...register('titleExam',{
                            required : true,
                            minLength : 5
                        })}
                        placeholder='Nombre del examen'
                    >                        
                    </textarea>
                    {
                        errors.titleExam && <Alert className='alertForm' severity='error'>El nombre del examen debe de tener almenos 5 caracteres.</Alert>
                    }

                    <br />
                    <br />
                    <br />

                    <div className='containerButtonSubmit'>
                        <Button type='submit' className='confirmButtonLG' variant='contained' id='buttonForm'>
                            Agregar Examen
                        </Button>
                    </div>

                    <div className='containerButtonGoLG'>
                        <Link className='goBackContainer' to={'/manageExams'}>
                            Volver Atrás
                        </Link>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default FormExams