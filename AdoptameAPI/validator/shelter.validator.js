//name, address, phone, email, description , website, logo

const { validateResult } = require('../helpers/validateHelper')
const { check } = require('express-validator')
const req = require('express/lib/request')
const res = require('express/lib/response')


const validateCreate = [  //name, address, phone, email, description , website, logo

    check('name')
        .exists()
        .not()
        .isEmpty()
        .isString(),

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

    check('description')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 0, max: 200 }),

    check('website')
        .exists()
        .notEmpty()
        .isURL(),

]

module.exports = { validateCreate }