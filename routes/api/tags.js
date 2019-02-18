const express = require("express")
const router = express.Router()

const Course = require("../../models/Course")

// @route   GET api/tags/:tag
// @desc    Returns all courses with this tag
// @access  Public
router.get("/:tag", (req, res) => {
	Course.find({
		tags: req.params.tag
	})
		.then(courses => res.json(courses))
		.catch(err => console.log(err))
})

module.exports = router
