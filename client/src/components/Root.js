import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./HomePage"
import CoursePage from "./CoursePage"
import AddCoursePage from "./AddCoursePage"
import DeleteCoursePage from "./DeleteCoursePage"
import EditCoursePage from "./EditCoursePage"
import CourseList from "./CourseList"

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<div className="h-100">
				<Route exact path="/" component={HomePage} />
				<Route exact path="/course/add" component={AddCoursePage} />
				<Route exact path="/course/id/:id" component={CoursePage} />
				<Route exact path="/tag/:tag" component={CourseList} />
				<Route exact path="/course/delete" component={DeleteCoursePage} />
				<Route exact path="/course/edit/:id" component={EditCoursePage} />
				<Route exact path="/course/list" component={CourseList} />
			</div>
		</Router>
	</Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root
