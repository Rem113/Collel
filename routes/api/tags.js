const express = require("express")
const router = express.Router()

const Course = require("../../models/Course")
const Tag = require("../../models/Tag")

// @route   GET api/tags
// @desc    Get all tags
// @access  Public
router.get("/", (req, res) => {
	Tag.find()
		.sort({ name: 1 })
		.then(tags => res.json(tags))
})

// @route   POST api/tags
// @desc    Add a tag
// @access  Public
router.post("/", (req, res) => {
	const data = req.body

	const tag = new Tag({
		name: data.name
	})

	tag.save().then(tag => res.json(tag))
})

// @route   DELETE api/tag/:id
// @desc    Delete a tag
// @access  Public
router.delete("/:id", (req, res) => {
	Course.where({
		tags: {
			$elemMatch: {
				_id: req.params.id
			}
		}
	}).then(courses =>
		courses.forEach(course => {
			course.tags.id(req.params.id).remove()
			course.save()
		})
	)

	Tag.findById(req.params.id).then(tag =>
		tag
			.remove()
			.then(() => res.json({ success: true }))
			.catch(err => res.status(404).json({ success: false }))
	)
})

module.exports = router
