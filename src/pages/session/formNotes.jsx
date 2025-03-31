//Style
import '../../styles/session/formNotes.css'
//React-hooks
import { useEffect, useState } from "react"
//React-hook-forms
import {useForm} from 'react-hook-form'
//React-router-dom
import { useParams, useNavigate } from "react-router-dom"
//NoteContext
import { useNote } from "../../context/noteContext"
//SweetAlert
import Swal from 'sweetalert2'
//React-icons
import { BiBookmark } from "react-icons/bi";
import { IoTrashBinOutline } from "react-icons/io5";
import { FaCircleArrowUp } from "react-icons/fa6";
//Material-iu
import { Alert } from "@mui/material"

function FormNotes(){

    //Hook form
    const {register, handleSubmit, formState : {errors}, setValue} = useForm()

    //ContentText
    const [contentText, setContentText] = useState('')
    
    //FavoriteState
    const [isFavorite, setIsFavorite] = useState(false)

    //Toggle Favorite
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    //Params
    const params = useParams()

    //NoteContext
    const {addNoteApi, getOneNoteApi, updateNoteApi} = useNote()

    //Navigate
    const navigate = useNavigate()

    //OnSubmit
    const onSubmit = handleSubmit(async(values) => {
        if(params.id){
            try{
                Swal.fire({
                    icon : 'success',
                    title : 'Nota Actualizada',
                    text : 'La nota ha sido actualizada correctamente',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente'
                })
                updateNoteApi(params.id, {
                    titleNote : values.titleNote,
                    contentNote : values.contentNote,
                    isFavorite : isFavorite
                })
                navigate('/notes')
            }catch(e){
                Swal.fire({
                    icon : 'success',
                    title : 'Error Presentado',
                    text : 'La nota no ha sido actualizada correctamente, intenta de nuevo.',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente'
                })
            }
        }else{
            try{                
                Swal.fire({                    
                    icon : 'success',
                    title : 'Nota Agregada',
                    text : 'La nota ha sido agregada correctamente',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente'
                })
                addNoteApi({
                    titleNote : values.titleNote,
                    contentNote : values.contentNote,
                    isFavorite : isFavorite
                })
                navigate('/notes')
            }catch(e){
                Swal.fire({
                    icon : 'success',
                    title : 'Error Presentado',
                    text : 'La nota no ha sido agregada correctamente, intenta de nuevo.',
                    confirmButtonColor : '#3ed634',
                    confirmButtonText : 'Siguiente'
                })
            }
        }
    })
    
    //Load Data
    useEffect(() => {
        async function loadData() {
            if(params.id){
                const res = await getOneNoteApi(params.id)

                setValue('titleNote', res.titleNote)
                setValue('contentNote', res.contentNote)
                setContentText(res.contentNote)

                const titleUpdate = document.getElementById('titleUpdate')
                titleUpdate.innerHTML = 'Creado el'

                const dateNote = new Date(res.createdNote)                

                const dateUpdate = document.getElementById('dateUpdate')
                dateUpdate.style.display = 'block'
                dateUpdate.innerHTML = `${dateNote.getDate()} de ${dateNote.toLocaleDateString('default',{month : 'long'})} de ${dateNote.getFullYear()} - ${dateNote.getHours()} : ${dateNote.getMinutes()} : ${dateNote.getSeconds()}`

                const dateAdd = document.getElementById('dateAdd')
                dateAdd.innerHTML = ''

                setIsFavorite(res.isFavorite)
            }
        }

        loadData()
    },[])        


    //Load Time
    const [time, setTime] = useState([])

    useEffect(() => {
        setInterval(() => {
            const dateNote = new Date()

            const currentTime = `${dateNote.getDate()} de ${dateNote.toLocaleDateString('default',{month : 'long'})} de ${dateNote.getFullYear()} - ${dateNote.getHours()} : ${dateNote.getMinutes()} : ${dateNote.getSeconds()}`

            setTime(currentTime)
        }, 1000)
    },[])

    return(
        <section className="sectionFormNote">
            <div className="containerFormNote">
                <form onSubmit={onSubmit}>
                    <div className='containerTitleFN'>
                        <div className='containerFormP1'>
                            <h4 id='titleUpdate'>
                                Nueva Nota
                            </h4>
                            <p className='dateUpdateNote' id='dateUpdate' style={{display : 'none'}}>

                            </p>
                            <input 
                                type="text" 
                                {...register('titleNote',{
                                    required : 5,
                                    minLength : 5
                                })}
                                placeholder="Título"
                            />
                            {
                                errors.titleNote && <Alert severity='error'>El titulo debe de tener almenos 5 caracteres.</Alert>
                            }
                            <h4 id='dateAdd'>
                                {time}
                            </h4>
                        </div>                        
                        <div className='containerIconFN'>
                            <BiBookmark id='iconFavorite' className={`iconFN ${isFavorite ? 'activeFn' : ''}`} onClick={toggleFavorite}/>

                            <button type='reset' onClick={() => setContentText('')}>
                                <IoTrashBinOutline className='iconFN'/>
                            </button>
                        </div>
                    </div>
                    
                    <div className='containerContentOn'>
                        {contentText.length <= 0 ? 
                            <textarea disabled value={'Empieza a escribir ...'}></textarea>
                            :
                            <textarea disabled cols={5} value={contentText}></textarea>
                        }
                    </div>

                    <div className='containerSubmitFN'>
                        <input 
                            type="text" 
                            {...register('contentNote',{
                                required : true,
                                minLength : 10
                            })}
                            placeholder="Escribe tu mensaje aqui"
                            onChange={e => setContentText(e.target.value)}
                        />
                        {
                            errors.contentNote && <Alert severity='error'>El contenido de la nota debe de tener almenos 10 caracteres.</Alert>
                        }                        
                        <br />

                        <button type='submit'>
                            <FaCircleArrowUp className='iconButtonFN'/>
                        </button>   
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormNotes