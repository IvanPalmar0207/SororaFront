//Styles
import '../../styles/admin/table.css'
//UseExam
import { useExam } from '../../context/examContext'
//Icons
import { MdDelete } from 'react-icons/md'
import { LuClipboardList } from "react-icons/lu";
//React-router-dom
import { Link, useNavigate, useParams } from 'react-router-dom'
//SweetAlert
import Swal from 'sweetalert2'
//React-hooks
import { useEffect, useState } from 'react'
//Components
import Loader from '../../components/loader';
function ManageScore(){

    //Router-dom
    const navigate = useNavigate()
    const params = useParams()

    //Exam Context
    const {allScoresApi, score, deleteScoreApi} = useExam()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadData() {
            if(params.id){
                try{
                    allScoresApi(params.id)
                }catch(e){
                    console.error(e)
                }finally{
                    setLoading(false)
                }
            }
        }
        loadData()
    },[score])

    if(loading){
        return (
            <div className='containerLoaderAl'>
                <Loader />
            </div>
        )
    }

    return(
        <section className='sectionManageAdmin'>
            <h1>
                Administración de Puntajes
            </h1>

            <p>
                Bienvenido administrador, has ingresado a la sección que te 
                permitira gestionar los puntajes que estan relacionados con el examen
                que seleccionaste en la anterior sección, aqui podras ingresar nuevos
                puntajes, visualizar todos los puntajes y eliminar un puntaje o ponderación
                en especifíco.
            </p>
            
            <div className='containerAddNewManage'>
                <Link className='addManage' to={`/addScore/${params.id}`}>
                    Añadir Puntaje
                </Link>
            </div>

            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Puntaje Minímo</th>
                                        <th>Puntaje Maximo</th>
                                        <th>Tipo de Violencia</th>
                                        <th>Mensaje del Puntaje</th>
                                        <th>Gestionar Acciones</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        score.length > 0
                                        ?
                                        score.map(scores => {
                                            return(
                                                <tr key={scores.id}>
                                                    <td data-label = 'Puntaje Minímo'>
                                                        {scores.minScore}
                                                    </td>
                                                    <td data-label = 'Puntaje Maximo'>
                                                        {scores.maxScore}
                                                    </td>                                                    
                                                    {scores.violenceType === null
                                                        ?
                                                        <td data-label = 'Tipo de Violencia'>
                                                            No hay tipo de violencia para mostrar, gracias.
                                                        </td>
                                                        :
                                                        <td data-label = 'Tipo de Violencia'>
                                                            {scores.violenceType}
                                                        </td>
                                                    }
                                                    <td data-label = 'Mensaje del Puntaje'>
                                                        {scores.messageScore.slice(0, 60)}...
                                                    </td>
                                                    <td data-label = 'Gestionar Acciones'>
                                                        <Link to={`/manageAction/${scores.id}`}>
                                                            <LuClipboardList className='options addMediaAlt' />
                                                        </Link>
                                                    </td>
                                                    <td data-label = 'Opciones'>
                                                        <Link>
                                                            <MdDelete className='options clientDelete' onClick={() => {
                                                                const deleteSwal = Swal.mixin({

                                                                })

                                                                deleteSwal.fire({
                                                                    title : 'Eliminar Pregunta',
                                                                    text : 'Estas seguro de eliminar el puntaje?',
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
                                                                            title : 'Eliminar Puntaje',
                                                                            text : 'El puntaje ha sido eliminado correctamente.',
                                                                            icon : 'success',
                                                                            confirmButtonColor : '#ff2d2d',
                                                                            confirmButtonText : 'Siguiente'
                                                                        })
                                                                        deleteScoreApi(params.id, scores.id)
                                                                        navigate(`/manageScore/${params.id}`)
                                                                    }else if(result.dismiss === Swal.DismissReason.cancel){
                                                                        deleteSwal.fire({
                                                                            title : 'Operación Cancelada',
                                                                            text : 'El puntaje seleccionado no sera eliminado.',
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

export default ManageScore