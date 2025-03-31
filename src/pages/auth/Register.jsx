//React-hook-forms
import { useForm } from "react-hook-form"
//React-router-dom
import { Link, useNavigate } from "react-router-dom"
//Styles
import '../../styles/auth/login.css'
//images
import sororaLogo from '../../assets/index/sororaLogo.png'
import iconR from '../../assets/register/iconR.svg'
//Icons
import { TfiEmail } from "react-icons/tfi";
import { IoLockClosedOutline } from "react-icons/io5"
//Material Ui
import { Alert } from "@mui/material"
//User Provider
import { UseUser } from "../../context/userContext"
//SweetAlert
import Swal from "sweetalert2"

function Register(){

    //Navigate
    const navigate = useNavigate()

    //React-hook-forms
    const {register, handleSubmit, formState : {errors}} = useForm()

    //User Context
    const {registerUserApi, errorUser} = UseUser()    

    //OnSubmit Function
    const onSubmit = handleSubmit(async(values) => {        
        try{
            registerUserApi({                
                email : values.email, 
                password : values.password}
            )                             
        }catch(e){
            alert(e.message)
        }
    })    

    return(
        <section className="sectionLogin">
            <div className="containerLogo">
                <img src={sororaLogo} alt="logo" />
            </div>

            <form onSubmit={onSubmit} className="formLR">
                
                <div className="iconForm">
                    <img src={iconR} alt="iconR" />
                </div>
                
                {
                    errorUser.map((error, i) => {
                        return(
                            <Alert severity='error' className="alertForm" key={i}>{error}</Alert>
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

                <div className="containerInput">
                    <IoLockClosedOutline className="iconInput" />
                    <input 
                        type="password"
                        {...register('password',{
                            required: true,
                            minLength : 8
                        })}
                        placeholder="Contraseña"
                    />
                </div>
                {
                    errors.password && <Alert severity='error' className="alertForm">La contraseña debe de tener almenos 8 caracteres.</Alert>
                }

                <button type='submit' className="buttonForm">
                    REGISTRARME
                </button>                            

            </form>

            <Link to='/login' className="linkBR">
                Iniciar Sesión
            </Link>                        

        </section>
    )
}

export default Register