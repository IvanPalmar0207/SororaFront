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

    const addExamApi = async (exam) => {
        try{
            const res = await addExam(exam)
        }catch(e){
            console.error(e)
        }
    }

    const updateExamApi = async (id, exam) => {
        try{
            const res = await updateExam(id, exam)
        }catch(e){
            console.error(e)
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
    const addQuestionApi = async (idExam, question) => {
        try{
            const res = await addQuestion(idExam, question)
        }catch(e){
            console.error(e)
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
            questions
        }}>
            {children}
        </ExamContext.Provider>
    )
}