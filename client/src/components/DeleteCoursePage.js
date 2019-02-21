import React, { Component } from "react"
import { connect } from "react-redux"
import {
	Row,
	Col,
	Container,
	Button,
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText
} from "reactstrap"
import { getCourses, deleteCourse } from "../actions/courseActions"
import { Link } from "react-router-dom"

class DeleteCoursePage extends Component {
	componentDidMount() {
		this.props.getCourses()
	}

	render() {
		const { courses } = this.props.course

		return (
			<Container>
				<h1 className="display-3 text-center my-4">Supprimer un cours</h1>
				<ListGroup>
					{courses &&
						courses.map(course => (
							<ListGroupItem key={course._id}>
								<Row>
									<Col sm={8}>
										<ListGroupItemHeading>{course.title}</ListGroupItemHeading>
										<ListGroupItemText>{course.description}</ListGroupItemText>
									</Col>
									<Col sm={4} className="d-flex align-items-center">
										<Link to={`/course/edit/${course._id}`} className="ml-auto">
											<Button className="mr-2" color="dark">
												Modifier
											</Button>
										</Link>
										<Button
											color="danger"
											onClick={() => this.props.deleteCourse(course._id)}
										>
											Supprimer
										</Button>
									</Col>
								</Row>
							</ListGroupItem>
						))}
				</ListGroup>
			</Container>
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
