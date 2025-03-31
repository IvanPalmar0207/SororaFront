//Styles
import '../../styles/admin/table.css'
//UseExam
import { useExam } from '../../context/examContext'
//Icons
import { FaRegEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { MdAddchart } from "react-icons/md";
//React-router-dom
import { Link, useNavigate } from 'react-router-dom'
//SweetAlert
import Swal from 'sweetalert2'
//React-hooks
import { useEffect } from 'react'
function ManageExams(){

    //Exam Context
    const {deleteExamApi, allExamsApi, allExam} = useExam()

    useEffect(() => {
        allExamsApi()
    },[allExam])

    const navigate = useNavigate()

    return(
        <section className='sectionManageAdmin'>
            <h1>
                Administración de Examenes
            </h1>
            <p>
                Bienvenido administrador, en esta sección podras gestionar todo
                lo relacionado con los diferentes examenes que haran parte del aplicativo,
                podras agregar nuevos examanes, eliminar un examen en concreto, actualizar el
                nombre de un examen o en su defecto visualizar todos los examenes del aplicativo.
            </p>

            <div className='containerAddNewManage'>
                <Link className='addManage' to={'/addExam'}>
                    Añadir Examen
                </Link>
            </div>

            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre del Examen</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allExam.length > 0
                                        ?
                                            allExam.map(exam => {
                                                return(
                                                    <tr key={exam.id}>
                                                        <td data-label = 'Nombre - Examen'>
                                                            {exam.titleExam}
                                                        </td>
                                                        <td data-label = 'Opciones'>

                                                            <Link to={`/manageQuestion/${exam.id}`}>
                                                                <MdAddchart className='options addMediaAlt' />
                                                            </Link>

                                                            <Link to={`/updateExam/${exam.id}`}>
                                                                <FaRegEdit className='options clientUpdate' />
                                                            </Link>

                                                            <Link>
                                                                <MdDelete className='options clientDelete' onClick={() => {
                                                                    const deleteSwal = Swal.mixin({

                                                                    })

                                                                    deleteSwal.fire({
                                                                        title : 'Eliminar Examen',
                                                                        text : 'Estas seguro de eliminar el examen?',
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
                                                                                title : 'Eliminar Examen',
                                                                                text : 'El examen ha sido eliminado correctamente.',
                                                                                icon : 'success',
                                                                                confirmButtonColor : '#ff2d2d',
                                                                                confirmButtonText : 'Siguiente'
                                                                            })                                
                                                                            deleteExamApi(exam.id)                                        
                                                                            navigate('/manageExams')
                                                                        }
                                                                        else if(result.dismiss === Swal.DismissReason.cancel){
                                                                            deleteSwal.fire({
                                                                                title : 'Operación Cancelada',
                                                                                text : 'El examen seleccionado no sera eliminado',
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

export default ManageExams