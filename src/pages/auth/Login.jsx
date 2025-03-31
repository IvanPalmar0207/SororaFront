//React-hook-forms
import {useForm} from 'react-hook-form'
//React-router-dom
import { Link } from 'react-router-dom'
//Styles
import '../../styles/auth/login.css'
//Images
import sororaLogo from '../../assets/index/sororaLogo.png'
import iconL from '../../assets/login/iconL.svg'
//Icons
import { TfiEmail } from "react-icons/tfi";
import { IoLockClosedOutline } from "react-icons/io5";
//Material UI
import {Alert} from '@mui/material'
//User Provider
import { UseUser } from '../../context/userContext'
function Login(){

    //React-hook-form
    const {register, handleSubmit, formState : {errors}} = useForm()            

    //User Context
    const {loginUserApi, errorUser} = UseUser()    

    //ONSubmit function
    const onSubmit = handleSubmit(async (values) => {                
        try{            
            await loginUserApi({
                email : values.email,
                password : values.password
            },values.rememberMe)          
        }catch(e){
            alert(e.message)
        }
    })    

    return(
        <section className='sectionLogin'>
            <div className='containerLogo'>
                <img src={sororaLogo} alt="logoSor" />
            </div>

            <form onSubmit={onSubmit} className='formLR'>

                <div className='iconForm'>
                    <img src={iconL} alt="iconL" />
                </div>

                {
                    errorUser.map((error,i) => {
                        return(
                            <Alert severity='error' className='alertForm' key={i}>{error}</Alert>
                        )
                    })
                }

                <div className="containerInput">
                    <TfiEmail className="iconInput" />
                    <input 
                        type="email"
                        {...register('email',{
                            required: true,
                            pattern : {
                                value : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message : 'Por favor ingresa un correo valido'
                            },
                            minLength : 10
                        })}   
                        placeholder="Correo Electrónico"                         
                    />
                </div>
                {
                    errors.email && <Alert severity='error' className="alertForm">Ingresa un correo valido.</Alert>
                }

                <div className='containerInput'>                    
                    <IoLockClosedOutline className='iconInput'/>
                    <input 
                        type="password" 
                        {...register('password',{
                            required : true,
                            minLength : 8
                        })}
                        placeholder='Contraseña'
                    />                    
                </div>

                {
                    errors.password && <Alert severity='error' className='alertForm'>La contraseña debe de tener almenos 8 caracteres.</Alert>
                }                            
                    
                <button type="submit" className='buttonForm'>
                    INICIAR SESIÓN
                </button>
                

                <div className='containerCheckbox'>
                    <div className='containerC'>
                        <input 
                            type="checkbox"
                            {...register('rememberMe')}                        
                        />
                        <h4>Recordarme</h4>
                    </div>
                    <div>
                        <Link className='forgotPassword' to={'/forgotPassword'}>
                            Olvidaste la contraseña?
                        </Link>
                    </div>
                </div>

            </form>

            <Link to = '/register' className='linkBack'>
                Registrarme
            </Link>

        </section>
    )
}

export default Login