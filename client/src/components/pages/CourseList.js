import React, { Component } from "react"
import Header from "../controls/Header"
import CourseListItem from "../controls/CourseListItem"
import Pagination from "material-ui-flat-pagination"
import { ArrowBack, ArrowForward } from "@material-ui/icons"
import { Grid, List } from "@material-ui/core"
import { connect } from "react-redux"
import { getCourses } from "../../actions/courseActions"
import { withRouter } from "react-router-dom"

class CourseList extends Component {
	constructor(props) {
		super(props)

		if (!props.course.courses.length) props.getCourses()

		this.state = {
			order: "date",
			tag: props.match.params.tag ? props.match.params.tag : "",
			offset: 0
		}
	}

	onTag = tag => {
		this.setState({ tag })
	}

	onOffset = offset => {
		this.setState({ offset })
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
					{arr.slice(this.state.offset, this.state.offset + 10).map(course => (
						<CourseListItem course={course} onTag={this.onTag} />
					))}
				</List>
				<Grid container justify="center">
					<Grid item>
						<Pagination
							limit={10}
							offset={this.state.offset}
							total={arr.length}
							onClick={(e, offset) => this.onOffset(offset)}
							size="large"
							previousPageLabel={<ArrowBack />}
							nextPageLabel={<ArrowForward />}
						/>
					</Grid>
				</Grid>
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
