//Styles
import '../../styles/admin/table.css'
//UsePodcast
import { usePodcast } from '../../context/podcastContex'
//React-hooks
import { useEffect } from 'react'
//Icons
import { MdDelete } from 'react-icons/md'
//React-router-dom
import { useParams, Link, useNavigate } from 'react-router-dom'
//SweetAlert
import Swal from 'sweetalert2'
//Spotify-Embed
import { Spotify } from 'react-spotify-embed'
function ManagePodcast(){

    //React-router-dom
    const params = useParams()
    const navigate = useNavigate()

    //UsePodcast
    const {deletePodcastApi, podcastAll, allPodcastApi} = usePodcast()

    useEffect(() => {
        allPodcastApi()
    },[podcastAll])

    //Spotify Validate
    const spotifyUrl = /^(https?:\/\/)?(?:www\.)?open\.spotify\.com\/(track|playlist|album|episode|show)\/[a-zA-Z0-9]+(\?.*)?$/i

    return(
        <section className='sectionManageAdmin'>
            <h1>
                Administración de los Podcast
            </h1>

            <p>
                Bienvenido administrador, te encuentras en la sección de administración de Podcast
                los cuales son directamente traidos de spotify, aquí con tu rol de usuario podras 
                realizar operaciones de agregación de podcast, eliminación de podcast en especifico
                y visualización de todos los diferentes podcast que se encuentran registrados dentro
                del aplicativo.
            </p>

            <div className='containerAddNewManage'>
                <Link className='addManage' to={`/addPodcast`}>
                    Añadir Podcast
                </Link>
            </div>

            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Podcast - Link</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        podcastAll.length > 0
                                        ?
                                            podcastAll.map(podcast => {
                                                if(spotifyUrl.test(podcast.linkPodcast)){
                                                    return(
                                                        <tr key={podcast.id}>
                                                            <td className='containeSpotify' data-label = 'Podcast - Link'>
                                                                <div className='spotifyCompo'>
                                                                    <Spotify wide link={podcast.linkPodcast} />
                                                                </div>
                                                            </td>
                                                            <td data-label = 'Opciones'>
                                                                <Link>
                                                                    <MdDelete className='options clientDelete' onClick={() => {
                                                                        const deleteSwal = Swal.mixin({

                                                                        })

                                                                        deleteSwal.fire({
                                                                            title : 'Eliminar Podcast',
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
                                                                                    title : 'Eliminar Podcast',
                                                                                    text : 'El podcast ha sido eliminado correctamente.',
                                                                                    icon : 'success',
                                                                                    confirmButtonColor : '#ff2d2d',
                                                                                    confirmButtonText : 'Siguiente'
                                                                                })
                                                                                deletePodcastApi(podcast.id)
                                                                                navigate('/managePodcast')
                                                                            }else if(result.dismiss === Swal.DismissReason.cancel){
                                                                                deleteSwal.fire({
                                                                                    title : 'Operación Cancelada',
                                                                                    text : 'Hubo un error eliminando el podcast seleccionado, intenta nuevamente.',
                                                                                    icon : 'info',
                                                                                    confirmButtonColor : '#3ed634',
                                                                                    confirmButtonText : 'Cancelar'
                                                                                })
                                                                            }
                                                                        })
                                                                    }}                                                                    
                                                                    />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                }else{
                                                    return(
                                                        <tr key={podcast.id}>
                                                            <td data-label = 'Podcast - Link'>
                                                                El enlace que introduciste no es valido, intenta nuevamente.
                                                            </td>
                                                            <td data-label = 'Opciones'>
                                                                <Link>
                                                                    <MdDelete className='options clientDelete' onClick={() => {
                                                                        const deleteSwal = Swal.mixin({

                                                                        })

                                                                        deleteSwal.fire({
                                                                            title : 'Eliminar Podcast',
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
                                                                                    title : 'Eliminar Podcast',
                                                                                    text : 'El podcast ha sido eliminado correctamente.',
                                                                                    icon : 'success',
                                                                                    confirmButtonColor : '#ff2d2d',
                                                                                    confirmButtonText : 'Siguiente'
                                                                                })
                                                                                deletePodcastApi(podcast.id)
                                                                                navigate('/managePodcast')
                                                                            }else if(result.dismiss === Swal.DismissReason.cancel){
                                                                                deleteSwal.fire({
                                                                                    title : 'Operación Cancelada',
                                                                                    text : 'Hubo un error eliminando el podcast seleccionado, intenta nuevamente.',
                                                                                    icon : 'info',
                                                                                    confirmButtonColor : '#3ed634',
                                                                                    confirmButtonText : 'Cancelar'
                                                                                })
                                                                            }
                                                                        })
                                                                    }}                                                                    
                                                                    />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
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

export default ManagePodcast