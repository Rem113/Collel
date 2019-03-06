import React, { Component } from "react"
import { Grid, Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { addCourse } from "../../actions/courseActions"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import CourseForm from "../controls/CourseForm"
import Subtitle from "../controls/Subtitle"

const style = theme => ({
	root: {
		height: "100%"
	}
})

class AddCoursePage extends Component {
	onSubmit = course => {
		this.props.addCourse(course, this.props.history)
	}

	render() {
		const { classes } = this.props

		return (
			<Grid
				container
				justify="center"
				alignContent="center"
				className={classes.root}
			>
				<Grid item align="center" xs={12}>
					<Subtitle caption="Ajouter un cours" />
				</Grid>
				<Grid item xs={12}>
					<CourseForm
						onSubmit={this.onSubmit}
						errors={this.props.course.errors}
					/>
				</Grid>
			</Grid>
		)
	}
}

const mapStateToProps = state => ({
	course: state.course
})

export default connect(
	mapStateToProps,
	{ addCourse }
)(withRouter(withStyles(style)(AddCoursePage)))
