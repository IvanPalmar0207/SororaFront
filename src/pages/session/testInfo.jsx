//Styles
import '../../styles/session/testInfo.css'
//React-router-dom
import { useParams, Link } from "react-router-dom"
//UseExam
import { useExam } from "../../context/examContext"
//React-hooks
import { useEffect, useState } from 'react'
//Material Ui
import { Button } from '@mui/material'
//Icons
import { IoPaperPlaneOutline } from "react-icons/io5";
function TestInfo(){

    //React-router-dom
    const params = useParams()

    //Exam Methods
    const {allQuestionsApi, questions, getOneExamApi} = useExam()

    useEffect(() => {
        allQuestionsApi(params.id)        
    },[])

    const [examData, setExamData] = useState([])

    useEffect(() => {
        async function loadData() {
            if(params.id){
                const res = await getOneExamApi(params.id)
                setExamData(res)
                console.log(res)
            }
        }
        loadData()
    },[])

    //Exam Logic

    const [questionActive, setQuestionActive] = useState(0)    

    const currectQuestion = questions[questionActive]

    const [scorePlus, setScorePlus] = useState(0)

    const nextQuestionYes = () => {
        setScorePlus(before => before + currectQuestion?.scoreQuestion)
        setQuestionActive(before => before + 1)
    }    

    const nexQuestionNo = () => {
        setQuestionActive(before => before + 1)
    }    
    
    const scoreFinal = (score) => {
        if(score === 0){
            return(
                <div>
                    <h3>
                        No se evidencia violencia en pareja
                    </h3>
                    <p>
                        ¡Excelente! La puntuación indica que tu relación es
                        saludable porque respeta los limites emocionales, físicos y
                        sexuales sin indicadores de signos de alarma.
                    </p>
                    <p>
                        Para recibir orienticación puedes acudir a:
                    </p>
                    <div>
                        <Link to={'/alternatives'}>
                            Acciónes Alternativas
                        </Link>
                    </div>
                    <div>
                        <Link to={'/tips'}>
                            Tips de parejas saludables
                        </Link>
                    </div>
                    <div>
                        <p>
                            No olvides que también cuentas con una
                            red de apoyo:
                        </p>
                        <div>
                            <Link to={'/connectNet'}>
                                <IoPaperPlaneOutline />
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
        else if(score >= 1 || score <= 12){
            return(
                <div>
                    <h3>
                        Violencia Presente
                    </h3>
                    <p>
                       Amiga, ¡Reflexiona!, La puntuación indica que posiblemente
                       la violencia psicológica está presente en tu relación y puede
                       aumentar. 
                    </p>
                    <p>
                        Para recibir orienticación puedes acudir a:
                    </p>
                    <div>
                        <Link to={'/attention'}>
                            Atención Psicologica
                        </Link>
                    </div>
                    <div>
                        <Link to={'/attention'}>
                            Atención Jurídica
                        </Link>
                    </div>
                    <div>
                        <Link to={'/connectNet'}>
                            Red de Apoyo
                        </Link>
                    </div>
                    <div>
                        <p>
                            No olvides que también cuentas con una
                            red de apoyo:
                        </p>
                        <div>
                            <Link to={'/connectNet'}>
                                <IoPaperPlaneOutline />
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
        else if(score >= 13 || score <= 25){            
            return(
                <div>
                    <h3>
                        La violencia está en aumento
                    </h3>
                    <p>
                       Amiga, ¡Debes de actuar! La puntuación indica que la 
                       violencia psicológica y la dependencia está en aumento 
                       ¡Ten cuidado!, tus respuestas son señales de una posible
                       presencia de violencia psicológica grave en tu relación. Si
                       está violencia sigue sucediendo es my probable que pueda tornarse
                       física o sexual
                    </p>
                    <p>
                        Para recibir orienticación puedes acudir a:
                    </p>
                    <div>
                        <Link to={'/attention'}>
                            Atención Psicologica
                        </Link>
                    </div>
                    <div>
                        <Link to={'/attention'}>
                            Atención Jurídica
                        </Link>
                    </div>
                    <div>
                        <Link to={'/connectNet'}>
                            Red de Apoyo
                        </Link>
                    </div>
                    <div>
                        <p>
                            No olvides que también cuentas con una
                            red de apoyo:
                        </p>
                        <div>
                            <Link to={'/connectNet'}>
                                <IoPaperPlaneOutline />
                            </Link>
                        </div>
                    </div>
                </div>
            )
        } 
        else if(score > 25){
            return(
                <div>
                    <h3>
                        La violencia se agudiza
                    </h3>
                    <p>
                        ¡Puedes estar en peligro, actúa y busca ayuda profesional!
                        Tus respuestas a estas preguntas son señales de una posible 
                        presencia de violencias psicológica, física y/o sexual en tu relación.
                        Amiga tu integridad personal se puede encontrar en peligro. Sigue
                        alguna de las rutas de atención que aquí te sugerimos para consultar
                        a un/a piscólogo/a, un/a abogado o denunciando la situación que 
                        estás viviendo.
                    </p>
                    <p>
                        Para recibir orienticación puedes acudir a:
                    </p>
                    <div>
                        <Link to={'/attention'}>
                            Rutas de Atención
                        </Link>
                    </div>
                    <div>
                        <Link to={'/trustNet'}>
                            Contactos de Emergencia
                        </Link>
                    </div>
                    <div>
                        <Link to={'/connectNet'}>
                            Red de Apoyo
                        </Link>
                    </div>
                    <div>
                        <Link to={'/attention'}>
                            Botón de Alarma
                        </Link>
                    </div>
                    <div>
                        <p>
                            No olvides que también cuentas con una
                            red de apoyo:
                        </p>
                        <div>
                            <Link to={'/connectNet'}>
                                <IoPaperPlaneOutline />
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return(
        <section className='sectionTestInfo'>
            <div className='containerTestInfo'>
                <div className='containerThermo'>
                    Termometro
                </div>
                <div className='containerExam'>
                    <div className='containerTitleExam'>
                        <h4>
                            Conecta
                        </h4>
                        <h2>
                            
                        </h2>
                    </div>

                {
                    questions.length > 0
                    ?
                    questionActive < questions.length
                    ?
                        <div className='containerDataExam'> 
                            <h2>
                                {questionActive + 1}.
                            </h2>
                            <p className='containerQuestionExam'>
                                {currectQuestion?.nameQuestion}       
                            </p>
                            <div className='containerButtonsExam'>
                                <Button className='buttonExam' onClick={nextQuestionYes}>
                                    Si    
                                </Button>    
                                <Button className='buttonExam' onClick={nexQuestionNo}>
                                    No
                                </Button>
                            </div>          
                            <div>
                                <Button>
                                    Siguiente
                                </Button>    
                            </div>       
                        </div>
                    :
                    scoreFinal(scorePlus)
                    :
                    <div>
                        No hay preguntas para mostrar, gracias por visitar este test, intenta en otro.
                    </div>
                }

                </div>
            </div>
        </section>
    )
}

export default TestInfo