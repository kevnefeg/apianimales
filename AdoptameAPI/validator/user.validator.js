const { validateResult } = require('../helpers/validateHelper')
const { check } = require('express-validator')
const req = require('express/lib/request')
const res = require('express/lib/response')



const validateCreate = [  //fullname, email, password, phone, 

    //TODO: Agregar la validaion de profilepicture

    check('fullname')
        .exists()
        .not()
        .isEmpty(),

    check('email')
        .exists()
        .isEmail()
        .normalizeEmail(),

    check('password')
        .isString()
        .isLength({ min: 8 })
        .not()
        .isLowercase()
        .withMessage('El password debe tener al menos 8 caracteres') //PREGUNTAR A NESTOR, como funciona el .withMessage()
        .not()
        .isUppercase()
        .not()
        .isNumeric()
        .not()
        .isAlpha()
        .not()
    ,

    check('phone')
        .exists()
        .not()
        .isEmpty()
        .isNumeric()
        .isMobilePhone('es-SV'), //Solo numeros salvadoreños
]

module.exports = { validateCreate }