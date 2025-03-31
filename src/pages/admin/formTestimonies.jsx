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
    const [typeVideo, setTypeVideo] = useState('')
    const videoRef = useRef(null)

    const uploadVideo = (e) => {
        const file = e.target.files
        setVideo(file)

        const fileVideo = e.target.files[0]
        const fileType = fileVideo.type.split('/')[0]
        setTypeVideo(fileType)

        const reader = new FileReader()

        reader.onload = function(e) {
            if(fileType === 'video'){
                videoRef.current.src = e.target.result
            }
        }

        reader.readAsDataURL(fileVideo)
    }

    //OnSubmit Method
    const onSubmit = handleSubmit(async(values) => {
        const formValues = new FormData()

        formValues.append('authorTest', values.authorTest)
        formValues.append('descriptionTest', values.descriptionTest)
        formValues.append('articleTest', values.articleTest)
        formValues.append('catTest', values.catTest)

        for(let i = 0; video.length > i; i++){
            formValues.append('videoTest', video[i])
        }

        if(params.id){
            try{    
                Swal.fire({
                    icon : 'success',
                    title : 'Testimonio Actualizado',
                    text : 'El testimonio ha sido actualizado correctamente',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente'
                })
                updateTestApi(params.id, formValues)
                navigate('/manageTest')
            }catch(e){
                Swal.fire({
                    icon : 'info',
                    title : 'Error Actualizando',
                    text : 'Hubo un error actualizando el testimonio, intenta nuevamente.',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente'
                })
            }
        }else{
            try{    
                Swal.fire({
                    icon : 'success',
                    title : 'Testimonio Agregado',
                    text : 'El testimonio ha sido agregado correctamente',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente'
                })
                addTestApi(formValues)
                navigate('/manageTest')
            }catch(e){
                Swal.fire({
                    icon : 'info',
                    title : 'Error Agregando',
                    text : 'Hubo un error agregando el testimonio, intenta nuevamente.',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente'
                })
            }            
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
                        errors.authorTest && <Alert severity='error'>El nombre del autor debe de tener almenos 5 caracteres.</Alert>
                    }

                    <br />                    
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
                    <br />                    

                    <textarea 
                        {...register('descriptionTest',{
                            required : true,
                            minLength : 10
                        })}
                        placeholder='Descripción del Testimonio'
                    ></textarea>
                    {
                        errors.descriptionTest && <Alert severity='error'>La descripción del testimonio debe de tener almenos 10 caracteres.</Alert>
                    }

                    <br />
                    <br />                    

                    <div className='containerImageContent'>
                        <label htmlFor="videoTest" className='imageTitleLabel'>
                            Video - Testimonio
                        </label>
                        <div className='containerImageMedia'>
                            {
                                typeVideo != 'video' && (
                                    <img src={addImage} alt="addImage" className='imageMedia'/>
                                )
                            }
                            {
                                typeVideo === 'video' && (
                                    <video 
                                        ref = {videoRef}
                                        loop = {true}
                                        autoPlay = {true}
                                        controls = {true}
                                        muted = {true}
                                        className='videoMedia'
                                    ></video>
                                )                                                                                            
                            }
                        </div>
                        <input 
                            type="file"
                            {...register('videoTest',{
                                required : true
                            })}
                            onChange={uploadVideo}
                            id='videoTest'
                            className='inputImage'
                        />
                        <br />
                        <br />
                        <div className='containerAddImage'>
                            <label htmlFor="videoTest" className='addImageLabel'>
                                Agregar Video
                            </label>
                        </div>
                    </div>
                    {
                        errors.videoTest && <Alert severity='error'>El video es un campo obligatorio.</Alert>
                    }

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
                        errors.articleTest && <Alert severity='error'>El articulo debe de ser una url con minimo 10 caracteres.</Alert>
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