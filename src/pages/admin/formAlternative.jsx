//Styles
import '../../styles/admin/formManage.css'
//React-hooks
import { useEffect } from 'react'
//React-hook-form
import { useForm } from 'react-hook-form'
//React-router-dom
import { Link, useParams } from 'react-router-dom'
//ProviderAlternative
import { useAlternative } from '../../context/alternativeContext'
//Material UI
import { Alert, Button } from '@mui/material'
function FormAlternative(){

    //React-router    
    const params = useParams()

    //UseForm
    const {register, handleSubmit, setValue, formState : {errors}} = useForm()

    //AltMethods
    const {addAlternativeApi, updateAlternativeApi, getOneAlternativeApi} = useAlternative()

    //OnSubmit
    const onSubmit = handleSubmit(async(values) => {
        const formValues = new FormData()
        
        formValues.append('titleAlternative', values.titleAlternative)
        formValues.append('descriptionAlternative', values.descriptionAlternative)

        if(params.id){            
            updateAlternativeApi(params.id, formValues)                            
        }else{            
            addAlternativeApi(formValues)                                                        
        }
    })

    useEffect(() => {
        async function loadData() {
            if(params.id){
                const res = await getOneAlternativeApi(params.id)
                setValue('titleAlternative', res.titleAlternative)
                setValue('descriptionAlternative', res.descriptionAlternative)

                const titleForm = document.getElementById('titleForm')
                titleForm.innerHTML = 'Actualizar Acción Alternativa'

                const textForm = document.getElementById('textForm')
                textForm.innerHTML = 'Bienvenido administrador, ingresa los datos nuevos de la acción alternativa a actualizar.'

                const buttonForm = document.getElementById('buttonForm')
                buttonForm.innerHTML = 'Actualizar Acción Alternativa'
            }
        }
        loadData()
    },[])

    return(
        <div className='containerFormUser'>
            <div className='containerFormLG'>
                <h1 id='titleForm'>
                    Agregar Acción Alternativa
                </h1>
                <p id='textForm'>
                    Bienvenido administrador, ingresa los datos de la nueva
                    acción alternativa que hara parte del sistema, gracias.
                </p>

                <br />
                <br />

                <form className='formTecnic1' onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        {...register('titleAlternative',{
                            required : true,
                            minLength : 5
                        })}
                        placeholder = 'Nombre de la Acción Alternativa'
                    />
                    {
                        errors.titleAlternative && <Alert severity='error' className='alertForm'>El nombre de la acción alternativa debe de tener almenos 5 caracteres.</Alert>
                    }

                    <br />
                    <br />

                    <textarea
                        {...register('descriptionAlternative',{
                            required : true,
                            minLength : 10
                        })}
                        placeholder='Descripción de la acción alternativa'
                    >
                    </textarea>
                    {
                        errors.descriptionAlternative && <Alert severity='error'>La descripción de la acción alternativa debe de tener almenos 10 caracteres.</Alert>
                    }

                    <br />
                    <br />

                    <div className='containerButtonSubmit'>
                        <Button id='buttonForm' type='submit' className='confirmButtonLG' variant='contained'>
                            Agregar Acción
                        </Button>
                    </div>

                    <div className='containerButtonGoLG'>
                        <Link className='goBackContainer' to={'/manageAlternative'}>
                            Volver Atrás
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormAlternative