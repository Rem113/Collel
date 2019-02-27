import React, { Component } from "react"
import CourseListItem from "./CourseListItem"
import { connect } from "react-redux"
import { getCourses, getCoursesByTag } from "../actions/courseActions"
import { withRouter } from "react-router-dom"

class CourseList extends Component {
	componentDidMount() {
		this.getCourses()
	}

	componentWillReceiveProps(nextProps) {
		this.getCourses()
	}

	getCourses = () => {
		if (this.props.tag)
			this.props.getCoursesByTag(this.props.tag, this.props.filter)
		else this.props.getCourses(this.props.filter)
	}

	render() {
		return (
			<React.Fragment />
			/*<Container>
				<h1 className="display-3 text-center my-4">Liste des cours</h1>
				{this.props.tag && (
					<h3 className="text-center mb-4">
						avec le tag #{this.props.tag}
						{this.props.filter && (
							<React.Fragment>, trié par {this.props.filter}</React.Fragment>
						)}
					</h3>
				)}
				<ListGroup>
					{this.props.course.courses &&
						this.props.course.courses.map(course => (
							<CourseListItem course={course} />
						))}
				</ListGroup>
				<Pagination>
					<PaginationItem disabled>
						<PaginationLink first>First</PaginationLink>
					</PaginationItem>
					<PaginationItem disabled>
						<PaginationLink previous />
					</PaginationItem>
					<PaginationItem active>
						<PaginationLink>1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink>2</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink>3</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink>4</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink>5</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink next />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink last>Last</PaginationLink>
					</PaginationItem>
				</Pagination>
			</Container>*/
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	course: state.course,
	tag: ownProps.match.params.tag ? ownProps.match.params.tag : "",
	filter: ownProps.match.params.filter ? ownProps.match.params.filter : ""
})

export default connect(
	mapStateToProps,
	{ getCourses, getCoursesByTag }
)(withRouter(CourseList))
