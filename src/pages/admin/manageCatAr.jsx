//Styles
import '../../styles/admin/table.css'
//UseCat
import { useCat } from '../../context/catContext'
//React-hooks
import { useEffect } from 'react'
//Icons
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from 'react-icons/md'
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
                Administración de las categorias de RA
            </h1>
            <p>
                Bienvenido usuario administrador te encuentras en el apartado de gestión de
                las categorias de las rutas de atencion y redes de confianza, aqui podras agregar una
                nueva categoria de RA, actualizar una categoria existente, eliminar una categoria en 
                especifico o visualizar todas las categorías.
            </p>

            <div className='containerAddNewManage'>
                <Link className='addManage' to={'/addCat'}>
                    Añadir categoría
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
                                                        {cat.titleCat}
                                                    </td>
                                                    <td data-label = 'Opciones'>
                                                        <Link to={`/updateCat/${cat.id}`}>
                                                            <FaRegEdit className='options clientUpdate' />
                                                        </Link>
                                                        <Link>
                                                            <MdDelete className='options clientDelete' onClick={() => {
                                                                const deleteSwal = Swal.mixin({

                                                                })

                                                                deleteSwal.fire({
                                                                    title : 'Eliminar categoria?',
                                                                    text : 'Estas seguro de eliminar la categoria?',
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