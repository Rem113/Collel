import React, { Component } from "react"
import { connect } from "react-redux"
import { getCourses } from "../actions/courseActions"
import CourseCard from "./CourseCard"
import Grid from "@material-ui/core/Grid"

class CourseDeck extends Component {
	componentDidMount() {
		this.props.getCourses()
	}

	render() {
		const { courses } = this.props.course
		return (
			<Grid container direction="row" justify="center">
				{courses &&
					courses.slice(0, 3).map(course => (
						<Grid item xs={12} key={course._id}>
							<CourseCard course={course} />
						</Grid>
					))}
			</Grid>
		)
	}
}

const mapStateToProps = state => ({
	course: state.course
})

export default connect(
	mapStateToProps,
	{ getCourses }
)(CourseDeck)
