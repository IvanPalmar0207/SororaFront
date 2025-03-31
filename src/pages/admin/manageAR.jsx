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
import { Link, useNavigate } from "react-router-dom"
//SweetAlert
import Swal from "sweetalert2"

function ManageAR(){

    //AR Data
    const {allArApi, arList, deleteArApi} = useAR()

    useEffect(() => {
        allArApi()
    },[arList])

    //Navigate
    const navigate = useNavigate()
    

    const {allCatUserApi, catListUser} = useCat()

    useEffect(() => {
        allCatUserApi()
    },[catListUser])

    const findCat = (id) => {
        const findNowCat = catListUser.find(cat => cat.id === id)
        return findNowCat ? findNowCat.titleCat : null
    }

    return(
        <section className='sectionManageAdmin'>
            <h1>
                Administración de Rutas de Atención
            </h1>
            
            <p>
                Bienvenido usuario administrador, te encuentras en la sección donde puedes 
                gestionar las diferentes rutas de atención que hacen parte del sistema, aquí se te
                da la opción de poder añadir una nueva ruta de atención, actualizar una ruta existente, 
                eliminar una ruta especifica o seleccionar todas las rutas de atención.
            </p>
            
            <div className='containerAddNewManage'>
                <Link className='addManage' to={'/addAr'}>
                    Añadir Ruta
                </Link>
            </div>

            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Categoría</th>                                    
                                        <th>Whatsapp RA</th>
                                        <th>Telefono RA</th>
                                        <th>Ubicación RA</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        arList.length > 0 ? 
                                            arList.map((arOne) => {
                                                return(
                                                    <tr key={arOne.id}> 
                                                        <td data-label = 'Categoría'>
                                                            {findCat(arOne.titleCat)}
                                                        </td>                                                       
                                                        <td data-label = 'Whatsapp RA'>
                                                            {arOne.whatsappAR}
                                                        </td>
                                                        <td data-label = 'Telefono RA'>
                                                            {arOne.phoneAR}
                                                        </td>
                                                        <td data-label = 'Ubicación RA'>
                                                            {arOne.locationAR}
                                                        </td>
                                                        <td data-label = 'Opciones'>
                                                            <Link to={`/updateAr/${arOne.id}`} >
                                                                <FaRegEdit className='options clientUpdate' />
                                                            </Link>
                                                    
                                                            <Link>
                                                                <MdDelete className='options clientDelete' onClick={() => {
                                                                    const deleteSwal = Swal.mixin({

                                                                    })

                                                                    deleteSwal.fire({
                                                                        title : 'Eliminar Ruta de atención',
                                                                        text : 'Estas seguro de eliminar la ruta de atención?',
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