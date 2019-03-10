import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home"
import Course from "./pages/Course"
import AddCourse from "./pages/AddCourse"
import ManageCourse from "./pages/ManageCourse"
import EditCourse from "./pages/EditCourse"
import CourseList from "./pages/CourseList"
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
					<Route exact path="/course/list/:tag?" component={CourseList} />
					<Route exact path="/course/edit/:id" component={EditCourse} />
					<Route exact path="/course/manage" component={ManageCourse} />
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
