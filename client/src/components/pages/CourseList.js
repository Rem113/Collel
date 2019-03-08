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
			order: "clicks",
			tag: props.match.params.tag ? props.match.params.tag : "",
			page: 0
		}
	}

	onTag = tag => {
		this.setState({ tag })
	}

	render() {
		const { courses } = this.props.course

		if (!courses.length) return <p>Loading...</p>

		let arr = courses.filter(course =>
			this.state.tag !== ""
				? course.tags.findIndex(tag => tag === this.state.tag) !== -1
				: true
		)

		switch (this.state.order) {
			case "clicks":
				arr.sort((a, b) => a.clicks > b.clicks)
				break
			default:
				arr.sort((a, b) => new Date(a.date) > new Date(b.date))
		}

		return (
			<React.Fragment>
				<Header />
				<List>
					{arr
						.slice(this.state.page * 10, this.state.page * 10 + 10)
						.map(course => (
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
