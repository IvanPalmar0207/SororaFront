//Styles
import '../../styles/admin/formManage.css'
//React-hooks
import { useEffect } from 'react'
//React-hook-forms
import { useForm } from 'react-hook-form'
//React-router-dom
import { Link, useParams, useNavigate } from 'react-router-dom'
//CatContext
import { useCat } from '../../context/catContext'
//Sweetalert
import Swal from 'sweetalert2'
//Material Ui
import { Alert, Button } from '@mui/material'

function FormCatAr(){

    //React-router
    const navigate = useNavigate()

    const params = useParams()

    //UseForm
    const {register, handleSubmit, setValue, formState : {errors}} = useForm()

    //CatMethods
    const {addCatApi, updateCatApi, getOneCatApi} = useCat()

    //OnSubmit Method
    const onSubmit = handleSubmit(async(values) => {
        if(params.id){
            try{
                    Swal.fire({
                        icon : 'success',
                        title : 'Categoria Actualizada',
                        text : 'La categoria ha sido actualizada correctamente.',
                        confirmButtonColor : '#3ed634',
                        confirmButtonText : 'Siguiente',                        
                    })
                    updateCatApi(params.id, values)
                    navigate('/manageCat')
            }catch(e){
                Swal.fire({
                    icon : 'info',
                    title : 'Error Actualizando',
                    text : 'Hubo un error actualizando la categoria.',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente',                        
                })
            }
        }else{
            try{
                Swal.fire({
                    icon : 'success',
                    title : 'Categoria Agregada',
                    text : 'La categoria ha sido agregada correctamente.',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente',                        
                })
                addCatApi(values)
                navigate('/manageCat')
            }catch(e){
                Swal.fire({
                    icon : 'info',
                    title : 'Error Agregando',
                    text : 'Hubo un error agregando la categoria.',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente',                        
                })
            }
        }
    })

    //Load Cat Data
    useEffect(() => {
        async function loadData() {
            if(params.id){
                const res = await getOneCatApi(params.id)

                setValue('titleCat', res.titleCat)

                const titleForm = document.getElementById('titleForm')
                titleForm.innerHTML = 'Actualizar Categoria RA'

                const textForm = document.getElementById('textForm')
                textForm.innerHTML = 'Bienvenido administrador, ingresa los datos de la categoria que va a ser actualizada, gracias.'

                const buttonForm = document.getElementById('buttonForm')
                buttonForm.innerHTML = 'Actualizar Categoria'
            }
        }

        loadData()
    },[])

    return(
        <div className='containerFormUser'>
            <div className='containerFormLG'>
                <h1 id='titleForm'>
                    Nueva Categoria AR
                </h1>
                <p id='textForm'>
                    Bienvenido administrador, ingresa los datos de la nueva categoria 
                    de las rutas de atención y redes de confianza, muchas gracias.
                </p>
                
                <br />
                <br />

                <form onSubmit={onSubmit} className='formTecnic1'>
                    <input type="text"
                    {...register('titleCat', {
                        required : true,
                        minLength : 5
                    })}
                    placeholder='Nombre de la categoria'
                    autoFocus = {true}
                    />
                    {
                        errors.titleCat && <Alert severity='error'>El nombre de la categoria debe de tener almenos 5 caracteres.</Alert>
                    }

                    <br />
                    <br />
                    <br />

                    <div className='containerButtonSubmit'>
                        <Button id='buttonForm' variant='contained' type='submit' className='confirmButtonLG'>
                            Añadir Categoria
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