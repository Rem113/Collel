import React, { Component } from "react"
import CourseForm from "./CourseForm"
import { connect } from "react-redux"
import { getCourseById, editCourse } from "../actions/courseActions"
import { withRouter } from "react-router-dom"

class EditCoursePage extends Component {
	componentDidMount() {
		this.props.getCourseById(this.props.id)
	}

	onSubmit = course => {
		this.props.editCourse(this.props.id, course, this.props.history)
	}

	render() {
		if (this.props.course.loading)
			return (
				<div>
					<p>Loading...</p>
				</div>
			)

		return (
			<div>
				<h1 className="display-3 text-center my-4">Modifier un cours</h1>
				<CourseForm
					course={this.props.course.course}
					onSubmit={this.onSubmit}
					errors={this.props.course.errors}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	course: state.course,
	id: ownProps.match.params.id
})

export default connect(
	mapStateToProps,
	{ getCourseById, editCourse }
)(withRouter(EditCoursePage))
