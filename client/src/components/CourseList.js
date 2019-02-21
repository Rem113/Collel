import React, { Component } from "react"
import { ListGroup, Container } from "reactstrap"
import CourseListItem from "./CourseListItem"
import { connect } from "react-redux"
import { getCourses, getCoursesByTag } from "../actions/courseActions"
import { withRouter } from "react-router-dom"

class CourseList extends Component {
	componentDidMount() {
		if (this.props.tag) this.props.getCoursesByTag(this.props.tag)
		else this.props.getCourses()
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.tag) this.props.getCoursesByTag(this.props.tag)
		else this.props.getCourses()
	}

	render() {
		return (
			<Container>
				<ListGroup flush>
					{this.props.course.courses &&
						this.props.course.courses.map(course => (
							<CourseListItem course={course} />
						))}
				</ListGroup>
			</Container>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	course: state.course,
	tag: ownProps.match.params.tag
})

export default connect(
	mapStateToProps,
	{ getCourses, getCoursesByTag }
)(withRouter(CourseList))
