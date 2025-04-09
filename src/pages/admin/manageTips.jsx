//Styles
import '../../styles/admin/table.css'
//React-hooks
import { useEffect } from 'react'
//Icons
import { FaRegEdit } from "react-icons/fa";
import {MdDelete} from 'react-icons/md'
//React-router-dom
import {Link, Navigate, useNavigate} from 'react-router-dom'
//Sweetalert
import Swal from 'sweetalert2'
//TipContext
import { useTip } from '../../context/tipContext'

function ManageTips(){
    
    //TipData
    const {allTipsApi, deleteTipApi, tipList} = useTip()

    //loadData
    useEffect(() => {
        allTipsApi()
        console.log(tipList)
    },[tipList])

    //Navigate
    const navigate = useNavigate()

    return(
        <section className='sectionManageAdmin'>
            <h1>
                Administración de Tips
            </h1>
            <p>
                Bienvenido usuario administrador, actualmente te encuentras en la 
                seccion de administración de tips que hace parte de la interfaz '¿Qué 
                puedo hacer?', en esta sección podras añadir nuevos tips, actualizar un 
                tip ya existente y eliminar un tip en especifico además de poder visualizar
                todos los tips que hacen parte del sistema.
            </p>

            <div className='containerAddNewManage'>
                <Link className='addManage' to={'/addTip'}>
                    Añadir Tip
                </Link>
            </div>

            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre del Tip</th>
                                        <th>Descripción del Tip</th>
                                        <th>Respuesta Saludable</th>
                                        <th>Respuesta No Saludable</th>
                                        <th>Imagen del Tip</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tipList.length > 0 ? 
                                        tipList.map((tip) => {
                                            return(
                                                <tr key={tip.id}>
                                                    <td data-label = 'Nombre'>
                                                        {tip.nameTip}
                                                    </td>
                                                    <td data-label = 'Descripción'>
                                                        {tip.descriptionTip.slice(0, 60)}...
                                                    </td>
                                                    <td data-label = 'Respuesta Saludable'>
                                                        {tip.goodSituation.slice(0, 60)}...
                                                    </td>
                                                    <td data-label = 'Respuesta No Saludable'>
                                                        {tip.badSituation.slice(0, 60)}...
                                                    </td>
                                                    <td data-label = 'Imagen' className='containerTableImage'>
                                                        <img src={tip.imageTip} alt="imageTip" />
                                                    </td>
                                                    <td data-label = 'Opciones'>
                                                        <Link to={`/updateTip/${tip.id}`}>
                                                            <FaRegEdit className='options clientUpdate' />
                                                        </Link>

                                                        <Link>
                                                            <MdDelete className='options clientDelete' onClick={() => {
                                                                const deleteMix = Swal.mixin({

                                                                })

                                                                deleteMix.fire({
                                                                    title : 'Eliminar Tip',
                                                                    text : 'Estas seguro de eliminar el tip?',
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
                                                                        deleteTipApi(tip.id)
                                                                        deleteMix.fire({
                                                                            title : 'Eliminar Tip',
                                                                            text : 'El tip ha sido eliminado correctamente.',
                                                                            icon : 'success',
                                                                            confirmButtonColor : '#ff2d2d',
                                                                            confirmButtonText : 'Siguiente'
                                                                        })
                                                                        navigate('/manageTips')
                                                                    }else if(result.dismiss === Swal.DismissReason.cancel){
                                                                        deleteMix.fire({
                                                                            title : 'Operación Cancelada',
                                                                            text : 'El tip seleccionado no sera eliminado.',
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
                                            No hay datos para cargar, puedes intentar añadiendo uno.
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

export default ManageTips