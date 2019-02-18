import React, { Component } from "react"
import { connect } from "react-redux"
import { getCourseById } from "../actions/courseActions"
import { Container, Row, Col } from "reactstrap"

import "../assets/css/Course.css"

export class Course extends Component {
	componentDidMount() {
		this.props.getCourseById(this.props.id)
	}

	render() {
		if (this.props.course.loading === true) {
			return (
				<img src={require("../assets/img/loading.gif")} alt="Chargement..." />
			)
		}

		const { course } = this.props.course

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
	{ getCourseById }
)(Course)
