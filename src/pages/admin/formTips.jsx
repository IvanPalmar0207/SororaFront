//Styles
import '../../styles/admin/formManage.css'
//React-hooks
import { useState, useEffect } from 'react'
//React-hooks-form
import {useForm} from 'react-hook-form'
//React-router-dom
import { Link, useParams, useNavigate } from 'react-router-dom'
//TipContext
import { useTip } from '../../context/tipContext'
//Images
import addImage from '../../assets/form/plusAddImage.png'
//SweetAlert
import Swal from 'sweetalert2'
//Material Ui
import {Alert, Button} from '@mui/material'

function FormTips(){

    //Image State
    const [image, setImage] = useState([])

    //React-router-dom
    const navigate = useNavigate()

    const params = useParams()

    //UseForm
    const {handleSubmit, setValue, register, formState : {errors}} = useForm()

    //TipMethods
    const {updateTipApi, addTipApi, getOneTip} = useTip()

    //OnSubmit Function
    const onSubmit = handleSubmit(async(values) => {

        const formValues = new FormData()

        formValues.append('nameTip', values.nameTip)

        for(var i = 0; i < image.length; i ++){
            formValues.append('imageTip', image[i])
        }

        if(params.id){
            try{
                Swal.fire({
                    icon : 'success',
                    title : 'Tip Actualizado',
                    text : 'El tip ha sido actualizado correctamente',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente'
                })
                updateTipApi(params.id, formValues)
                navigate('/manageTips')
            }catch(err){
                Swal.fire({
                    icon : 'info',
                    title : 'Error Actualizando',
                    text : 'Hubo un error actualizando el tip, intenta nuevamente.',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente'
                })
            }
        }else{
            try{
                Swal.fire({
                    icon : 'success',
                    title : 'Tip Agregado',
                    text : 'El tip ha sido agregado correctamente',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente'
                })
                addTipApi(formValues)
                navigate('/manageTips')
            }catch(e){
                Swal.fire({
                    icon : 'info',
                    title : 'Error Agregando',
                    text : 'Hubo un error agregando el tip, intenta nuevamente.',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente'
                })
            }
        }

    })

    //Upload Image
    const uploadImage = (e) => {
        const file = e.target.files
        setImage(file)

        const fileImage = e.target.files[0]

        const imageNew = document.getElementById('img')

        const reader = new FileReader()

        reader.onload = function(e) {
            imageNew.src = e.target.result
        }

        reader.readAsDataURL(fileImage)
    }

    useEffect(() => {
        async function loadData() {
            if(params.id){
                const res = await getOneTip(params.id)

                setValue('nameTip', res.nameTip)

                const titleForm = document.getElementById('titleForm')
                titleForm.innerHTML = 'Actualizar Tip'

                const textForm = document.getElementById('textForm')
                textForm.innerHTML = 'Bienvenido administrador, ingresa los nuevos datos del tip'

                const buttonForm = document.getElementById('buttonForm')
                buttonForm.innerHTML = 'Actualizar Tip'

            }
        }

        loadData()
    },[])

    return(
        <div className='containerFormUser'>
            <div className='containerFormLG'>
                <h1 id='titleForm'>
                    Nuevo Tip
                </h1>
                <p id='textForm'>
                    Bienvenido administrador, ingresa los datos del nuevo tip.
                </p>

                <br />
                <br />

                <form className='formTecnic1' onSubmit={onSubmit}>
                    <input type="text" 
                    {...register('nameTip',{
                        required : true,
                        maxLength : 50,
                        minLength : 4
                    })}
                    placeholder='Nombre del tip'
                    autoFocus = {true}
                    />
                    {
                        errors.nameTip && <Alert severity='error'>El nombre del tip debe de tener más de 4 caracteres y menos de 50.</Alert>
                    }

                    <br />
                    <br />

                    <div className='containerImageContent'>
                        <label htmlFor="imageTip" className='imageTitleLabel'>
                            Tip - Imagen
                        </label>
                        <div className='containerImageMedia'>
                            <img src={addImage} className='imageMedia' alt="image" id='img'/>
                        </div>
                        <input type='file' 
                        {...register('imageTip',{
                            required : true
                        })}
                        multiple={false}
                        onChange={uploadImage}
                        id = 'imageTip'
                        className='inputImage'
                        />
                        <br />
                        <br />
                        <div className='containerAddImage'>
                            <label htmlFor="imageTip" className='addImageLabel'>
                                Agregar Imagen
                            </label>
                        </div>
                    </div>
                    {
                        errors.imageTip && <Alert severity='error'>La imagen es un campo obligatorio.</Alert>
                    }

                    <div className='containerButtonSubmit'>
                        <Button id='buttonForm' type='submit' variant='contained' className='confirmButtonLG'>
                            Añadir Tip
                        </Button>
                    </div>

                    <div className='containerButtonGoLG'>
                        <Link to={'/manageTips'} className='goBackContainer'>
                            Volver Atrás
                        </Link>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default FormTips