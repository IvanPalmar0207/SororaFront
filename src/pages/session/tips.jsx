//Styles
import '../../styles/session/tips.css'
//Images
import tipsImage from '../../assets/whatToDo/tips.svg'
//Tips Context
import { useTip } from '../../context/tipContext'
//Components
import CardTip from '../../components/cardTip'
import { useEffect } from 'react'

function Tips(){

    //TipContext
    const {allTipsUserApi, tipUserList} = useTip()

    useEffect(() => {        
        allTipsUserApi()            
    },[tipUserList])

    return(
        <section className='sectionTips'>
            <div className='containerTips'>
                <div className='containerBannerTip'>
                    <div className='containerTitle'>
                        <h3>
                            Tips
                        </h3>
                        <h2>
                            ¿Cómo es una
                            <br />
                            relación saludable?
                        </h2>
                    </div>
                    <div className='containerImageTip'>
                        <img src={tipsImage} alt="tipImage" />
                    </div>
                </div>

                <div className='containerAllTips'>
                    {
                        tipUserList.map((tip) => {
                            return(
                                <div className='singleTip' key={tip.id} >
                                    <CardTip                                         
                                        image={tip.imageTip} 
                                        name={tip.nameTip}
                                    />
                                </div>                  
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default Tips