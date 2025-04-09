//Styles
import '../../styles/admin/table.css'
//React-hooks
import { useEffect } from 'react'
//Icons
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from 'react-icons/md'
//React-router-dom
import { Link, useNavigate } from 'react-router-dom'
//SweetAlert
import Swal from 'sweetalert2'
//TestiContext
import { useTestimonie } from '../../context/testContext'
//React-player
import ReactPlayer from 'react-player'
function ManageTestimonies(){

    //React-router-dom
    const navigate = useNavigate()

    //Testimonie Methods
    const {allTestApi, allTestA, catTest, catTestUserApi, deleteTestApi} = useTestimonie()

    useEffect(() => {
        allTestApi()
    },[allTestA])

    useEffect(() => {
        catTestUserApi()
    },[catTest])

    //Filter Category
    const findCat = (id) => {
        const cateTest = catTest.find(cat => cat.id === id)
        return cateTest ? cateTest.categoryTest : null
    }

    return(
        <section className='sectionManageAdmin'>
            <h1>
                Administración de Testimonios
            </h1>

            <p>
                Bienvenido usuario administrador, te encuentras en la sección de gestión de 
                testimonios en la cual podras gestionar los testimonios que hacen parte del aplicativo, 
                esta sección te da la oportunidad de añadir un nuevo testimonio, actualizar un testimonio en
                especfico, eliminar un testimonio ya existente y seleccionar todos los testimonios agregados previamente.
            </p>

            <div className='containerAddNewManage'>
                <Link className='addManage' to={'/addTest'}>
                    Añadir Testimonio
                </Link>
            </div>

            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Autor</th>
                                        <th>Descripción</th>
                                        <th>Video</th>
                                        <th>Articulo - Enlace</th>
                                        <th>Categoría</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allTestA.length > 0
                                        ?
                                            allTestA.map(test => {
                                                return(
                                                    <tr key={test.id}>
                                                        <td data-label = 'Autor'>
                                                            {test.authorTest}
                                                        </td>
                                                        <td data-label = 'Descripción'>
                                                            {test.descriptionTest.slice(0,80)}...
                                                        </td>
                                                        <td data-label = 'Video'>
                                                            <ReactPlayer className='videoReact'                                                                
                                                                url = {test.videoTest}
                                                                playing
                                                                width = "100%"
                                                                height = "100%"
                                                                controls = {false}
                                                                muted = {true}
                                                            />
                                                        </td>
                                                        <td data-label = 'Articulo - Enlace'>
                                                            {test.articleTest.slice(0, 60)}...
                                                        </td>
                                                        <td data-label = 'Categoría'>
                                                            {findCat(test.catTest)}                                                            
                                                        </td>
                                                        <td data-label = 'Opciones'>
                                                            <Link to={`/updateTest/${test.id}`}>
                                                                <FaRegEdit className='options clientUpdate' />
                                                            </Link>

                                                            <Link>
                                                                <MdDelete className='options clientDelete' onClick={() => {
                                                                    const deleteSwal = Swal.mixin({

                                                                    })

                                                                    deleteSwal.fire({
                                                                        title : 'Eliminar Testimonio',
                                                                        text : 'Estas seguro de eliminar el testimonio?',
                                                                        icon : 'warning',
                                                                        showCloseButton : true,
                                                                        showCancelButton : true,
                                                                        confirmButtonColor : '#ff2d2d',
                                                                        confirmButtonText : 'Si, eliminar!',
                                                                        reverseButtons : true,
                                                                        cancelButtonText : 'Cancelar',
                                                                        cancelButtonColor : '#3ed634'
                                                                    }).then(result => {
                                                                        if(result.isConfirmed){
                                                                            deleteTestApi(test.id)
                                                                            Swal.fire({
                                                                                title : 'Testimonio eliminado',
                                                                                text : 'El testimonio ha sido eliminado correctamente.',
                                                                                icon : 'success',
                                                                                confirmButtonColor : '#ff2d2d',
                                                                                confirmButtonText : 'Siguiente'                                                                                
                                                                            })
                                                                            navigate('/manageTest')
                                                                        }else if(result.isDismissed === Swal.DismissReason.cancel){
                                                                            Swal.fire({
                                                                                title : 'Operación Cancelada',
                                                                                text : 'El testimonio seleccionado no sera eliminado, gracias.',
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
                                        <div>No hay datos para mostrar, gracisa por visitar esta sección</div>                                    
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

export default ManageTestimonies