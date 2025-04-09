//Styles
import '../../styles/admin/formManage.css'
//React-hooks
import { useEffect } from 'react'
//React-hook-forms
import { useForm } from 'react-hook-form'
//React-router-dom
import { Link, useParams } from 'react-router-dom'
//CatContext
import { useCat } from '../../context/catContext'
//Sweetalert
import Swal from 'sweetalert2'
//Material Ui
import { Alert, Button } from '@mui/material'

function FormCatAr(){

    //React-router    
    const params = useParams()

    //UseForm
    const {register, handleSubmit, setValue, formState : {errors}} = useForm()

    //CatMethods
    const {addCatApi, updateCatApi, getOneCatApi} = useCat()

    //OnSubmit Method
    const onSubmit = handleSubmit(async(values) => {
        if(params.id){            
            updateCatApi(params.id, values)                
        }else{            
            addCatApi(values)                                                  
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