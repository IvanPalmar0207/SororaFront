//Context-hooks
import { createContext, useContext } from "react";
//Reacct-hooks
import { useState } from "react";
//Exam Methods
import { addExam } from "../api/exam";
import { updateExam } from "../api/exam";
import { deleteExam } from "../api/exam";
import { getOneExam } from "../api/exam";
import { allExams } from "../api/exam";
//Question Methods
import { addQuestion } from "../api/exam";
import { deleteQuestion } from "../api/exam";
import { allQuestions } from "../api/exam";
//Score Methods
import { addScore } from "../api/exam";
import { deleteScore } from "../api/exam";
import { allScores } from "../api/exam";
//Action Methods
import { addAction } from "../api/exam";
import { deleteAction } from "../api/exam";
import { getAllAction } from "../api/exam";
//SweetAlert
import Swal from "sweetalert2";
//React-router-dom
import { useNavigate } from "react-router-dom";
//ExamContext
export const ExamContext = createContext()

//UseExam
export const useExam = () => {
    const context = useContext(ExamContext)
    if(!context){
        throw new Error('Must be within a context provider')
    }
    return context
}

//ExamProvider
export const ExamProvider = ({children}) => {

    //All Exams 
    const [allExam, setAllExams] = useState([])

    const navigate = useNavigate()

    const addExamApi = async (exam) => {
        try{
            const res = await addExam(exam)
            Swal.fire({
                icon : 'success',
                title : 'Examen Agregado',
                text : 'El examen ha sido agregado correctamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            navigate('/manageExams')
        }catch(e){
            Swal.fire({
                icon : 'info',
                title : 'Error Agregando',
                text : 'Hubo un error agregando, intenta nuevamente',
                confirmButtonColor : '#39b9bf',
                confirmButtonText : 'Siguiente'
            })
        }
    }

    const updateExamApi = async (id, exam) => {
        try{
            const res = await updateExam(id, exam)
            Swal.fire({
                icon : 'success',
                title : 'Examen actualizado',
                text : 'El examen ha sido actualizado correctamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            navigate('/manageExams')
        }catch(e){
            Swal.fire({
                icon : 'info',
                title : 'Error Actualizando',
                text : 'Hubo un error actualizando, intenta nuevamente',
                confirmButtonColor : '#39b9bf',
                confirmButtonText : 'Siguiente'
            })
        }
    }

    const deleteExamApi = async (id) => {
        try{
            const res = await deleteExam(id)
        }catch(e){
            console.error(e)
        }
    }

    const getOneExamApi = async (id) => {
        try{
            const res = await getOneExam(id)
            return res.data
        }catch(e){
            console.error(e)
        }
    }

    const allExamsApi = async () => {
        try{
            const res = await allExams()
            setAllExams(res.data)
        }catch(e){
            console.error(e)
        }
    }

    //Question Meethods
    const addQuestionApi = async (idExam, question, params) => {
        try{
            const res = await addQuestion(idExam, question)
            Swal.fire({
                icon : 'success',
                title : 'Pregunta Agregada',
                text : 'La pregunta ha sido agregada correctamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            navigate(`/manageQuestion/${params}`)
        }catch(e){
            Swal.fire({
                icon : 'info',
                title : 'Error Agregando',
                text : 'Hubo un error agregando la pregunta, intenta nuevamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
        }
    }

    const deleteQuestionApi = async (idExam, idQues) => {
        try{
            const res = await deleteQuestion(idExam, idQues)
        }catch(e){
            console.error(e)
        }
    }

    const [questions, setQuestions] = useState([])

    const allQuestionsApi = async (idExam) => {
        try{
            const res = await allQuestions(idExam)
            setQuestions(res.data)
        }catch(e){
            console.error(e)
        }
    }

    //Manage Scores

    const [score, setScore] = useState([])

    const addScoreApi = async(idExam, score, params) => {
        try{
            const res = await addScore(idExam, score)
            Swal.fire({
                icon : 'success',
                title : 'Puntaje Agregado',
                text : 'El puntaje ha sido agregado correctamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            navigate(`/manageScore/${params}`)
        }catch(e){
            Swal.fire({
                icon : 'info',
                title : 'Error Agregando',
                text : 'Hubo un error agregando el puntaje, intenta nuevamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
        }
    }

    const deleteScoreApi = async (idExam, idScore) => {
        try{    
            const res = await deleteScore(idExam, idScore)
        }catch(e){
            console.error(e)
        }
    }

    const allScoresApi = async (idScore) => {
        try{
            const res = await allScores(idScore)
            setScore(res.data)
        }catch(e){
            console.error(e)
        }
    }

    //Manage Actions
    const [actions, setActions] = useState([])

    const addActionApi = async(idScore, action, params) => {
        try{
            const res = await addAction(idScore, action)
            Swal.fire({
                icon : 'success',
                title : 'Acción Agregada',
                text : 'La acción ha sido agregada correctamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            navigate(`/manageAction/${params}`)
        }catch(e){
            Swal.fire({
                icon : 'info',
                title : 'Error Agregando',
                text : 'Hubo un error agregando la acción, intenta nuevamente.',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
        }
    }

    const deleteActionApi = async (idScore, idAction) => {
        try{
            const res = await deleteAction(idScore, idAction)
        }catch(e){
            console.error(e)
        }
    }

    const getAllActionApi = async (idScore) => {
        try{
            const res = await getAllAction(idScore)
            setActions(res.data)
        }catch(e){
            console.error(e)
        }
    }

    return (
        <ExamContext.Provider value={{
            addExamApi,
            updateExamApi,
            deleteExamApi,
            getOneExamApi,
            allExamsApi,
            allExam,

            addQuestionApi,
            deleteQuestionApi,
            allQuestionsApi,
            questions,

            addScoreApi,
            deleteScoreApi,
            allScoresApi,
            score,

            addActionApi,
            deleteActionApi,
            getAllActionApi,
            actions
        }}>
            {children}
        </ExamContext.Provider>
    )
}