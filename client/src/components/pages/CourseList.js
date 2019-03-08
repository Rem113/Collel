import React, { Component } from "react"
import Header from "../controls/Header"
import CourseListItem from "../controls/CourseListItem"
import { List } from "@material-ui/core"
import { connect } from "react-redux"
import { getCourses } from "../../actions/courseActions"
import { withRouter } from "react-router-dom"

class CourseList extends Component {
	componentDidMount() {
		this.getCourses()
	}

	componentWillReceiveProps(nextProps) {
		this.getCourses()
	}

	getCourses = () => {
		this.props.getCourses(this.props.filter)
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<List>
					{this.props.course.courses.map(course => (
						<CourseListItem course={course} />
					))}
				</List>
			</React.Fragment>
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
	{ getCourses }
)(withRouter(CourseList))
