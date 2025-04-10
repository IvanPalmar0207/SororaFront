//Styles
import '../../styles/session/moreInfoTip.css'
//React-router-dom
import { data, useParams } from 'react-router-dom'
//TipContext
import { useTip } from '../../context/tipContext'
//React-hooks
import { useEffect } from 'react'
import { useState } from 'react'
//Icons
import likeIcon from '../../assets/tips/likeIcon.svg'
import warnIcon from '../../assets/tips/warnHand.svg'
//Components
import Loader from '../../components/loader'
function MoreInfoTip(){

    //React-router
    const params = useParams()

    //TipContext
    const {getOneTipUserApi} = useTip()

    const [dataTip, setDataTip] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadData() {
            if(params.id){
                try{
                    const res = await getOneTipUserApi(params.id)
                    setDataTip(res.data)
                }catch(e){
                    console.error(e)
                }finally{
                    setLoading(false)
                }
            }
        }
        loadData()
    },[params.id])    

    if(loading){
        return (
            <div className='containerLoaderAl'>
                <Loader />
            </div>
        )
    }

    return(
        <section className='sectionMoreTip'>
            <div className='containerMoreTip'>
                <div className='textMoreTip'>
                    <h4>
                        Tips
                    </h4>
                    <h2>
                        {dataTip.nameTip.toUpperCase()}
                    </h2>
                </div>
                <div className='containerDesMoreTip'>
                    <p>
                        {dataTip.descriptionTip}
                    </p>
                </div>

                <div className='containerSit goodBack'>
                    <div className='sitContainerImage'>
                        <div>
                            <img src={likeIcon} alt="Like Icon" />
                        </div>
                        <h3>
                            Situación con 
                            <br />
                            respuesta <span className='yellowTitleSit'>saludable</span>
                        </h3>
                    </div>
                    <textarea
                        rows={15}
                        disabled = {true}
                    >
                        {
                            dataTip.badSituation
                        }
                    </textarea>
                </div>

                <div className='containerSit badBack'>
                    <div className='sitContainerImage'>
                        <div>
                            <img src = {warnIcon} alt = "warnIcon" />
                        </div>
                        <h3>
                            Situación con
                            <br />
                            respuesta <span className='purpleBad'>no saludable</span>
                        </h3>
                    </div>
                    <textarea
                        disabled = {true}
                        rows={15}
                    >
                        {
                            dataTip.badSituation
                        }
                    </textarea>
                </div>  
            </div>
        </section>
    )
}

export default MoreInfoTip