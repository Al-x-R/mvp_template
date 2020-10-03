const yup = require('yup')
const { parse, isDate } = require('date-fns')

const parseDateString = (value, originalValue) => {
    return isDate(originalValue)
        ? originalValue
        : parse(originalValue, "yyyy-MM-dd", new Date())
}

const today = new Date()

module.exports.USER_CREATE_SCHEMA = yup.object({
    firstName: yup.string().trim().min(2).matches(
        /^([a-zа-яё]+|\d+)$/i, 'Name must contain only alphabetic characters').required(),
    lastName: yup.string().trim().min(2).matches(
        /^([a-zа-яё]+|\d+)$/i, 'Surname must contain only alphabetic characters').required(),
    email: yup.string().email().required(),
    birthday: yup.date().transform(parseDateString).max(today),
    password: yup.string().matches(
        /(?=.*?[a-z])(?=.*?\d)(?=.*?[A-Z])^.{8,40}$/,
        'Your password must be at least 8 characters long, be of mixed case and also contain a digit or symbol.'
    ).required(),
})

module.exports.USER_UPDATE_SCHEMA = yup.object({
    firstName: yup.string().trim().min(2).matches(
        /^([a-zа-яё]+|\d+)$/i, 'Name must contain only alphabetic characters'),
    lastName: yup.string().trim().min(2).matches(
        /^([a-zа-яё]+|\d+)$/i, 'Surname must contain only alphabetic characters'),
    email: yup.string().email(),
    birthday: yup.date().transform(parseDateString).max(today),
    password: yup.string().matches(
        /(?=.*?[a-z])(?=.*?\d)(?=.*?[A-Z])^.{8,40}$/,
        'Your password must be at least 8 characters long, be of mixed case and also contain a digit or symbol.'
    ),
})