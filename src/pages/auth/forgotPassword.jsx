//UseForm
import { useForm } from "react-hook-form"
//React-router-dom
import { Link } from "react-router-dom"
//Styles
import '../../styles/auth/login.css'
//Images
import sororaLogo from '../../assets/index/sororaLogo.png'
import iconL from '../../assets/login/iconL.svg'
//Icons
import { TfiEmail } from "react-icons/tfi"
//UserProvider
import { UseUser } from "../../context/userContext"
//Material UI
import { Alert } from "@mui/material"

function ForgotPassword(){

    const {register, handleSubmit, formState : {errors}} = useForm()

    const {forgot, forgotPasswordApi} = UseUser()

    const onSubmit = handleSubmit(async(values) => {
        try{
            forgotPasswordApi(values)
        }catch(e){
            alert(e)
        }
    })

    return(
        <section className="sectionLogin">
            <div className="containerLogo">
                <img src={sororaLogo} alt="sororaLogo" />
            </div>

            <form onSubmit={onSubmit} className="formLR">

                <div className='iconForm'>
                    <img src={iconL} alt="iconL" />
                </div>

                {
                    forgot.map((error, i)=> {
                        return(
                            <Alert className="alertForm" severity='error'>{error}</Alert>
                        )
                    }
)                }

                <div className="containerInput">
                    <TfiEmail className="iconInput"/>
                    <input type="email"
                        {...register('email',{
                            required : true,
                            pattern : {
                                value : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message : 'Por favor ingresa un correo valido'
                            },
                            minLength : 10
                        })}
                        placeholder="Ingresa tu correo electronico"
                    />
                </div>
                {
                    errors.email && <Alert severity='error' className="alertForm">Ingresa un Correo valido</Alert>
                }                

                <button type='submit' className="buttonForm">
                    Enviar
                </button>

            </form>

            <Link to={'/login'} className="linkBack">
                Volver al login
            </Link>

        </section>
    )
}

export default ForgotPassword