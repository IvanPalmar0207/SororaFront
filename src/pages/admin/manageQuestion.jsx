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
import { useEffect } from 'react'
function ManageQuestion(){

    //React-router
    const navigate = useNavigate()
    const params = useParams()

    //ExamContext
    const {deleteQuestionApi, allQuestionsApi, questions} = useExam()

    useEffect(() => {
        allQuestionsApi(params.id)        
    },[questions])

    return(
        <section className='sectionManageAdmin'>
            <h1>
                Administración de Preguntas
            </h1>
            
            <p>
                Bienvenido administrador, has ingresado a la sección que te 
                permitira gestionar las preguntas del text o examen al que le 
                hiciste click, aqui podras visualizar todas las preguntas que hacen
                parte del examen con la opcion de agregar una nueva o eliminar una en
                especifico.
            </p>

            <div className='containerAddNewManage'>
                <Link className='addManage' to={`/addQuestion/${params.id}`}>
                    Añadir Pregunta
                </Link>
            </div>

            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre - Pregunta</th>
                                        <th>Puntaje - Pregunta</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        questions.length > 0
                                        ?
                                            questions.map(question => {
                                                return(
                                                    <tr key={question.id}>
                                                        <td data-label = 'Nombre - Pregunta'>
                                                            {question.nameQuestion.slice(0, 60)}...
                                                        </td>
                                                        <td data-label = 'Puntaje - Pregunta'>
                                                            {question.scoreQuestion}
                                                        </td>
                                                        <td data-label = 'Opciones'>
                                                            <Link>
                                                                <MdDelete className='options clientDelete' onClick={() => {
                                                                    const deleteSwal = Swal.mixin({

                                                                    })

                                                                    deleteSwal.fire({
                                                                        title : 'Eliminar Pregunta',
                                                                        text : 'Estas seguro de eliminar la pregunta?',
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
                                                                                title : 'Eliminar Pregunta',
                                                                                text : 'La pregunta ha sido eliminado correctamente.',
                                                                                icon : 'success',
                                                                                confirmButtonColor : '#ff2d2d',
                                                                                confirmButtonText : 'Siguiente'
                                                                            })                     
                                                                            deleteQuestionApi(params.id, question.id) 
                                                                            navigate(`/manageQuestion/${params.id}`)                                                                 
                                                                        }else if(result.dismiss === Swal.DismissReason.cancel){
                                                                            deleteSwal.fire({
                                                                                title : 'Operación Cancelada',
                                                                                text : 'La pregunta seleccionada no sera eliminada',
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

export default ManageQuestion