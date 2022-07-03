const { validateResult } = require('../helpers/validateHelper')
const { check } = require('express-validator')
const req = require('express/lib/request')
const res = require('express/lib/response')


const validateCreate = [  //name, description,price,image

    check('name')
        .exists()
        .not()
        .isEmpty()
        .isString()
    ,

    check('description')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 0, max: 200 }),

    check('price') //implementar validacion de moneda .isCurrency()
        .exists()
        .not()
        .isEmpty()
        .isCurrency(),

]

module.exports = { validateCreate }