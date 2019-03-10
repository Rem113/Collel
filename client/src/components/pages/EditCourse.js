import React, { Component } from "react"
import { Grid } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import CourseForm from "../controls/CourseForm"
import { connect } from "react-redux"
import { getCourses, editCourse } from "../../actions/courseActions"
import { withRouter } from "react-router-dom"
import Subtitle from "../controls/Subtitle"

const style = theme => ({
	root: {
		height: "100%"
	}
})

class EditCoursePage extends Component {
	constructor(props) {
		super(props)

		if (!props.course.courses.length) props.getCourses()

		this.state = {
			id: props.match.params.id
		}
	}

	onSubmit = course => {
		this.props.editCourse(this.state.id, course, this.props.history)
	}

	render() {
		const { classes } = this.props
		const { courses, errors } = this.props.course

		if (!courses.length) return <p>Loading...</p>

		return (
			<Grid
				container
				justify="center"
				alignContent="center"
				className={classes.root}
			>
				<Grid item align="center" xs={12}>
					<Subtitle caption="Modifier un cours" />
				</Grid>
				<Grid item xs={12}>
					<CourseForm
						course={
							courses[courses.findIndex(course => course._id === this.state.id)]
						}
						onSubmit={this.onSubmit}
						errors={errors}
					/>
				</Grid>
			</Grid>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	course: state.course
})

export default connect(
	mapStateToProps,
	{ getCourses, editCourse }
)(withRouter(withStyles(style)(EditCoursePage)))
