//Styles
import '../../styles/session/testInfo.css'
//React-router-dom
import { useParams, Link, useNavigate } from "react-router-dom"
//UseExam
import { useExam } from "../../context/examContext"
//React-hooks
import { useEffect, useState } from 'react'
//Material Ui
import { Button } from '@mui/material'
//Icons
import { IoPaperPlaneOutline } from "react-icons/io5";
import { CiFaceFrown } from "react-icons/ci";
//Images
import greenFrog from '../../assets/testExam/greenFrog.png'
import yellowFrog from '../../assets/testExam/yellowFrog.png'
import redFrog from '../../assets/testExam/redFrog.png'
function TestInfo(){

    //React-router-dom
    const params = useParams()

    //Exam Methods
    const {
        allQuestionsApi, 
        questions, 
        getOneExamApi, 
        allScoresApi, 
        score,
        getAllActionApi,
        actions
    } = useExam()    

    useEffect(() => {
        allQuestionsApi(params.id)                
    },[])

    const [loadings, setLoadingS] = useState(true)

    useEffect(() => {
        async function loadData() {
            if(params.id){
                try{
                    allScoresApi(params.id)
                }catch(e){
                    console.error(e)
                }finally{
                    setLoadingS(false)
                }
            }
        }
        loadData()
    },[score])

    const [examData, setExamData] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadData() {
            if(params.id){
                try{
                    const res = await getOneExamApi(params.id)
                    setExamData(res)                
                }catch(e){
                    console.error(e)
                }finally{
                    setLoading(false)
                }
            }
        }
        loadData()
    },[])

    //Exam Logic

    const [questionActive, setQuestionActive] = useState(0)    

    const currectQuestion = questions[questionActive]

    const [scorePlus, setScorePlus] = useState(0)

    const [criticalPoint, setCriticalPoint] = useState(null)
    const [secondPoint, setSecondPoint] = useState(null)
    const [thirdPoint, setThirdPoint] = useState(null)

    const nextQuestionYes = () => {
        const newScore = scorePlus + questions[questionActive]?.scoreQuestion
        const lastScore = score[score.length - 1]
        const secondLastScore = score[score.length - 2]
        const thirdLastScore = score[score.length - 3]

        if(newScore > secondLastScore.minScore && secondPoint === null){
            setSecondPoint(scoreBack)
        }
        else if (newScore > lastScore.minScore && criticalPoint === null) {
            setCriticalPoint(scoreBack);
        }        
        else if(newScore > thirdLastScore.minScore && thirdPoint === null){
            setThirdPoint(scoreBack)
        }

        setScorePlus(newScore)
        setQuestionActive(before => before + 1)        
        setScoreBack(before => before + 1)
    }    

    const nexQuestionNo = () => {
        setQuestionActive(before => before + 1)
        setScoreBack(before => before + 1);
    }        

    const calculateScore = (scorex) => {
        
        if(score.length === 0){
            return null
        }

        const lastScore = score[score.length - 1]        

        if(scorex > lastScore.maxScore){
            return lastScore
        }
        
        return score.find(
            scores => scorex >= scores.minScore && scorex <= scores.maxScore
        )                                
    }

    useEffect(() => {
        if(questionActive >= questions.length){
            const scoreRes = calculateScore(scorePlus)
            if(scoreRes){
                getAllActionApi(scoreRes.id)
            }
        }        
    },[questions.length, score])
    
    const scoreFinal = () => {
        
        const findResult = calculateScore(scorePlus)
        
        const backResult = () => {
            if(findResult.id === 1){
                return 'blueBlack'
            }else if(findResult.id === 2){
                return 'yellowBack'
            }
            else if(findResult.id === 3){
                return 'orangeBack'
            }else if(findResult.id === 4){
                return 'redBack'
            }else{
                return 'orangeBack'
            }            
        }

        return findResult 
        ? 
            (
                <div className='containerScore'>
                    {findResult.violenceType ? 
                    <h3 className={`titleScore ${backResult()}`}>
                        {findResult.violenceType}
                    </h3>
                    : null}
                    <div className='messageScore'>
                        {findResult.messageScore}
                    </div>
                    <div className='containerTextScore'>
                        <p>
                            Para recibir orientación puedes acudir a:
                        </p>
                        <div className='containerActions'>
                            {
                                actions.length > 0
                                ?
                                actions.map(action => {
                                    return(
                                        <div className='actionBackStyle'>
                                            <Link className='linkAction' to={`/${action.linkAction}`}>
                                                {action.nameAction}
                                            </Link>
                                        </div>
                                    )
                                })
                                :
                                null
                            }
                        </div>
                    </div>
                    <div className='supportNetScore'>
                        <p>
                            No olvides que también cuentas con una red de apoyo:
                        </p>
                        <div className='iconSupportNet'>
                            <Link to={'/connectNet'}>
                                <IoPaperPlaneOutline className='iconSN'/>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        :
            null
        
    }
    
    //Thermo Background and Termo Logic
    const [scoreBack, setScoreBack] = useState(1)

    const totalQuestions = questions.length
    
    const getBoxColor = (index) => {
        
        if(index >= scoreBack){
            return '#c6c9c5';
        }        

        if(criticalPoint !== null && index >= criticalPoint) return '#ff6b6b';

        if(secondPoint !== null && index >= secondPoint)return '#dc7e3e'

        if(thirdPoint !== null && index >= thirdPoint) return '#e8a656'

        else return '#4ade18';
    };

    const getFrogImage = () => {
        const percentage = totalQuestions > 0 ? (scorePlus / totalQuestions) * 100 : 0

        if(percentage < 30){
            return greenFrog
        }
        if(percentage < 60){
            return yellowFrog
        }
        return redFrog
    };

    //Loading
    if(loading){
        return <div>Loading</div>
    }

    return(
        <section className='sectionTestInfo'>
            <div className='containerTestInfo'>
                <div className='containerThermo'>
                    <div className='containerFrog'>
                        <img src={getFrogImage()} alt="frogImage" />
                    </div>
                    <div className='dataThermo'>       
                    {
                        questions.length > 0
                        ?                        
                        questions.map((_, index) => (
                            <div 
                                key={index}
                                className={`progressBox ${index < scoreBack ? 'filled' : ''}`}
                                style={{ 
                                    backgroundColor: getBoxColor(index),                                    
                                    transform: index === scoreBack - 1 ? 'scale(1.1)' : 'scale(1)',
                                    boxShadow: index === scoreBack - 1 ? '0 0 8px rgba(255, 193, 7, 0.7)' : 'none'
                                }}
                            />
                        ))
                        :
                        null
                    }
                    </div>
                </div>
                <div className='containerExam'>
                    <div className='containerTitleExam'>
                        <h4>
                            Conecta
                        </h4>
                        <h2>
                            {examData.titleExam}
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
                            {
                                score.length > 0
                                ?
                                    <div>
                                        <div className='containerButtonsExam'>
                                            <Button className='buttonExam' onClick={nextQuestionYes}>
                                                Si    
                                            </Button>    
                                            <Button className='buttonExam' onClick={nexQuestionNo}>
                                                No
                                            </Button>
                                        </div>          
                                        <div className='containerNextButton'>
                                            <Button className='buttonNextTest' onClick={nexQuestionNo}>
                                                Siguiente
                                            </Button>    
                                        </div>       
                                    </div>
                                :
                                null
                            }
                        </div>
                    :                    
                    scoreFinal()                    
                    :
                    <div className='examNotData'>
                        <div className='containerIconExam'>
                            <CiFaceFrown className='iconExamND'/>
                        </div>
                        No hay preguntas para mostrar, gracias por visitar 
                        este test, intenta ingresar a otro examen.
                    </div>
                }

                </div>
            </div>
        </section>
    )
}

export default TestInfo