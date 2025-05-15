//Styles
import '../../styles/session/myRelation.css'
//Images
import relationImg from '../../assets/myRelation/relationImag.svg'
//UseExam
import { useExam } from '../../context/examContext'
import { useEffect, useState } from 'react'
//Component
import Card from '../../components/card'
import Loader from '../../components/loader'
import DescriptionSect from '../../components/descriptionSection'

const textDesc = () => {
    return(
        <span>
            Realiza los test para identificar la presencia de violencias
            psicológica, económica, física y/o sexual en tu relación de
            pareja y clarificar el estado actual de tu relación.
        </span>
    )
}

function MyRelationship(){

    //Exam Methods
    const {allExamsApi, allExam} = useExam()

    //Loading Function
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try{
            allExamsApi()
        }catch(e){
            console.log(e)
        }finally{
            setLoading(false)
        }
    },[allExam])

    if(loading) return <Loader />

    return(
        <section >
            <DescriptionSect text={textDesc()} />
            <div className='sectionRelation'>
                {
                    allExam.length > 0
                    ?
                        allExam.map(exam => {
                            return(
                                <div key={exam.id} className='containerRelation'>
                                    <Card 
                                        title={'Test'}         
                                        routeTab={'relation'}                       
                                        text={exam.titleExam} 
                                        icon={relationImg}
                                        route={`boilFrog/${exam.id}`}
                                    />
                                </div>
                            )
                        })
                    :
                        <div>
                            No hay datos para mostrar, gracias por visitar esta sección.
                        </div>
                }
            </div>
        </section>
    )
}

export default MyRelationship