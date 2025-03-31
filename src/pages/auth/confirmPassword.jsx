//UseForm
import { useForm } from "react-hook-form"
//React-router-dom
import { Link, useParams } from "react-router-dom"
//Styles
import '../../styles/auth/login.css'
//Images
import sororaLogo from '../../assets/index/sororaLogo.png'
import iconL from '../../assets/login/iconL.svg'
//Icons 
import { IoLockClosedOutline } from "react-icons/io5";
//UserProvider
import { UseUser } from "../../context/userContext"
//Material UI
import { Alert } from "@mui/material"
import { useState } from "react"

function ConfirmPassword(){

    const {register,handleSubmit, formState : {errors}} = useForm()

    const {confirmPass, confirmPassApi} = UseUser()

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const token = useParams()

    const onSubmit = handleSubmit(async(values) => {
        try{
            confirmPassApi(token.token,values)
        }catch(e){
            console.log(e)
        }
    })

    return(
        <section className="sectionLogin">
            <div className="containerLogo">
                <img src={sororaLogo} alt="sororaLogo" />
            </div>

            <form onSubmit={onSubmit} className="formLR">

                <div className="iconForm">
                    <img src={iconL} alt="iconL" />
                </div>

                {
                    confirmPass.map((error, i) => {
                        return(
                            <Alert severity='error' className="alertForm" key={i}>{error}</Alert>
                        )
                    })
                }

                {
                    password === confirmPassword 
                    ? <div></div> 
                    : <Alert severity='error' className="alertForm">La contraseña y su confirmación deben de ser iguales.</Alert>
                }

                <div className="containerInput">
                    <IoLockClosedOutline className="iconInput" />
                    <input type="password"
                        {...register('password',{
                            required : true,
                            minLength : 8
                        })}
                        placeholder="Contraseña"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>  
                {
                    errors.password && <Alert severity='error' className="alertForm">La contraseña debe de tener almenos 8 caracteres.</Alert>
                }

                <div className="containerInput">
                    <IoLockClosedOutline className="iconInput"/>
                    <input 
                        type="password"
                        {...register('confirmPassword',{
                            required : true,
                            minLength : 8
                        })}              
                        placeholder="Confirmar Contraseña"      
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </div>
                {
                    errors.confirmPassword && <Alert severity='error' className='alertForm' >La contraseña debe de tener almenos 8 caracteres.</Alert>
                }

                <button type='submit' className="buttonForm">
                    Enviar
                </button>

            </form>

            <Link to={'/login'} className="linkBack">
                Volver
            </Link>

        </section>
    )
}

export default ConfirmPassword