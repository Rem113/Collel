import React, { Component } from "react"
import { Link } from "react-router-dom"

class CourseListItem extends Component {
	render() {
		const { course } = this.props
		return (
			<React.Fragment />
			/*<React.Fragment>
				<ListGroupItem className="p-4">
					<Row>
						<Col md={6} lg={4} className="my-auto">
							<img
								className="img-thumbnail"
								src={`http://img.youtube.com/vi/${
									course.link
								}/maxresdefault.jpg`}
								alt="Thumbnail"
							/>
						</Col>
						<Col className="p-4 my-auto">
							<h3 className="m-0">
								{course.title}{" "}
								<span className="card-clicks">(vu {course.clicks} fois)</span>
							</h3>
							<small style={{ color: "#AAA" }}>
								{new Date(course.date).toLocaleDateString()}
							</small>
							<ListGroupItemText className="lead my-2">
								{course.description}
							</ListGroupItemText>
							<p>
								{course.tags &&
									course.tags.map(tag => (
										<Link to={`/tag/${tag}`}>#{tag} </Link>
									))}
							</p>
							<Link to={`/course/id/${course._id}`}>
								<Button color="primary">Voir le cours</Button>
							</Link>
						</Col>
					</Row>
				</ListGroupItem>
			</React.Fragment>*/
		)
	}
}

export default CourseListItem
