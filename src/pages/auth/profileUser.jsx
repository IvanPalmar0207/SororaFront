//Styles
import '../../styles/auth/profileUser.css'
//React-router-dom
import { useParams, useNavigate } from "react-router-dom"
//Images
import userImage from '../../assets/myNets/testimonies.svg'
//UseUser Context
import { UseUser } from "../../context/userContext"
//React-hooks
import { useEffect, useState } from 'react'
//React-hook-forms
import { useForm } from 'react-hook-form'
//MaterialUI
import {Button, Alert} from '@mui/material'
//Components
import Loader from '../../components/loader'
function ProfileUser(){

    //Router-dom
    const params = useParams()
    const navigate = useNavigate()

    //User User Context
    const {
        updateUserApi,
        getOneUserApi,        
        ageUserAllApi, 
        ages, 
        educationUserAllApi, 
        educations, 
        relationUserAllApi, 
        relations, 
        workUserAllApi, 
        works, 
        salarayUserAllApi, 
        salaries
    } = UseUser()

    //Use Form
    const {register, handleSubmit, formState : {errors}, setValue} = useForm()

    //Data States
    const [loadingData, setLoadingData] = useState(true)
    const [loading, setLoading] = useState(true)
    const [userLoad, setUserLoad] = useState([null])
    const [openForm, setOpenForm] = useState(false)
    const [relationOp, setRelationOp] = useState(false)
    const [kidOp, setKidOp] = useState(false)

    useEffect(() => {
        async function loadInfo() {
            try{
                await Promise.all([
                    ageUserAllApi(),
                    educationUserAllApi(),
                    relationUserAllApi(),
                    workUserAllApi(),
                    salarayUserAllApi()
                ])
            }catch(e){
                console.error(e)
            }finally{
                setLoadingData(false)
            }
        }
        loadInfo()
    }, [params.id])    

    //Load Info User
    useEffect(() => {
        async function loadData() {
            if(params.id && !loadingData){
                try{
                    const res = await getOneUserApi(params.id)
                    setUserLoad(res)
                }catch(e){
                    console.error(e)
                }finally{
                    setLoading(false)
                }
            }
        }
        loadData()
    },[params.id, loadingData])

    if(loading || loadingData){
        return (
            <div className='containerLoaderAl'>
                <Loader />
            </div>
        )
    }

    if(!userLoad){
        return (
            <div className='containerLoaderAl'>
                <Loader />
            </div>
        )
    }

    //Add Info Logic
    const toggleForm = () => {
        setOpenForm(!openForm)
    }    

    const onSubmit = handleSubmit(async (values) => {
        const formValues = new FormData()

        formValues.append('ageUser', values.ageUser)
        formValues.append('educationUser', values.educationUser)        
        formValues.append('relationUser', relationOp ? values.relationUser  : '')        
        formValues.append('manyKid', kidOp ? values.manyKid : 0)
        formValues.append('workUser', values.workUser)
        formValues.append('salaryUser', values.salaryUser)

        if(params.id){
            updateUserApi(params.id, formValues, params.id)            
        }
    })

    const findAge = (idAge) => {
        const agFind = ages.find(age => age.id === idAge)
        
        console.log(agFind.ageUser === 'Prefiero no responder')

        if(agFind){
            if(agFind.ageUser === 'Prefiero no responder'){
                return null
            }else{
                return agFind.ageUser
            }
        }
    }

    const findEducation = (idEducation) => {
        const edFind = educations.find(edu => edu.id === idEducation)

        if(edFind){
            if(edFind.educationUser === 'Prefiero no responder'){
                return null
            }else{
                return edFind.educationUser
            }
        }
    }

    const findrelation = (idRelation) => {
        const relFind = relations.find(rel => rel.id === idRelation)
        
        if(relFind){
            if(relFind.relationUser === 'Prefiero no responder'){
                return null
            }else{
                relFind.relationUser
            }
        }
    }

    const findWork = (idWork) => {
        const woFind = works.find(work => work.id === idWork)        

        if(woFind){
            if(woFind.workUser === 'Prefiero no responder'){
                return null
            }else{
                return woFind.workUser
            }
        }
    }

    const findRange = (idRange) => {
        const ranFind = salaries.find(sal => sal.id === idRange)
        
        if(ranFind){
            if(ranFind.salaryUser === 'Prefiero no responder'){                
                return null
            }else{                
                return ranFind.salaryUser
            }
        }
    }
    

    return(
        <section className="sectionProfile">
            <div className="containerProfile">
                <div className='containerTitleProfile'>
                    <div>
                        <h4>
                            Perfil Sorora
                        </h4>
                        <h2>
                            Bienvenido al perfil del usuario Sorora
                        </h2>
                    </div>
                    <div>
                        <img src={userImage} alt="" />
                    </div>
                </div>

                <div className='infoProfileContainer'>
                    <p>
                        Bienvenido usuario, aquí podras consultar la información al
                        completo de tu perfil, en esta sección se ofrece la opción de
                        actualizar tus datos o visualizarlos de una manera completa, gracias
                        y buen día.
                    </p>
                </div>
                
                <div className='containerDataUser'>
                    <div className='dataInfo'>
                        <h4>
                            Email:
                        </h4>
                        <p>
                            {userLoad.email}
                        </p>
                    </div>
                    {
                        userLoad.ageUser && findAge(userLoad.ageUser) != null
                        ?
                        <div className='dataInfo'>
                            <h4>
                                Rango de Edad:
                            </h4>
                            <p>
                                {findAge(userLoad.ageUser)}
                            </p>
                        </div>
                        :
                        null
                    }
                    {
                        userLoad.educationUser && findEducation(userLoad.educationUser) != null
                        ?
                        <div className='dataInfo'>
                            <h4>
                                Nivel Educativo:
                            </h4>
                            <p>
                                {findEducation(userLoad.educationUser)}
                            </p>
                        </div>
                        :
                        null
                    }
                    {
                        userLoad.relationUser && findrelation(userLoad.relationUser) != null
                        ?
                        <div className='dataInfo'>
                            <h4>
                                Estado Civil:
                            </h4>
                            <p>
                                {findrelation(userLoad.relationUser)}
                            </p>
                        </div>
                        :
                        null
                    }
                    {
                        userLoad.salaryUser && findRange(userLoad.salaryUser) != null
                        ?
                        <div className='dataInfo'>
                            <h4>
                                Rango Salarial:
                            </h4>
                            <p>
                                {findRange(userLoad.salaryUser)}
                            </p>
                        </div>
                        :
                        null
                    }
                    {
                        userLoad.workUser && findWork(userLoad.workUser) != null
                        ?
                        <div className='dataInfo'>
                            <h4>
                                Situación Laboral:
                            </h4>
                            <p>
                                {findWork(userLoad.workUser)}
                            </p>
                        </div>
                        :
                        null
                    }            
                    {
                        userLoad.manyKid 
                        ?
                        <div className='dataInfo'>
                            <h4>
                                Número de hijos:
                            </h4>
                            <p>
                                {userLoad.manyKid}
                            </p>
                        </div>
                        :
                        null
                    }                                        
                </div>

                <div className='containerFormUpUser'>
                    {
                        openForm
                        ?
                        <Button className='buttonFormp' onClick={() => {
                            toggleForm()
                        }}>
                            Cerrar Formulario
                        </Button>
                        :
                        <Button className='buttonFormp' onClick={() => {
                            toggleForm()
                        }}>
                            Agregar Información
                        </Button>
                    }
                    {
                        openForm 
                        && 
                        <form onSubmit={onSubmit} className='formProfile'>
                            <div className='inputContainerProfile'>
                                <label htmlFor="ageUser">Edad:</label>
                                <br />                                
                                <select {...register('ageUser')} className='selectUser'>
                                    {
                                        ages.map(age => {
                                            return(
                                                <option key={age.id} value={age.id}>{age.ageUser}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            
                            <br />                            

                            <div className='inputContainerProfile'>
                                <label htmlFor="educationUser">Nivel Educativo:</label>
                                <br />                                
                                <select {...register('educationUser')} className='selectUser'>
                                    {
                                        educations.map(education => {
                                            return(
                                                <option key={education.id} value={education.id}>{education.educationUser}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <br />

                            <div className='inputContainerProfile'>
                                <div>
                                    <label htmlFor="relationUser">
                                        ¿Te encuentras en una relación sexoafectiva?
                                    </label>
                                    <div className='buttonsProfileOP'>
                                        <h4 onClick={() => {
                                                setRelationOp(true)
                                            }}>
                                                Si
                                        </h4>
                                        <h4 onClick={() => {
                                                setRelationOp(false)
                                            }}>
                                                No
                                        </h4>
                                    </div>
                                </div>
                                <div>                                    
                                    {
                                        relationOp 
                                        &&
                                        <select {...register('relationUser')} className='selectUser'>
                                            {
                                                relations.map(rel => {                                                    
                                                    return(
                                                        <option key={rel.id} value={rel.id}>{rel.relationUser}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    }
                                </div>
                            </div>

                            <br />

                            <div className='inputContainerProfile'>
                                <div>
                                    <label htmlFor="manyKid">¿Tienes hijos? Sí es asi, ¿cuantos?</label>
                                    <div className='buttonsProfileOP'>
                                        <h4 onClick={() => {
                                                setKidOp(true)
                                            }}>
                                                Si
                                        </h4>
                                        <h4 onClick={() => {
                                                setKidOp(false)
                                            }}>
                                            No
                                        </h4>
                                    </div>
                                </div>                                
                                {
                                    kidOp
                                    &&
                                    <input type="number" className='inputUser'
                                        {
                                            ...register('manyKid',{                                                
                                                pattern : {
                                                    value : /^(0|[1-9]\d*)(\.\d+)?$/ 
                                                },
                                                valueAsNumber : true
                                            })
                                        }
                                        placeholder='Cuantos hijos tienes?'
                                    />
                                }
                                {
                                    errors.manyKid && <Alert severity='error' className='alertForm'>El numero de hijos debe de ser un numero.</Alert>
                                }
                            </div>

                            <br />

                            <div className='inputContainerProfile'>
                                <label htmlFor="workUser">
                                    ¿Cuál es tu situación laboral actual?
                                </label>
                                <br />
                                <select {...register('workUser')} className='selectUser'>
                                    {
                                        works.map(work => {
                                            return(
                                                <option key={work.id} value={work.id}>{work.workUser}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <br />

                            <div className='inputContainerProfile'>
                                <label htmlFor="rangeSalaryUser">¿Cuál es tu rango salarial?</label>
                                <br />
                                <select {...register('salaryUser')} className='selectUser'>
                                    {
                                        salaries.map(salary => {
                                            return(
                                                <option key={salary.id} value={salary.id}>{salary.salaryUser}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            
                            <br />

                            <div className='containerButtonProfile'>
                                <Button variant='contained' className='buttonProfile' type='submit'>
                                    Agregar Datos
                                </Button>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </section>
    )
}

export default ProfileUser