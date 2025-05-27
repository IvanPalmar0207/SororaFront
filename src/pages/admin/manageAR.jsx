//Styles
import '../../styles/admin/table.css'
//UseAR
import { useAR } from "../../context/arContext"
//UseCat
import { useCat } from '../../context/catContext'
//React-hooks
import { useEffect } from "react"
//Icons
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md"
//React-router-dom
import { Link, useNavigate, useParams } from "react-router-dom"
//SweetAlert
import Swal from "sweetalert2"

function ManageAR(){

    //Params 
    const params = useParams()

    //AR Data
    const {allArApi, arList, deleteArApi} = useAR()

    useEffect(() => {
        allArApi(params.id)
    },[arList])

    //Navigate
    const navigate = useNavigate()
    

    const {allCatUserApi, catListUser} = useCat()    

    useEffect(() => {
        allCatUserApi()
    },[catListUser])

    const findCat = (id) => {
        const findNowCat = catListUser.find(cat => cat.id === id)
        return findNowCat ? findNowCat.nameCat : 'no'
    }

    return(
        <section className='sectionManageAdmin'>
            <h1>
                Administración de las secciones de las RA
            </h1>
            
            <p>
                Bienvenido usuario administrador, te encuentras en la sección donde puedes 
                gestionar las diferentes secciones de las rutas de atención que hacen parte del sistema,
                aquí se te da la opción de poder añadir una nueva sección de ruta de atención, actualizar
                una sección existente, eliminar una sección especifica o seleccionar todas las secciones
                de la ruta de atención seleccionada.
            </p>
            
            <div className='containerAddNewManage'>
                <Link className='addManage' to={`/addAr/${params.id}`}>
                    Añadir Sección
                </Link>
            </div>

            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre - Sección</th>                                    
                                        <th>Descripción - Sección</th>
                                        <th>Imagen - Sección</th>                           
                                        <th>Ruta de Atención</th>             
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        arList.length > 0 ? 
                                            arList.map((arOne) => {
                                                return(
                                                    <tr key={arOne.id}> 
                                                        <td data-label = 'Nombre - Secciòn'>
                                                            {arOne.nameAttention}
                                                        </td>        
                                                        <td data-label = 'Ruta de Atención'>
                                                            {findCat(arOne.nameCat)}
                                                        </td>                                                      
                                                        <td data-label = 'Descripción - Sección'>
                                                            {arOne.descriptionAttention?.slice(0, 60)}...
                                                        </td>
                                                        <td data-label = 'Imagen - Sección' className='containerTableImage'>
                                                            <img src={arOne.imageAttention} alt="imgAttention" />
                                                        </td>                                                                                                         
                                                        <td data-label = 'Opciones'>
                                                            <Link to={`/updateAr/${arOne.id}/${params.id}`} >
                                                                <FaRegEdit className='options clientUpdate' />
                                                            </Link>
                                                    
                                                            <Link>
                                                                <MdDelete className='options clientDelete' onClick={() => {
                                                                    const deleteSwal = Swal.mixin({

                                                                    })

                                                                    deleteSwal.fire({
                                                                        title : 'Eliminar Ruta de atención',
                                                                        text : 'Estas seguro/a de eliminar la ruta de atención?',
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
                                                                                title : 'Eliminar ruta de atención',
                                                                                text : 'La ruta de atención ha sido eliminada correctamente.',
                                                                                icon : 'success',
                                                                                confirmButtonColor : '#ff2d2d',
                                                                                confirmButtonText : 'Siguiente'
                                                                            })
                                                                            deleteArApi(arOne.id)
                                                                            navigate('/manageAr')
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

export default ManageAR