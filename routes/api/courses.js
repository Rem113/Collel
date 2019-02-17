const express = require("express")
const router = express.Router()

const Course = require("../../models/Course")

// @route   GET api/courses
// @desc    Get all courses
// @access  Public
router.get("/", (req, res) => {
	Course.find()
		.sort({ date: -1 })
		.populate("tags", ["name"])
		.then(courses => res.json(courses))
})

// @route   GET api/courses/:id
// @desc    Get a specific course
// @access  Public
router.get("/:id", (req, res) => {
	Course.findByIdAndUpdate(req.params.id, {
		$inc: {
			clicks: 1
		}
	}).then(course => res.json(course))
})

// @route   GET api/courses/:id/prev
// @desc    Get a link to the previous course
// @access  Public
router.get("/:id/prev", (req, res) => {
	Course.findOne({ _id: { $gt: req.params.id } })
		.then(prev => res.json(prev))
		.catch(err => console.log(err))
})

// @route   GET api/courses/:id/next
// @desc    Get a link to the next course
// @access  Public
router.get("/:id/next", (req, res) => {
	Course.findOne({ _id: { $lt: req.params.id } })
		.then(next => res.json(next))
		.catch(err => console.log(err))
})

// @route   POST api/courses
// @desc    Add a course
// @access  Public
router.post("/", (req, res) => {
	const data = req.body

	const course = new Course({
		title: data.title,
		description: data.description,
		date: data.date,
		link: data.link,
		tags: data.tags
	})

	course.save().then(course => res.json(course))
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
