const { validateResult } = require('../helpers/validateHelper')
const { check } = require('express-validator')
const req = require('express/lib/request')
const res = require('express/lib/response')


const validateCreate = [  //address, message

    check('address')
        .exists()
        .not()
        .isEmpty()
        .isString(),

    check('message')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 0, max: 200 }),

]

module.exports = { validateCreate }