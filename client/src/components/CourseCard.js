import React, { Component } from "react"
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap"
import { Link } from "react-router-dom"

class CourseCard extends Component {
	render() {
		const { course } = this.props

		return (
			<Card>
				<CardImg
					top
					src={`http://img.youtube.com/vi/${course.link}/maxresdefault.jpg`}
				/>
				<CardBody className="d-flex flex-column">
					<CardTitle>
						{course.title}{" "}
						<span className="card-clicks">(vu {course.clicks} fois)</span>
					</CardTitle>
					<CardSubtitle>
						{new Date(course.date).toLocaleDateString()}
					</CardSubtitle>
					<CardText className="mt-auto">
						{course.description}
						<br />
						{course.tags &&
							course.tags.map(tag => <Link to={`/tag/${tag}`}>#{tag} </Link>)}
					</CardText>
					<Link to={`/course/id/${course._id}`}>
						<Button color="primary">Voir le cours</Button>
					</Link>
				</CardBody>
			</Card>
		)
	}
}

export default CourseCard
