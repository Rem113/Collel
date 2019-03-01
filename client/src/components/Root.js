import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home"
import CoursePage from "./pages/CoursePage"
import AddCoursePage from "./pages/AddCoursePage"
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
				<div className="h-100">
					<Route exact path="/" component={Home} />
					<Route exact path="/course/add" component={AddCoursePage} />
					<Route exact path="/course/id/:id" component={CoursePage} />
					<Route exact path="/tag/:tag/:filter?" component={CourseList} />
					<Route exact path="/course/list" component={DeleteCoursePage} />
					<Route exact path="/course/edit/:id" component={EditCoursePage} />
					<HomeFab />
				</div>
			</Router>
		</Provider>
	</MuiThemeProvider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root
