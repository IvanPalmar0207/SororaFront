//React-hooks
import { useEffect, useState } from "react"
//React-Router-dom
import { Link, useParams } from "react-router-dom"
//Styles
import '../../styles/session/boilFrog.css'
//Images
import yellowFrog from '../../assets/testExam/yellowFrog.png'
import testImg from '../../assets/testExam/testImg.png'
//Icons
import { IoArrowForwardCircleSharp } from "react-icons/io5";
//TestContext
import { useExam } from "../../context/examContext";
//Components
import Loader from "../../components/loader";
function BoilFrog(){

    //Params
    const params = useParams()

    //Exam State Info
    const [examInfo, setExamInfo] = useState([])
    //Loading State Info
    const [loading, setLoading] = useState(true)

    //Exam Context
    const {getOneExamApi} = useExam()

    //Load Exam Data
    useEffect(() => {
        async function loadData() {
            if(params.id){
                try{
                    const res = await getOneExamApi(params.id)
                    setExamInfo(res)
                }catch(e){
                    console.error(e)
                }finally{
                    setLoading(false)
                }
            }
        }
        loadData()
    },[params])

    if(loading) return (
        <div className='containerLoaderAl'>
            <Loader />
        </div>
    )

    return(
        <section className = "sectionBoil">
            <div className = "containerBoil">
                <div className="containerTitleBoil">
                    <div>
                        <h4>
                            Test
                        </h4>
                        <h2>
                            {examInfo.titleExam}
                        </h2>
                    </div>
                    <div className="containerImgTestBoil">
                        <img src={testImg} alt="testImg" />
                    </div>
                </div>
                
                <div className="containerImgTextBoil">
                    <h2>
                        Síndrome de 
                        <br />
                        <span>la rana hervida</span>
                    </h2>
                    <div className="frogContainerBoil">
                        <img src={yellowFrog} alt="Frog Image" />
                    </div>
                </div>
                
                <div className="containerTextPBoil">
                    <p>
                        Si sumergimos una rana en un recipiente con agua hervida, <span className="colorBoil">¿cuál crees que
                        será su reacción?</span> Seguramente saltará de inmediato.
                    </p>
                    <p>
                        Pero, <span className="colorBoil">¿qué crees que ocurriría si la ponemos en agua fría y lentamente
                        vamos subiendo la temperatura?</span> La rana no percibirá el peligro y puede 
                        que se cocine hasta morir.
                    </p>
                    <p className="backBoilP">
                        Lo mismo puede ocurrir en una <span className="colorBoil">relación de pareja</span> en la que hay violencia.
                        Las agresiones pueden empezar de forma sutil y llegar hasta la violencia 
                        física o sexual. <span className="colorBoil">La violencia escala</span> hasta que ya puede ser demasiado 
                        tarde.
                    </p>
                </div>

                <div className="containerGoBoil">
                    <h4>
                        ¡Salta a tiempo!
                        <br />
                        Que el amor no te cuesta la vida.
                    </h4>
                    <Link to={`/testInfo/${params.id}`}>
                        <div>
                            <IoArrowForwardCircleSharp className="iconBoil"/>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BoilFrog