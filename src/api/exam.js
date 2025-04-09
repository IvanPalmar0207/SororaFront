//Axios client
import apiRequest from "./api";
//Add Exam
export const addExam = (exam) => {
    return apiRequest.post('api/exam/exam/', exam)
}
//Update Exam
export const updateExam = (id, exam) => {
    return apiRequest.put(`api/exam/exam/${id}/`, exam)
}
//Delete Exam
export const deleteExam = (id) => {
    return apiRequest.delete(`api/exam/exam/${id}/`)
}
//Get One Exam
export const getOneExam = (id) => {
    return apiRequest.get(`api/exam/exam/${id}/`)
}
//All Exams
export const allExams = () => {
    return apiRequest.get('api/exam/exam/')
}

//Manage Question
//Add Question 
export const addQuestion = (idExam, question) => {
    return apiRequest.post(`api/question/question/?id=${idExam}`, question)
}
//Delete Question
export const deleteQuestion = (idExam, idQuest) => {
    return apiRequest.delete(`api/question/question/${idQuest}/?id=${idExam}`)
}
//All Questions
export const allQuestions = (idExam) => {
    return apiRequest.get(`api/question/question/?id=${idExam}`)
}

//Manage Score
//Add Score
export const addScore = (idExam, score) => {
    return apiRequest.post(`api/score/score/?id=${idExam}`, score)
}
//Delete Score
export const deleteScore = (idExam, idScore) => {
    return apiRequest.delete(`api/score/score/${idScore}/?id=${idExam}`)
}
//All Scores
export const allScores = (idScore) => {
    return apiRequest.get(`api/score/score/?id=${idScore}`)
}

//Manage Actions
//Add Action
export const addAction = (idScore, action) => {
    return apiRequest.post(`api/action/action/?id=${idScore}`, action)
}
//Delete Action
export const deleteAction = (idScore, idAction) => {
    return apiRequest.delete(`api/action/action/${idAction}/?id=${idScore}`)
}
//Get All Actions
export const getAllAction = (idScore) => {
    return apiRequest.get(`api/action/action/?id=${idScore}`)
}