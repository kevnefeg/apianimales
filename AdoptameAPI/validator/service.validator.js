const { validateResult } = require('../helpers/validateHelper')
const { check } = require('express-validator')
const req = require('express/lib/request')
const res = require('express/lib/response')


const validateCreate = [  //name,description,address,phone,email

    check('name')
        .exists()
        .not()
        .isEmpty()
        .isString(),

    check('description')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 0, max: 200 }),

    check('address')
        .exists()
        .not()
        .isEmpty()
        .isString(),

    check('phone')
        .exists()
        .not()
        .isEmpty()
        .isNumeric()
        .isMobilePhone('es-SV'),

    check('email')
        .exists()
        .isEmail()
        .normalizeEmail(),

]



module.exports = { validateCreate }