import React, { Component } from "react"
import { connect } from "react-redux"
import { getCourseById } from "../actions/courseActions"
import { Container, Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

import "../assets/css/Course.css"

class Course extends Component {
	componentDidMount() {
		this.props.getCourseById(this.props.id)
	}

	render() {
		if (this.props.course.loading === true) {
			return <React.Fragment />
		}

		const { course } = this.props.course

		return (
			<Container className="d-flex h-100">
				<Row className="text-center justify-content-center align-self-center mx-auto">
					<Col className="h-100">
						<h1 className="display-4 m-0">{course.title}</h1>
						<h5 className="mb-4">
							{new Date(course.date).toLocaleDateString()}
						</h5>
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
	{ getCourseById }
)(Course)
