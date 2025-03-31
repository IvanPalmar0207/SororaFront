//Styles
import '../../styles/session/myRelation.css'
//Images
import relationImg from '../../assets/myRelation/relationImag.svg'
//Card Component
import Card from '../../components/card'
//UseExam
import { useExam } from '../../context/examContext'
import { useEffect } from 'react'
function MyRelationship(){

    //Exam Methods
    const {allExamsApi, allExam} = useExam()

    useEffect(() => {
        allExamsApi()
    },[allExam])

    return(
        <section className='sectionRelation'>
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
                                    route={`testInfo/${exam.id}`}
                                />
                            </div>
                        )
                    })
                :
                    <div>
                        No hay datos para mostrar, gracias por visitar esta sección.
                    </div>
            }
        </section>
    )
}

export default MyRelationship