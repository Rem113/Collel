const Validator = require("validator")
const isEmpty = require("./isEmpty")

module.exports = validateCourse = course => {
	let errors = {}

	if (Validator.isEmpty(course.title))
		errors.title = "Le titre ne doit pas être vide !"

	if (!Validator.isLength(course.title, { min: 4, max: 50 }))
		errors.title = "Le titre doit contenir entre 4 et 50 caractères !"

	if (Validator.isEmpty(course.link))
		errors.link = "Le lien ne doit pas être vide !"

	if (!Validator.isLength(course.link, { min: 11, max: 11 }))
		errors.link = "Le lien doit contenir exactement 11 caractères !"

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
