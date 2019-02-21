const Validator = require("validator")
const isEmpty = require("./isEmpty")

module.exports = validateCourse = course => {
	let data = {
		title: isEmpty(course.title) ? "" : course.title,
		link: isEmpty(course.link) ? "" : course.link
	}

	let errors = {}

	if (!Validator.isLength(data.title, { min: 4, max: 50 }))
		errors.title = "Le titre doit contenir entre 4 et 50 caractères !"

	if (Validator.isEmpty(data.title))
		errors.title = "Le titre ne doit pas être vide !"

	if (!Validator.isLength(data.link, { min: 11, max: 11 }))
		errors.link = "Le lien doit contenir exactement 11 caractères !"

	if (Validator.isEmpty(data.link))
		errors.link = "Le lien ne doit pas être vide !"

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
