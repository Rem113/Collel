const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TagSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	courses: [
		{
			type: Schema.Types.ObjectId
		}
	]
})

module.exports = mongoose.model("Tag", TagSchema, "Tags")
