const express = require("express")
const mongoose = require("mongoose")
const courses = require("./routes/api/courses")
const tags = require("./routes/api/tags")

const app = express()

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const db = require("./config/keys").mongoURI

// Mongoose
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log("Logged into MongoDB !"))
	.catch(err => console.log("An error has occured", err))

app.listen(1234, () => {
	console.log("Listening on port 1234 !")
})

// API routes
app.use("/api/courses", courses)
app.use("/api/tags", tags)
