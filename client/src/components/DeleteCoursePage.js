import React, { Component } from "react"
import { connect } from "react-redux"
import { getCourses, deleteCourse } from "../actions/courseActions"

class DeleteCoursePage extends Component {
	componentDidMount() {
		this.props.getCourses()
	}

	render() {
		const { courses } = this.props.course

		return (
			<div>
				<h1>Delete Course Page</h1>
				{courses &&
					courses.map(course => (
						<button onClick={() => this.props.deleteCourse(course._id)}>
							{course.title}
						</button>
					))}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	course: state.course
})

export default connect(
	mapStateToProps,
	{ getCourses, deleteCourse }
)(DeleteCoursePage)
