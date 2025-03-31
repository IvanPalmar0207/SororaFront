//Styles
import '../../styles/admin/table.css'
//UseAlternative
import { useAlternative } from '../../context/alternativeContext'
//React-hooks
import { useEffect } from 'react'
//Icons
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from 'react-icons/md'
import { MdAddPhotoAlternate } from "react-icons/md";
//React-router-dom
import { Link, useNavigate } from 'react-router-dom'
//SweetAlert
import Swal from 'sweetalert2'
function ManageAlternative(){

    const {allAlternativeApi, deleteAlternativeApi, allAlt} = useAlternative()

    useEffect(() => {
        allAlternativeApi()
    },[allAlt])

    const navigate = useNavigate()

    return(
        <section className='sectionManageAdmin'>
            <h1>
                Administración de Acciones Alternativas
            </h1>

            <p>
                Bienvenido administrador, en esta sección tendras la opcion de poder 
                gestionar todo lo relacionado con las acciones alternativas, como administrador
                podras añadir una nueva acción alternativa, actualizar una acción alternativa, eliminar 
                una acción alternativa y visualizar todas las acciones alternativas además de poder
                agregar contenido a cada acción alternativa.
            </p>

            <div className='containerAddNewManage'>
                <Link className='addManage' to={'/addAlternative'}>
                    Añadir Acción
                </Link>
            </div>

            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Título de la Alternativa</th>
                                        <th>Descripción de la Alternativa</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allAlt.length > 0
                                        ?
                                        allAlt.map((alter) => {
                                            return(
                                                <tr key={alter.id}>
                                                    <td data-label = 'Título'>
                                                        {alter.titleAlternative}
                                                    </td>
                                                    <td data-label = 'Descripción'>
                                                        {alter.descriptionAlternative.slice(0, 70)}...
                                                    </td>
                                                    <td data-label = 'Opciones'>
                                                        <Link to={`/manageMediaAl/${alter.id}`}>
                                                            <MdAddPhotoAlternate className='options addMediaAlt' />
                                                        </Link>
                                                        <Link to={`/updateAlternative/${alter.id}`}>
                                                            <FaRegEdit className='options clientUpdate' />
                                                        </Link>
                                                        <Link>
                                                            <MdDelete className='options clientDelete' onClick={() => {
                                                                const deleteSwal = Swal.mixin({

                                                                })

                                                                deleteSwal.fire({
                                                                    title : 'Eliminar Acción Alternativa',
                                                                    text : 'Estas seguro de eliminar la acción alternativa?',
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
                                                                        deleteSwal.fire({
                                                                            title : 'Eliminar Acción Alternativa',
                                                                            text : 'La acción alternativa ha sido eliminada correctamente.',
                                                                            icon : 'success',
                                                                            confirmButtonColor : '#ff2d2d',
                                                                            confirmButtonText : 'Siguiente'
                                                                        })
                                                                        deleteAlternativeApi(alter.id)
                                                                        navigate('/manageAlternative')
                                                                    }else if(result.dismiss === Swal.DismissReason.cancel){
                                                                        deleteSwal.fire({
                                                                            title : 'Operación Cancelada',
                                                                            text : 'La ruta de atención seleccionada no sera eliminada',
                                                                            icon : 'info',
                                                                            confirmButtonColor : '#3ed634',
                                                                            confirmButtonText : 'Cancelar'
                                                                        })
                                                                    }
                                                                })
                                                            }} />
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

export default ManageAlternative