//Styles
import '../../styles/session/attention.css'
//Images
import attentionImg from '../../assets/whatToDo/attentionRoute.png'
//ArContext
import { useCat } from '../../context/catContext'
//React-hooks
import { useEffect } from 'react'
import { useState } from 'react'
//Icons
import { CiFaceFrown } from "react-icons/ci";
//React-router-dom
import { useParams, Link } from 'react-router-dom'
//Components
import Loader from '../../components/loader'
import CardMoreInfo from '../../components/cardMoreInfo'
function MoreInfoRoute(){

    //States
    const [loading, setLoading] = useState(true)

    //React-router-dom
    const params = useParams()

    const {oneCatArApi, getOneCatUserApi } = useCat()

    const [catArList, setCatArList] = useState([])
    
    const [data, setData] = useState(false)

    useEffect(() => {
        async function loadData() {
            if(params.id){
                try{
                    const res = await oneCatArApi(params.id)
                    setCatArList(res)                
                }catch(e){
                    console.log(e)
                }finally{
                    setLoading(false)
                }
            }
        }            
        loadData()    
    },[])

    useEffect(() => {
        if(catArList.length <= 0){
            setData(false)
        }else{
            setData(true)
        }
    },[catArList])

    console.log(data)

    useEffect(() => {
        async function loadDataCat() {
            if(params.id){
                try{
                    const res = await getOneCatUserApi(params.id)
                
                    const titleARM = document.getElementById('titleARM')
                    titleARM.innerHTML = `Violencia ${res?.nameCat}`

                    const textAttentionMA = document.getElementById('textAttentionMA')
                    textAttentionMA.innerHTML = res?.descriptionCat

                    const imageAttentionMI = document.getElementById('imageAttentionMI')
                    imageAttentionMI.src = res?.imageCat
                }catch(e){
                    console.log(e)
                }finally{
                    setLoading(false)
                }
            }
        }
        loadDataCat()
    },[])

    if(loading){
        return (
            <div className='containerLoaderMI'>
                <Loader />
            </div>
        )
    }

    return(
        <section className='sectionAttention'>
            <div className='containerAttention'>
                <div className='textAttentionMI'>
                    <div>
                        <h4>
                            Rutas de Atención
                        </h4>
                        <h2 id='titleARM'>

                        </h2>
                    </div>
                    <div>
                        <img className='imgMI' id='imageAttentionMI' alt="attentionImg" />
                    </div>
                </div>

                <div className='containerTextMA'>
                    <textarea 
                        className='descriptionTextMA' 
                        id='textAttentionMA' 
                        rows={15}            
                        readOnly = {true}                              
                    >
                    </textarea>
                </div>

                <div className='containerTextMIR'>
                    <p>
                        Las secciones correspondientes a la ruta de atención con 
                        información especifica se listaran en el siguiente apartado, 
                        da click en la que quieras ver.
                    </p>
                </div>

                <div className='containerAllCatAr'>
                {
                    catArList.length > 0 
                    ?
                    <div className='containerMoreInfoAtt'>
                        {catArList.map(cat => {
                        return(
                            <div className='containerSingleMI'>
                                <CardMoreInfo 
                                    key = {cat.id}
                                    id = {cat.id}
                                    nameAttention = {cat.nameAttention}
                                    descriptionAttention = {cat.descriptionAttention}
                                    imageAttention = {cat.imageAttention}
                                />
                            </div>
                        )
                        })}
                    </div>
                    :

                    <div className='containerNotData'>
                        <div>
                            <CiFaceFrown className='iconNotDataA'/>
                        </div>
                        <p>
                            No hay información de las secciones que hacen parte de este tipo
                            de violencia, gracias por ingresar y vuelve más tarde.
                        </p>
                    </div>
                }
                </div>

            </div>
        </section>
    )
}

export default MoreInfoRoute