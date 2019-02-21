import React, { Component } from "react"
import { addCourse } from "../actions/courseActions"
import { Container } from "reactstrap"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import CourseForm from "./CourseForm"

class AddCoursePage extends Component {
	onSubmit = course => {
		this.props.addCourse(course, this.props.history)
	}

	render() {
		return (
			<Container>
				<h1 className="display-3 text-center my-4">Ajouter un cours</h1>
				<CourseForm
					onSubmit={this.onSubmit}
					errors={this.props.course.errors}
				/>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	course: state.course
})

export default connect(
	mapStateToProps,
	{ addCourse }
)(withRouter(AddCoursePage))
