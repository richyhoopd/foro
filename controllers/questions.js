'use strict'

const questions = require('../models/index').questions

async function createQuestion (req, h) {
    let result

    try {
        result = await questions.create(req.payload, req.state.user)
        console.log(`pregunta creada con el ID ${result}`)
    } catch (error) {
        console.error(`ocurrio un error: ${error}`)

        return h.view('ask', {
            title: 'crear pregunta',
            error: 'problemas creando la pregunta'
        }).code(500).takeover()
    }

    return h.response(`pregunta creada con el ID: ${result}`)

}

async function answerQuestion (req, h) {
    let result
    try {
        result = await questions.answers(req.payload, req.state.user)
        console.log(`respuesta creada: ${result}`)
    } catch (error) {
        console.error(error)
    }

    return h.redirect(`/question${req.payload.id}`)
}

module.exports = {
    createQuestion: createQuestion,
    answerQuestion: answerQuestion
}