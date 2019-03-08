import React, { Component } from "react"
import Header from "../controls/Header"
import CourseListItem from "../controls/CourseListItem"
import { List } from "@material-ui/core"
import { connect } from "react-redux"
import { getCourses } from "../../actions/courseActions"
import { withRouter } from "react-router-dom"

class CourseList extends Component {
	constructor(props) {
		super(props)

		if (!props.course.courses.length) props.getCourses()

		this.state = {
			filter: "",
			tag: "",
			page: 0
		}
	}

	onTag = tag => {
		this.setState({ tag })
	}

	render() {
		if (this.props.course.courses.length === 0) return <p>Loading...</p>

		return (
			<React.Fragment>
				<Header />
				<List>
					{this.props.course.courses.map(course => (
						<CourseListItem course={course} onTag={this.onTag} />
					))}
				</List>
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
)(withRouter(CourseList))
