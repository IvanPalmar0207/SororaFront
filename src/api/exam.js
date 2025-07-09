//Axios client
import apiRequest from "./api";
//Add Exam
export const addExam = (exam) => {
    return apiRequest.post('apiSora/exam/exam/', exam)
}
//Update Exam
export const updateExam = (id, exam) => {
    return apiRequest.put(`apiSora/exam/exam/${id}/`, exam)
}
//Delete Exam
export const deleteExam = (id) => {
    return apiRequest.delete(`apiSora/exam/exam/${id}/`)
}
//Get One Exam
export const getOneExam = (id) => {
    return apiRequest.get(`apiSora/exam/exam/${id}/`)
}
//All Exams
export const allExams = () => {
    return apiRequest.get('apiSora/exam/exam/')
}

//Manage Question
//Add Question 
export const addQuestion = (idExam, question) => {
    return apiRequest.post(`apiSora/question/question/?id=${idExam}`, question)
}
//Delete Question
export const deleteQuestion = (idExam, idQuest) => {
    return apiRequest.delete(`apiSora/question/question/${idQuest}/?id=${idExam}`)
}
//All Questions
export const allQuestions = (idExam) => {
    return apiRequest.get(`apiSora/question/question/?id=${idExam}`)
}

//Manage Score
//Add Score
export const addScore = (idExam, score) => {
    return apiRequest.post(`apiSora/score/score/?id=${idExam}`, score)
}
//Delete Score
export const deleteScore = (idExam, idScore) => {
    return apiRequest.delete(`apiSora/score/score/${idScore}/?id=${idExam}`)
}
//All Scores
export const allScores = (idScore) => {
    return apiRequest.get(`apiSora/score/score/?id=${idScore}`)
}

//Manage Actions
//Add Action
export const addAction = (idScore, action) => {
    return apiRequest.post(`apiSora/action/action/?id=${idScore}`, action)
}
//Delete Action
export const deleteAction = (idScore, idAction) => {
    return apiRequest.delete(`apiSora/action/action/${idAction}/?id=${idScore}`)
}
//Get All Actions
export const getAllAction = (idScore) => {
    return apiRequest.get(`apiSora/action/action/?id=${idScore}`)
}