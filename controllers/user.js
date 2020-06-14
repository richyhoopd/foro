'use strict'

const users = require('../models/index').users
const boom = require('boom')
const Boom = require('boom')

async function createUser (req, h) {
  let result
  try {
    result = await users.create(req.payload)
  } catch (error) {
    console.error(error)
    return h.view('register', {
      title: 'registro',
      error: 'error creando el usuario'
    })
  }

  return h.view('register', {
    title: 'registro',
    success: 'usuario creado exitosamente'
  })
}

function logout (req, h) {
  return h.redirect('/login').unstate('user')
}

async function validateUser (req, h) {
  let result
  try {
    result = await users.validateUser(req.payload)
    if (!result) {
      return h.view('login', {
        title: 'Login',
        error: 'Email y/o clave incorrectas'
      })
    }
  } catch (error) {
    console.error(error)
    return h.view('login', {
      title: 'Login',
      error: 'Problemas validando al usuario'
    })
  }

  return h.redirect('/').state('user', {
    name: result.name,
    email: result.email
  })
}

function failValidation (req, h, err) {
  return Boom.badRequest('fallo la validacion', req.payload)
}

module.exports = {
  createUser: createUser,
  logout: logout,
  validateUser: validateUser,
  failValidation: failValidation
}
