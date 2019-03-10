const express = require("express")
const mongoose = require("mongoose")
const course = require("./routes/api/course")
const path = require("path")

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

// API routes
app.use("/api/course", course)

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"))

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
	})
}

const port = process.env.PORT || 1234

app.listen(port, () => {
	console.log(`Listening on port ${port} !`)
})
