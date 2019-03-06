import React, { Component } from "react"
import { Grid, CircularProgress } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import CourseForm from "../controls/CourseForm"
import { connect } from "react-redux"
import { getCourseById, editCourse } from "../../actions/courseActions"
import { withRouter } from "react-router-dom"
import Subtitle from "../controls/Subtitle"

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
		const { classes } = this.props

		if (this.props.course.loading)
			return (
				<Grid
					container
					align="center"
					alignContent="center"
					className={classes.root}
				>
					<Grid item xs={12}>
						<CircularProgress />
					</Grid>
				</Grid>
			)

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
