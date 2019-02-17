import React, { Component } from "react"
import { connect } from "react-redux"
import {
	getCourseById,
	getPreviousCourse,
	getNextCourse
} from "../actions/courseActions"
import { Button, Container, Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

import "../assets/css/Course.css"

export class Course extends Component {
	componentDidMount() {
		this.loadCourses()
	}

	loadCourses = () => {
		this.props.getCourseById(this.props.id)
		this.props.getNextCourse(this.props.id)
		this.props.getPreviousCourse(this.props.id)
	}

	render() {
		if (this.props.course.loading === true) {
			return (
				<img src={require("../assets/img/loading.gif")} alt="Chargement..." />
			)
		}

		const { course, prev, next } = this.props.course

		let prevButton

		if (prev !== null)
			prevButton = (
				<Link to={"/api/courses/" + prev._id}>
					<Button color="primary" onClick={this.loadCourses}>
						Cours précédent
					</Button>
				</Link>
			)

		let nextButton

		if (next !== null)
			nextButton = (
				<Link to={"/api/courses/" + next._id}>
					<Button color="primary" onClick={this.loadCourses}>
						Cours suivant
					</Button>
				</Link>
			)

		return (
			<Container className="h-100">
				<Row className="text-center h-100">
					<Col className="my-auto" xs="12">
						<h1>{course.title}</h1>
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
						<Row className="justify-content-center pt-4">
							<Col className="p-4" xs="6">
								{prevButton}
							</Col>
							<Col className="p-4" xs="6">
								{nextButton}
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		...state,
		id: ownProps.match.params.id
	}
}
export default connect(
	mapStateToProps,
	{ getCourseById, getPreviousCourse, getNextCourse }
)(Course)
