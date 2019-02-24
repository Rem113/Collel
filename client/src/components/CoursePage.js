import React, { Component } from "react"
import { connect } from "react-redux"
import {
	getCourseById,
	getPreviousCourse,
	getNextCourse
} from "../actions/courseActions"
import { Container, Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

import "../assets/css/Course.css"

class Course extends Component {
	componentDidMount() {
		this.updateCoursesProps(this.props.id)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.id !== this.props.id) this.updateCoursesProps(nextProps.id)
	}

	updateCoursesProps = id => {
		this.props.getCourseById(id)
		this.props.getPreviousCourse(id)
		this.props.getNextCourse(id)
	}

	render() {
		if (this.props.course.loading === true) {
			return <React.Fragment />
		}

		const { course, prev, next } = this.props.course

		return (
			<Container className="d-flex h-100 container-fluid">
				<Row className="text-center justify-content-center align-self-center mx-auto">
					<Col xs={12} className="h-100">
						<h1 className="display-4 m-0">{course.title}</h1>
						<h5 className="mb-4">
							{new Date(course.date).toLocaleDateString()}
						</h5>
						{prev.title && <Link to={`/course/id/${prev._id}`}>Prev</Link>}
						<iframe
							title="youtube"
							src={
								"https://www.youtube.com/embed/" +
								course.link +
								"?modestbranding=1&rel=0"
							}
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
						{next.title && <Link to={`/course/id/${next._id}`}>Next</Link>}
						<br />
						<p>
							{course.tags &&
								course.tags.map(tag => <Link to={`/tag/${tag}`}>#{tag} </Link>)}
						</p>
					</Col>
				</Row>
			</Container>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	course: state.course,
	id: ownProps.match.params.id
})

export default connect(
	mapStateToProps,
	{ getCourseById, getPreviousCourse, getNextCourse }
)(Course)
