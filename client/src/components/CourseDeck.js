import React, { Component } from "react"
import { connect } from "react-redux"
import { getCourses } from "../actions/courseActions"
import { Row, Col } from "reactstrap"
import CourseCard from "./CourseCard"

class CourseDeck extends Component {
	componentDidMount() {
		this.props.getCourses()
	}

	render() {
		const { courses } = this.props.course
		return (
			<Row>
				{courses &&
					courses.slice(0, 3).map(course => (
						<Col
							key={course._id}
							md="6"
							lg="4"
							className="align-items-stretch d-flex"
						>
							<CourseCard course={course} />
						</Col>
					))}
			</Row>
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
