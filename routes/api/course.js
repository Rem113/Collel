const express = require("express")
const router = express.Router()

const Course = require("../../models/Course")
const courseValidator = require("../../validators/course")

// @route   GET api/course
// @desc    Get all course
// @access  Public
router.get("/", (req, res) => {
	Course.find()
		.then(courses => res.json(courses))
		.catch(err => console.error(err))
})

router.get("/id/:id", (req, res) => {
	Course.findByIdAndUpdate(req.params.id, { $inc: { clicks: 1 } }).catch(err =>
		console.error(err)
	)
})

// @route   POST api/course
// @desc    Add a course
// @access  Public
router.post("/", (req, res) => {
	const data = req.body

	const { errors, isValid } = validateCourse(data)

	if (!isValid) return res.status(400).json(errors)

	let tags = data.tags.split(",").map(tag => tag.trim().toLowerCase())

	const course = new Course({
		title: data.title,
		description: data.description,
		link: data.link,
		tags: tags
	})

	course
		.save()
		.then(course => res.json(course))
		.catch(err => console.error(err))
})

// @route   POST api/course/:id
// @desc    Edit a course
// @access  Public
router.post("/:id", (req, res) => {
	const data = req.body
	const id = req.params.id

	const { errors, isValid } = validateCourse(data)

	if (!isValid) return res.status(400).json(errors)

	let tags = data.tags.split(",").map(tag => tag.trim().toLowerCase())

	const course = {
		title: data.title,
		description: data.description,
		link: data.link,
		tags: tags
	}

	Course.findByIdAndUpdate(id, { ...course })
		.then(course => {
			res.json(course)
		})
		.catch(err => console.error(err))
})

// @route   DELETE api/course/:id
// @desc    Delete a course
// @access  Public
router.delete("/:id", (req, res) => {
	Course.findById(req.params.id)
		.then(course =>
			course
				.remove()
				.then(() => res.json({ success: true }))
				.catch(err => res.status(404).json({ success: false }))
		)
		.catch(err => console.error(err))
})

module.exports = router
