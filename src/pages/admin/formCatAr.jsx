//Styles
import '../../styles/admin/formManage.css'
//React-hooks
import { useEffect, useState } from 'react'
//React-hook-forms
import { useForm } from 'react-hook-form'
//React-router-dom
import { Form, Link, useParams } from 'react-router-dom'
//CatContext
import { useCat } from '../../context/catContext'
//Images
import addImage from '../../assets/form/plusAddImage.png'
//Material Ui
import { Alert, Button } from '@mui/material'

function FormCatAr(){

    //React-router    
    const params = useParams()

    //UseForm
    const {register, handleSubmit, setValue, formState : {errors}} = useForm()

    //CatMethods
    const {addCatApi, updateCatApi, getOneCatApi} = useCat()

    //States
    const [image, setImage] = useState([])

    //OnSubmit Method
    const onSubmit = handleSubmit(async(values) => {

        const formData = new FormData()

        formData.append('nameCat', values.nameCat)
        formData.append('descriptionCat', values.descriptionCat)

        for(let i = 0; i < image.length; i++){
            formData.append('imageCat', image[i])
        }

        if(params.id){            
            updateCatApi(params.id, formData)                
        }else{            
            addCatApi(formData)                                                  
        }
    })

    //Load Cat Data
    useEffect(() => {
        async function loadData() {
            if(params.id){
                const res = await getOneCatApi(params.id)

                setValue('nameCat', res.nameCat)
                setValue('descriptionCat', res.descriptionCat)

                const titleForm = document.getElementById('titleForm')
                titleForm.innerHTML = 'Actualizar Categoria RA'

                const textForm = document.getElementById('textForm')
                textForm.innerHTML = 'Bienvenido administrador, ingresa los datos de la ruta de atención que va a ser actualizada, gracias.'

                const buttonForm = document.getElementById('buttonForm')
                buttonForm.innerHTML = 'Actualizar RA'
            }
        }

        loadData()
    },[])

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
                    Nueva Ruta de Atención
                </h1>
                <p id='textForm'>
                    Bienvenido administrador, ingresa los datos de la nueva  
                    ruta de atención que hara parte del sistema de información,
                    muchas gracias.
                </p>
                
                <br />
                <br />

                <form onSubmit={onSubmit} className='formTecnic1'>
                    <input type="text"
                    {...register('nameCat', {
                        required : true,
                        minLength : 5
                    })}
                    placeholder='Nombre de la ruta de atención'
                    autoFocus = {true}
                    />
                    {
                        errors.nameCat && <Alert severity='error'>El nombre de la categoria debe de tener almenos 5 caracteres.</Alert>
                    }

                    <br />
                    <br />

                    <textarea 
                    {...register('descriptionCat',{
                        required : true,
                        minLength : 10
                    })}
                    placeholder='Descripción de la ruta de atención'
                    required = {true}
                    >                        
                    </textarea>
                    {
                        errors.descriptionCat && <Alert severity='error' className='alertForm'>La descripción de la categoria debe de tener almenos 10 caracteres.</Alert>
                    }
                    
                    <br />
                    
                    <div className='containerImageContent'>
                        <label htmlFor="imageCat" className='imageTitleLabel'>
                            Imagen - Ruta de atención:
                        </label>
                        <div className='containerImageMedia'>
                            <img src={addImage} alt="catImage" className='imageMedia' id='img'/>
                        </div>
                        <input type="file"
                        {...register('imageCat',{
                            required : true
                        })}
                        multiple = {false}
                        onChange={uploadImage}
                        id = 'imageCat'
                        className='inputImage'
                        accept='image/png,image/jpeg,image/jpg'
                        />
                        <br />
                        <br />
                        <div className='containerAddImage'>
                            <label htmlFor="imageCat" className='addImageLabel'>
                                Agregar Imagen
                            </label>
                        </div>
                    </div>
                    {
                        errors.imageCat && <Alert className='alertForm' severity='error'>La imagen de la ruta de atención es obligatoria.</Alert>
                    }

                    <div className='containerButtonSubmit'>
                        <Button id='buttonForm' variant='contained' type='submit' className='confirmButtonLG'>
                            Añadir RA
                        </Button>
                    </div>

                    <div className='containerButtonGoLG'>
                        <Link to={'/manageCat'} className='goBackContainer'>
                            Volver Atrás
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FormCatAr