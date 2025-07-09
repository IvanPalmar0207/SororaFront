//Styles
import '../../styles/admin/formManage.css'
//React-hooks
import { useEffect, useRef, useState } from 'react'
//React-router-dom
import { Link, useParams, useNavigate } from 'react-router-dom'
//TestContext
import { useTestimonie } from '../../context/testContext'
//SweetAlert
import Swal from 'sweetalert2'
//Images
import addImage from '../../assets/form/plusAddImage.png'
//MaterialUI
import { Alert, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
function FormTestimonies(){

    //React-router-dom
    const navigate = useNavigate()
    
    const params = useParams()

    //UseForm
    const {register, formState:{errors}, setValue, handleSubmit} = useForm()

    //Testimonie Methods
    const {getOneTestApi, addTestApi, updateTestApi, catTestUserApi, catTest} = useTestimonie()

    useEffect(() => {
        catTestUserApi()
    },[catTest])


    //UploadImage
    const [video, setVideo] = useState([])    

    //OnSubmit Method
    const onSubmit = handleSubmit(async(values) => {
        const formValues = new FormData()

        formValues.append('authorTest', values.authorTest)
        formValues.append('descriptionTest', values.descriptionTest)
        formValues.append('articleTest', values.articleTest)
        formValues.append('catTest', values.catTest)        
        formValues.append('videoTest', values.videoTest)        

        if(params.id){                            
            updateTestApi(params.id, formValues)                                     
        }else{            
            addTestApi(formValues)                                                        
        }

    })

    //Load Data Update
    useEffect(() => {
        async function loadData(){
            if(params.id){
                const res = await getOneTestApi(params.id)

                setValue('authorTest', res.authorTest)
                setValue('descriptionTest', res.descriptionTest)
                setValue('articleTest', res.articleTest)
                setValue('videoTest', res.videoTest)

                const titleForm = document.getElementById('titleForm')
                titleForm.innerHTML = 'Actualizar Testimonio'

                const textForm = document.getElementById('textForm')
                textForm.innerHTML = 'Bienvenido administrador, ingresa la información a actualizar del testimonio.'

                const buttonForm = document.getElementById('buttonForm')
                buttonForm.innerHTML = 'Actualizar Testimonio'
            }
        }
        loadData()
    },[])

    return(
        <div className='containerFormUser'>
            <div className='containerFormLG'>
                <h1 id='titleForm'>
                    Nuevo Testimonio
                </h1>
                <p id='textForm'>
                    Bienvenido administrador, ingresa los datos del nuevo testimonio.
                </p>

                <br />
                <br />

                <form onSubmit={onSubmit} className='formTecnic1'>

                    <input 
                        type="text" 
                        {...register('authorTest',{
                            required : true,
                            minLength : 5
                        })}
                        autoFocus = {true}
                        placeholder='Author del Testimonio'
                    />
                    {
                        errors.authorTest && <Alert className='alertForm' severity='error'>El nombre del autor debe de tener almenos 5 caracteres.</Alert>
                    }
                                      
                    <br />
                    <br />                    

                    <label htmlFor="catTest" className='selectLabel'>
                    Categoría del testimonio:
                    </label>
                    <select {...register('catTest',{required : true})}>
                        {
                            catTest.map(cat => {
                                return(
                                    <option value={cat.id}>{cat.categoryTest}</option>
                                )
                            })
                        }
                    </select>
                    
                    <br />
                    <br />                    

                    <textarea 
                        {...register('descriptionTest',{
                            required : true,
                            minLength : 10
                        })}
                        placeholder='Descripción del Testimonio'
                    ></textarea>
                    {
                        errors.descriptionTest && <Alert className='alertForm' severity='error'>La descripción del testimonio debe de tener almenos 10 caracteres.</Alert>
                    }

                    <br />
                    <br />                    

                    <textarea 
                        {...register('videoTest',{
                            required : true,
                            minLength : 5,
                            pattern : {
                                value : /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|vimeo\.com)\/(watch\?v=)?([a-zA-Z0-9_-]+)(\S+)?$/
                            } 
                        })}
                        placeholder='Link del video(Vimeo o Youtube)'
                    >
                    </textarea>
                    {
                        errors.videoTest && <Alert className='alertForm' severity='error'>El link del video debe de ser de youtube o vimeo.</Alert>
                    }
                    
                    <br />
                    <br />                    

                    <input 
                        type="url"
                        {...register('articleTest',{
                            required : true,
                            minLength : 10
                        })}
                        placeholder='Articulo del Testimonio'
                    />
                    {
                        errors.articleTest && <Alert className='alertForm' severity='error'>El articulo debe de ser una url con minimo 10 caracteres.</Alert>
                    }

                    <br />
                    <br />
                    <br />

                    <div className='containerButtonSubmit'>
                        <Button id='buttonForm' type='submit' className='confirmButtonLG' variant='contained'>
                            Añadir Testimonio
                        </Button>
                    </div>

                    <div className='containerButtonGoLG'>
                        <Link to={'/manageTest'} className='goBackContainer'>
                            Volver Atrás
                        </Link>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default FormTestimonies