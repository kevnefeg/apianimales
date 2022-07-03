//name(string),age(Number),personality(string),vaccine(string),size(number),weight(number),birthdate(date),gender(string),history(string),adoptionRequirements(string)

const { validateResult } = require('../helpers/validateHelper')
const { check } = require('express-validator')
const req = require('express/lib/request')
const res = require('express/lib/response')
const { format } = require('express/lib/response')


const validateCreate = [

    check('name')
        .exists()
        .not()
        .isEmpty()
        .isString(),

    check('age')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),

    check('personality')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 0, max: 200 }),

    check('vaccine')
        .exists()
        .not()
        .isEmpty(),

    check('specie')
        .exists()
        .not()
        .isEmpty()
        .isString(),

    check('size')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),

    check('weight')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),

    check('birthdate')
        .exists()
        .notEmpty(),

    check('gender')
        .exists()
        .not()
        .isEmpty()
        .isString(),

    check('history')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 0, max: 200 }),

    check('adoptionRequirement')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 0, max: 200 }),
        
]

module.exports = { validateCreate }