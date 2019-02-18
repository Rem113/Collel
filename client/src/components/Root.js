import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./HomePage"
import CoursePage from "./CoursePage"
import AddCoursePage from "./AddCoursePage"

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/course/add" component={AddCoursePage} />
				<Route path="/course/:id" component={CoursePage} />
			</div>
		</Router>
	</Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root
