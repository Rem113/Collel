const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CourseSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	},
	link: {
		type: String,
		required: true
	},
	clicks: {
		type: Number,
		default: 0
	},
	tags: [
		{
			type: Schema.Types.ObjectId,
			ref: "Tag"
		}
	]
})

module.exports = mongoose.model("Course", CourseSchema, "Courses")
