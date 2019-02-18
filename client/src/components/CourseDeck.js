import React, { Component } from "react"
import { connect } from "react-redux"
import { getCourses } from "../actions/courseActions"
import {
	Col,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap"
import { Link } from "react-router-dom"
import { formatDate } from "../utils/dateUtils"

export class CourseDeck extends Component {
	componentDidMount() {
		this.props.getCourses()
	}

	render() {
		const { courses } = this.props.course
		return (
			<React.Fragment>
				{courses &&
					courses.map(course => (
						<Col key={course._id} md="6" lg="4" className="align-items-stretch">
							<Card>
								<CardImg
									top
									src={
										"http://img.youtube.com/vi/" +
										course.link +
										"/maxresdefault.jpg"
									}
								/>
								<CardBody>
									<CardTitle>
										{course.title}{" "}
										<span className="card-clicks">
											(vu {course.clicks} fois)
										</span>
									</CardTitle>
									<CardSubtitle>
										{formatDate(new Date(course.date))}
									</CardSubtitle>
									<CardText>
										{course.description}
										<br />
										{course.tags &&
											course.tags.map(tag => (
												<Link to={`/tag/${tag}`}>#{tag} </Link>
											))}
									</CardText>
									<Link to={`/course/id/${course._id}`}>
										<Button color="primary">Voir le cours</Button>
									</Link>
								</CardBody>
							</Card>
						</Col>
					))}
			</React.Fragment>
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
