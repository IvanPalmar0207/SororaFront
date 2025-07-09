//Styles
import '../styles/components/cardNote.css'
//React-router-dom
import { Link, Navigate, useNavigate } from "react-router-dom"
//NoteContext
import { useNote } from "../context/noteContext"
//Icons
import { IoTrashBinOutline } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import Swal from 'sweetalert2';

function CardNote({id, title, date}){

    //NoteContext
    const {deleteNoteApi} = useNote()

    //DateFormating
    const dateNote = new Date(date)

    //Navigate
    const navigate = useNavigate()

    return(
        <div className='containerCardNote'>
            <div className='containerTextNote'>
                <h3>
                    {atob(title.slice(0, 25))}...
                </h3>
                <p>
                    {`${dateNote.getDate()} de ${dateNote.toLocaleDateString('default',{month : 'long'})} de ${dateNote.getFullYear()} - ${dateNote.getHours()} : ${dateNote.getMinutes()} : ${dateNote.getSeconds()}`}
                </p>
            </div>
            <div className='containerOOptionsNote'>
                <Link to={`/updateNote/${id}`} className='optionsNote'>
                    <BiEdit />
                </Link>
                <Link >
                    <IoTrashBinOutline className='optionsNote' onClick={() => {
                        const deleteNote = Swal.mixin({

                        })

                        deleteNote.fire({
                            title : 'Eliminar Nota',
                            text : 'Estas seguro/a de eliminar la nota?',
                            icon : 'warning',
                            showCloseButton : true,
                            showCancelButton : true,
                            confirmButtonText : 'Si, eliminar!',
                            confirmButtonColor : '#ff2d2d',
                            reverseButtons : true,
                            cancelButtonText : 'Cancelar',
                            cancelButtonColor : '#3ed634'
                        }).then((result) => {
                            if(result.isConfirmed){
                                deleteNoteApi(id)
                                deleteNote.fire({
                                    title : 'Eliminar Nota',
                                    text : 'La nota ha sido eliminada correctamente',
                                    icon : 'success',
                                    confirmButtonColor : '#ff2d2d',
                                    confirmButtonText : 'Siguiente'
                                })
                                navigate('/home')
                            }else if(result.dismiss === Swal.DismissReason.cancel){
                                deleteNote.fire({
                                    title : 'Operación Cancelada',
                                    text : 'La nota no sera eliminada.',
                                    icon : 'info',
                                    confirmButtonColor : '#3ed634',
                                    cancelButtonText : 'Cancelar'
                                })
                            }
                        })
                    } }/>
                </Link>
            </div>
        </div>  
    )
}

export default CardNote