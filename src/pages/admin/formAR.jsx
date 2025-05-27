//Styles
import '../../styles/admin/formManage.css'
//React-hooks
import { useEffect, useState } from 'react'
//React-hook-forms
import { useForm } from 'react-hook-form'
//React-router-dom
import { Link, useParams } from 'react-router-dom'
//ArContext
import { useAR } from '../../context/arContext'
//CatContext
import { useCat } from '../../context/catContext'
//Material UI
import { Alert, Button } from '@mui/material'
//Images
import addImage from '../../assets/form/plusAddImage.png'
function FormAR(){

    //States
    const [image, setImage] = useState([])

    //React-router    
    const params = useParams()

    //UseForm
    const {register, handleSubmit, formState : {errors}, setValue} = useForm()

    //aRMethods
    const {addArApi, updateArApi, getOneArApi} = useAR()

    //OnSubmit Methods
    const onSubmit = handleSubmit(async(values) => {
            const formValues = new FormData()

            formValues.append('nameAttention', values.nameAttention)            
            formValues.append('descriptionAttention', values.descriptionAttention)

            for(let i = 0; i < image.length; i++){
                formValues.append('imageAttention', image[0])
            }            

            if(params.id){                
                formValues.append('nameCat', params.idCat)
                updateArApi(params.id, formValues, params.idCat)                                    
            }else{                
                formValues.append('nameCat', params.idCat)
                addArApi(formValues, params.idCat)                                                                    
            }
    })

    useEffect(() => {
        async function loadData() {
            if(params.id){
                const res = await getOneArApi(params.id, params.idCat)

                setValue('nameAttention', res.nameAttention)
                setValue('descriptionAttention', res.descriptionAttention)                

                const titleForm = document.getElementById('titleForm')
                titleForm.innerHTML = 'Actualizar Ruta de Atención'

                const textForm = document.getElementById('textForm')
                textForm.innerHTML = 'Bienvenido administrador, ingresa los nuevos datos de la sección a actualizar, gracias.'

                const buttonForm = document.getElementById('buttonForm')
                buttonForm.innerHTML = 'Actualizar Sección'

            }
        }
        loadData()
    },[])

    //CatData
    const {allCatUserApi, catListUser} = useCat()

    useEffect(() => {
        allCatUserApi()
    },[catListUser])

    //Image Upload

    const uploadImage = (e) => {
        const file = e.target.files
        setImage(file)

        const fileImage = e.target.files[0]

        const imageNew = document.getElementById('img')

        const reader = new FileReader()

        reader.onload = function(e){
            imageNew.src = e.target.result
        }

        reader.readAsDataURL(fileImage)

    }

    return(
        <div className='containerFormUser'>
            <div className='containerFormLG'>
                <h1 id='titleForm'>
                    Nueva Sección de RA
                </h1>
                <p id='textForm'>
                    Bienvenido administrador, ingresa los datos de la nueva seccion 
                    de la ruta de atención que elegiste previamente.
                </p>

                <br />
                <br />

                <form className='formTecnic1' onSubmit={onSubmit}>
                                                            
                    <input type="text"
                        {...register('nameAttention',{
                            required : true,
                            minLength : 5
                        })}
                        placeholder='Nombre de la sección'
                    />
                    {
                        errors.nameAttention && <Alert severity='error' className='alertForm'>El nombre de la sección debe de tener almenos 5 caracteres.</Alert>
                    }

                    <br />
                    <br />

                    <textarea
                        {...register('descriptionAttention',{
                            required : true,
                            minLength : 10
                        })}
                        placeholder = 'Descripción de la sección'
                    >                        
                    </textarea>
                    {
                        errors.descriptionAttention && <Alert severity='error' className='alertForm'>La descripción de la sección debe de tener almenos 10 caracteres.</Alert>
                    }

                    <br />
                    <br />

                    <div className='containerImageContent'>
                        <label htmlFor="imageAttention" className='imageTitleLabel'>
                            Imagen - Sección:
                        </label>
                        <div className='containerImageMedia'>
                            <img src={addImage} alt="imageSection" id='img'/>
                        </div>
                        <input type="file"
                            {...register('imageAttention',{
                                required : true
                            })}
                            multiple = {false}
                            onChange = {uploadImage}
                            id = 'imageAttention'
                            className='inputImage'
                            accept='image/png,image/jpeg,image/jpg'
                        />
                        <br />
                        <br />
                        <div className='containerAddImage'>
                            <label htmlFor="imageAttention" className='addImageLabel'>
                                Agregar Imagen
                            </label>
                        </div>
                    </div>
                    {
                        errors.imageAttention && <Alert className='alertForm' severity='error'>La imagen de la sección es obligatoria.</Alert>
                    }

                    <br />                    

                    <div className='containerButtonSubmit'>
                        <Button id='buttonForm' type='submit' variant='contained' className='confirmButtonLG'>
                            Añadir Sección
                        </Button>
                    </div>

                    <div className='containerButtonGoLG'>
                        <Link to={`/manageAr/${params.idCat}`} className='goBackContainer'>
                            Volver Atrás
                        </Link>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default FormAR