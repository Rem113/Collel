import React, { Component } from "react"
import { Grid, Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import CourseForm from "../controls/CourseForm"
import { connect } from "react-redux"
import { getCourseById, editCourse } from "../../actions/courseActions"
import { withRouter } from "react-router-dom"

const style = theme => ({
	root: {
		height: "100%"
	}
})

class EditCoursePage extends Component {
	componentDidMount() {
		this.props.getCourseById(this.props.id)
	}

	onSubmit = course => {
		this.props.editCourse(this.props.id, course, this.props.history)
	}

	render() {
		if (this.props.course.loading)
			return (
				<div>
					<p>Loading...</p>
				</div>
			)

		const { classes } = this.props

		return (
			<Grid
				container
				justify="center"
				alignContent="center"
				className={classes.root}
			>
				<Grid item align="center" xs={12}>
					<Typography variant="h3" component="h3" gutterBottom>
						Modifier un cours
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<CourseForm
						course={this.props.course.course}
						onSubmit={this.onSubmit}
						errors={this.props.course.errors}
					/>
				</Grid>
			</Grid>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	course: state.course,
	id: ownProps.match.params.id
})

export default connect(
	mapStateToProps,
	{ getCourseById, editCourse }
)(withRouter(withStyles(style)(EditCoursePage)))
