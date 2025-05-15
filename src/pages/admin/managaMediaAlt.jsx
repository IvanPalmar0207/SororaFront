//Styles
import '../../styles/admin/table.css'
//UseAlternative
import { useAlternative } from '../../context/alternativeContext'
//React-hooks
import { useEffect } from 'react'
//Icons
import { MdDelete } from 'react-icons/md'
//React-router-dom
import { useParams, Link, useNavigate } from "react-router-dom"
//SweetAlert
import Swal from 'sweetalert2'
//Spotify Embed
import {Spotify} from 'react-spotify-embed'
function ManageMediaAlt(){

    //React-router-dom
    const params = useParams()
    const navigate = useNavigate()

    //UseAlternative
    const {allMediaAltApi, mediaAlt, deleteMediaAltApi} = useAlternative()

    useEffect(() => {
        if(params.id){
            allMediaAltApi(params.id)   
        }else{
            navigate('/')
        }
    },[mediaAlt])    
    
    return(
        <section className='sectionManageAdmin'>
            <h1>
                Administración de los datos multimedia de las acciones alternativas
            </h1>
            
            <p>
                Bienvenido administrador, te encuentras en la sección de administración
                de datos multimedia relacionados a una acción alternativa, en esta sección
                se te da la oportunidad de agregar podcast a la acción alternativa que escogiste
                anteriormente, también podras eliminar multimedia relacionada a una acción alternativa
                y por último podras visualizar los datos multimedia o podcast.
            </p>

            <div className='containerAddNewManage'>
                <Link className='addManage' to={`/formMediaAlt/${params.id}`}>
                    Añadir Multimedia
                </Link>
            </div>

            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre - Dato Multimedia</th>                                        
                                        <th>Enlace - Dato Multimedia</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        mediaAlt.length > 0
                                        ?
                                            mediaAlt.map(media => {
                                                return(
                                                    <tr key={media.id}>
                                                        <td data-label = 'Nombre - Dato'>{media.nameAlternative.slice(0,60)}...</td>                                                        
                                                        <td data-label = 'Link - Dato'>{media.linkAlternative.slice(0, 60)}...</td>
                                                        <td data-label = 'Opciones'>
                                                                <Link>
                                                                    <MdDelete className='options clientDelete' onClick={() => {
                                                                        const deleteSwal = Swal.mixin({

                                                                        })

                                                                        deleteSwal.fire({
                                                                            title : 'Eliminar multimedia',
                                                                            text : 'Estas seguro de eliminar el podcast?',
                                                                            icon : 'warning',
                                                                            showCloseButton : true,
                                                                            showCancelButton : true,
                                                                            confirmButtonText : 'Si, eliminar!',
                                                                            confirmButtonColor : '#ff2d2d',
                                                                            reverseButtons : true,
                                                                            cancelButtonText : 'Cancelar',
                                                                            cancelButtonColor : '#3ed634'
                                                                        }).then(result => {
                                                                            if(result.isConfirmed){
                                                                                deleteSwal.fire({
                                                                                    title : 'Eliminar dato multimedia',
                                                                                    text : 'El dato multimedia ha sido eliminado correctamente.',
                                                                                    icon : 'success',
                                                                                    confirmButtonColor : '#ff2d2d',
                                                                                    confirmButtonText : 'Siguiente',
                                                                                })
                                                                                deleteMediaAltApi(params.id, media.id)
                                                                                navigate(`/manageMediaAl/${params.id}`)
                                                                            }else if(result.dismiss === Swal.DismissReason.cancel){
                                                                                deleteSwal.fire({
                                                                                    title : 'Operación Cancelada',
                                                                                    text : 'El dato multimedia seleccionado no sera eliminado.',
                                                                                    icon : 'info',
                                                                                    confirmButtonColor : '#3ed634',
                                                                                    confirmButtonText : 'Cancelar'
                                                                                })
                                                                            }
                                                                        })
                                                                    }}/>
                                                                </Link>
                                                            </td>
                                                        </tr>                                                    
                                                )
                                            })
                                        :
                                            <div className='notDataFound'>
                                                No hay datos para mostrar, gracias por visitar esta sección.
                                            </div>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ManageMediaAlt