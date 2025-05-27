//Styles
import '../../styles/admin/table.css'
//UseCat
import { useCat } from '../../context/catContext'
//React-hooks
import { useEffect } from 'react'
//Icons
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from 'react-icons/md'
import { FaBookAtlas } from "react-icons/fa6";
//React-router-dom
import { Link, useNavigate } from 'react-router-dom'
//SweetAlert
import Swal from 'sweetalert2'
function ManageCatAr(){

    //Cat Data
    const {deleteCatApi, catList, allCatsApi} = useCat()

    useEffect(() => {
        allCatsApi()
    },[catList])

    //Navigate
    const navigate = useNavigate()

    return(
        <section className='sectionManageAdmin'>
            <h1>
                Administración de las Rutas de Atención
            </h1>
            <p>
                Bienvenido usuario administrador te encuentras en el apartado de gestión de
                de las rutas de atención, aqui podras agregar una
                nueva ruta de atención, actualizar una ruta de atención existente, eliminar una ruta de atención en
                especifico o visualizar todas las rutas de atención.
            </p>

            <div className='containerAddNewManage'>
                <Link className='addManage' to={'/addCat'}>
                    Añadir Ruta de Atención
                </Link>
            </div>

            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre de la categoria</th>
                                        <th>Descripción de la Categoria</th>
                                        <th>Imagen de la categoria</th>
                                        <th>Opciones</th>   
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        catList.length > 0 ? 

                                        catList.map(cat => {
                                            return(
                                                <tr key={cat.id}>
                                                    <td data-label = 'Nombre Cat'>
                                                        {cat.nameCat}
                                                    </td>
                                                    <td data-label = 'Descripción Cat'>
                                                        {cat.descriptionCat?.slice(0,60)}...
                                                    </td>
                                                    <td className='containerTableImage' data-label = 'Imagen - Cat'>
                                                        <img src={cat.imageCat} alt="imageCat" />
                                                    </td>
                                                    <td data-label = 'Opciones'>
                                                        <Link to={`/manageAr/${cat.id}`} title='Secciones de las Rutas de Atención'>
                                                            <FaBookAtlas className='options addMediaAlt' />
                                                        </Link>
                                                        <Link to={`/updateCat/${cat.id}`} title='Actualizar Ruta de Atención'>
                                                            <FaRegEdit className='options clientUpdate' />
                                                        </Link>
                                                        <Link title='Eliminar Ruta de Atención'>
                                                            <MdDelete className='options clientDelete' onClick={() => {
                                                                const deleteSwal = Swal.mixin({

                                                                })

                                                                deleteSwal.fire({
                                                                    title : 'Eliminar categoria?',
                                                                    text : 'Estas seguro/a de eliminar la categoria?',
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
                                                                            title : 'Eliminar categoria',
                                                                            text : 'La categoria ha sido eliminada correctamente.',
                                                                            icon : 'success',
                                                                            confirmButtonColor : '#ff2d2d',
                                                                            confirmButtonText : 'Siguiente'
                                                                        })
                                                                        deleteCatApi(cat.id)
                                                                        navigate('/manageCat')
                                                                    }else if(result.dismiss === Swal.DismissReason.cancel){
                                                                        deleteSwal.fire({
                                                                            title : 'Operación Cancelada',
                                                                            text : 'La categoria seleccionada no sera eliminada',
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
                                            No hay datos para mostrar, agrega una nueva categoria.
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

export default ManageCatAr