//Styles
import '../../styles/admin/table.css'
//UseExam
import { useExam } from '../../context/examContext'
//Icons
import { MdDelete } from 'react-icons/md'
//React-router-dom
import { Link, useNavigate, useParams } from 'react-router-dom'
//SweetAlert
import Swal from 'sweetalert2'
//React-hooks
import { useEffect, useState } from 'react'
function ManageAction(){

    //React-router-dom
    const params = useParams()
    const navigate = useNavigate()

    //Exam Context
    const {actions, getAllActionApi, deleteActionApi} = useExam()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadData() {
            if(params.id){
                try{
                    getAllActionApi(params.id)
                }catch(e){
                    console.error(e)
                }finally{
                    setLoading(false)
                }
            }
        }
        loadData()
    },[actions])

    if(loading){
        return <div>Cargando...</div>
    }

    return(
        <section className='sectionManageAdmin'>
            <h1>
                Administración de Acciones
            </h1>
            
            <p>
                Bienvenido administrador, te encuentras en la sección de Administración de
                las acciones, en esta sección podras gestionar las acciones referentes al puntaje del 
                examen que elegiste anteriormente, aquí podras agregar una acción, eliminar una 
                acción y visualizar todas las acciones que hacen parte del puntaje.
            </p>

            <div className='containerAddNewManage'>
                <Link className='addManage' to={`/addAction/${params.id}`}>
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
                                        <th>Nombre de la Acción</th>
                                        <th>Enlace de la Acción</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        actions.length > 0
                                        ?
                                        actions.map(action => {
                                            return(
                                                <tr key={action.id}>
                                                    <td data-label = 'Nombre de la acción'>
                                                        {action.nameAction}
                                                    </td>
                                                    <td data-label = 'Enlace la Acción'>
                                                        {action.linkAction}
                                                    </td>
                                                    <td data-label = 'Opciones'>
                                                        <Link>
                                                            <MdDelete className='options clientDelete' onClick={() => {
                                                                const deleteSwal = Swal.mixin({

                                                                })

                                                                deleteSwal.fire({
                                                                    title : 'Eliminar Acción',
                                                                    text : 'Estas seguro/a de eliminar la acción?',
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
                                                                            title : 'Eliminar Acción',
                                                                            text : 'La acción ha sido eliminada correctamente.',
                                                                            icon : 'success',
                                                                            confirmButtonColor : '#ff2d2d',
                                                                            confirmButtonText : 'Siguiente'
                                                                        })
                                                                        deleteActionApi(params.id, action.id)
                                                                        navigate(`/manageScore/${params.id}`)
                                                                    }else if(result.dismiss === Swal.DismissReason.cancel){
                                                                        deleteSwal.fire({
                                                                            title : 'Operación Cancelada',
                                                                            text : 'La acción seleccionada no sera eliminada.',
                                                                            icon : 'info',
                                                                            confirmButtonColor : '#3ed634',
                                                                            confirmButtonText : 'Cancelar'
                                                                        })       
                                                                    }
                                                                })
                                                            }}   />
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

export default ManageAction