const express = require("express")
const router = express.Router()

const Course = require("../../models/Course")
const courseValidator = require("../../validators/course")

// @route   GET api/courses/:filter?
// @desc    Get all courses (with filter)
// @access  Public
router.get("/:filter?", (req, res) => {
	const filter = req.params.filter
		? {
				[req.params.filter]: -1
		  }
		: {
				date: -1
		  }

	Course.find()
		.sort(filter)
		.then(courses => res.json(courses))
		.catch(err => console.log(err))
})

// @route   GET api/courses/id/:id
// @desc    Get a specific course
// @access  Public
router.get("/id/:id", (req, res) => {
	Course.findByIdAndUpdate(req.params.id, {
		$inc: {
			clicks: 1
		}
	})
		.then(course => res.json(course))
		.catch(err => console.log(err))
})

// @route   POST api/courses
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
		.catch(err => console.log(err))
})

// @route   DELETE api/courses/:id
// @desc    Delete a course
// @access  Public
router.delete("/:id", (req, res) => {
	Course.findById(req.params.id).then(course =>
		course
			.remove()
			.then(() => res.json({ success: true }))
			.catch(err => res.status(404).json({ success: false }))
	)
})

module.exports = router
