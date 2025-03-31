//Styles
import '../../styles/admin/formManage.css'
//React-hooks
import { useState, useEffect } from 'react'
//React-hook-forms
import { useForm } from 'react-hook-form'
//React-router-dom
import { Link, useParams, useNavigate } from 'react-router-dom'
//ArContext
import { useAR } from '../../context/arContext'
//CatContext
import { useCat } from '../../context/catContext'
//SweetAlert
import Swal from 'sweetalert2'
//Material UI
import { Alert, Button } from '@mui/material'

function FormAR(){

    //React-router
    const navigate = useNavigate()

    const params = useParams()

    //UseForm
    const {register, handleSubmit, formState : {errors}, setValue} = useForm()

    //aRMethods
    const {addArApi, updateArApi, getOneArApi} = useAR()

    //OnSubmit Methods
    const onSubmit = handleSubmit(async(values) => {
            const formValues = new FormData()

            formValues.append('titleCat', values.titleCat)
            formValues.append('whatsappAR', values.whatsappAR)
            formValues.append('phoneAR', values.phoneAR)
            formValues.append('locationAR', values.locationAR)

            if(params.id){
                try{
                    Swal.fire({
                        icon : 'success',
                        title : 'Ruta actualizada',
                        text : 'La ruta ha sido actualizada correctamente.',
                        confirmButtonColor : '#3ed634',
                        confirmButtonText : 'Siguiente',                        
                    })
                    updateArApi(params.id, formValues)
                    navigate('/manageAr')
                }catch(err){
                    Swal.fire({
                        icon : 'info',
                        title : 'Error Actualizando',
                        text : 'Hubo un error actualizando la ruta.',
                        confirmButtonColor : '#3ed634',
                        confirmButtonText : 'Siguiente',                        
                    })
                }
            }else{
                try{
                    Swal.fire({
                        icon : 'success',
                        title : 'Ruta agregada',
                        text : 'La ruta ha sido agregada correctamente.',
                        confirmButtonColor : '#3ed634',
                        confirmButtonText : 'Siguiente',                        
                    })
                    addArApi(formValues)
                    navigate('/manageAr')
                }catch(err){
                    Swal.fire({
                        icon : 'info',
                        title : 'Error Agregando',
                        text : 'Hubo un error agregando la ruta.',
                        confirmButtonColor : '#3ed634',
                        confirmButtonText : 'Siguiente',                        
                    })
                }
            }
    })

    useEffect(() => {
        async function loadData() {
            if(params.id){
                const res = await getOneArApi(params.id)

                setValue('titleAR', res.titleAR)
                setValue('whatsappAR', res.whatsappAR)
                setValue('phoneAR', res.phoneAR)
                setValue('locationAR', res.locationAR)

                const titleForm = document.getElementById('titleForm')
                titleForm.innerHTML = 'Actualizar Ruta de Atención'

                const textForm = document.getElementById('textForm')
                textForm.innerHTML = 'Bienvenido administrador, ingresa los nuevos datos de la ruta a actualizar, gracias.'

                const buttonForm = document.getElementById('buttonForm')
                buttonForm.innerHTML = 'Actualizar Ruta'

            }
        }
        loadData()
    },[])

    //CatData
    const {allCatUserApi, catListUser} = useCat()

    useEffect(() => {
        allCatUserApi()
    },[catListUser])

    return(
        <div className='containerFormUser'>
            <div className='containerFormLG'>
                <h1 id='titleForm'>
                    Nueva Ruta de Atención
                </h1>
                <p id='textForm'>
                    Bienvenido administrador, ingresa los datos de la nueva 
                    ruta de atención que hara parte del sistema.
                </p>

                <br />
                <br />

                <form className='formTecnic1' onSubmit={onSubmit}>

                    <div className='containerSelect'>
                        <label htmlFor="imageTip" className='selectLabel'>
                            Ingresa la categoria RA:
                        </label>
                        
                        <select
                        {...register('titleCat',{
                            required : true
                        })}
                        >
                            {
                                catListUser.map(cat => {
                                    return(
                                        <option value={cat.id}>{cat.titleCat}</option>
                                    )
                                })
                            }
                        </select>                        
                    </div>

                    <br />
                    <br />
                    
                    <input type="text"
                        {...register('whatsappAR',{
                            required : true,
                            minLength : 10
                        })}
                        placeholder='Whatsapp de la ruta'
                    />
                    {
                        errors.whatsappAR && <Alert severity='error' className='alertForm'>El whatsapp debe de tener almenos 10 caracteres.</Alert>
                    }

                    <br />
                    <br />

                    <input type="text"
                        {...register('phoneAR',{
                            required : true,
                            minLength : 10
                        })}
                        placeholder='Telefono de la ruta'
                    />
                    {
                        errors.phoneAR && <Alert severity='error' className='alertForm'>El telefono debe de tener almenos 10 caracteres.</Alert>
                    }

                    <br />
                    <br />

                    <input type="text"
                        {...register('locationAR',{
                            required : true,
                            minLength : 5
                        })}
                        placeholder='Ubicación de la ruta'
                    />
                    {
                        errors.locationAR && <Alert severity='error' className='alertForm'>La ubicación debe de tener almenos 5 caracteres.</Alert>
                    }

                    <br />
                    <br />
                    <br />

                    <div className='containerButtonSubmit'>
                        <Button id='buttonForm' type='submit' variant='contained' className='confirmButtonLG'>
                            Añadir Ruta
                        </Button>
                    </div>

                    <div className='containerButtonGoLG'>
                        <Link to={'/manageAr'} className='goBackContainer'>
                            Volver Atrás
                        </Link>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default FormAR