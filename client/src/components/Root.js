import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home"
import Course from "./pages/Course"
import AddCourse from "./pages/AddCourse"
import DeleteCoursePage from "./pages/DeleteCoursePage"
import EditCoursePage from "./pages/EditCoursePage"
import CourseList from "./controls/CourseList"
import HomeFab from "./controls/HomeFab"
import theme from "../theme"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"

const Root = ({ store }) => (
	<MuiThemeProvider theme={theme}>
		<Provider store={store}>
			<Router>
				<React.Fragment>
					<Route exact path="/" component={Home} />
					<Route exact path="/course/add" component={AddCourse} />
					<Route exact path="/course/id/:id" component={Course} />
					<Route exact path="/tag/:tag/:filter?" component={CourseList} />
					<Route exact path="/course/list" component={DeleteCoursePage} />
					<Route exact path="/course/edit/:id" component={EditCoursePage} />
					<HomeFab />
				</React.Fragment>
			</Router>
		</Provider>
	</MuiThemeProvider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root
