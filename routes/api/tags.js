const express = require("express")
const router = express.Router()

const Course = require("../../models/Course")

// @route   GET api/tags/:tag/:filter?
// @desc    Returns all courses with this tag (and with filter)
// @access  Public
router.get("/:tag/:filter?", (req, res) => {
	const filter = req.params.filter
		? {
				[req.params.filter]: -1
		  }
		: {
				date: -1
		  }

	Course.find({
		tags: req.params.tag
	})
		.sort(filter)
		.then(courses => res.json(courses))
		.catch(err => console.log(err))
})

module.exports = router
