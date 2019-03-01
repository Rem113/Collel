import React, { Component } from "react"
import { connect } from "react-redux"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import CourseCard from "./CourseCard"
import { withStyles } from "@material-ui/core/styles"
import { getCourses } from "../../actions/courseActions"

const style = theme => ({
	title: {
		marginBottom: theme.spacing.unit * 4
	}
})

class LastCourses extends Component {
	componentDidMount() {
		this.props.getCourses()
	}

	render() {
		const { classes } = this.props
		const { courses } = this.props.course

		if (!courses) return <p>Loading...</p>

		return (
			<Grid container>
				<Grid item xs={12}>
					<Typography
						className={classes.title}
						component="h3"
						variant="h3"
						align="center"
					>
						Les derniers cours
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={24} justify="center">
						{courses.map(course => (
							<Grid key={course._id} item md={6} lg={3}>
								<CourseCard course={course} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		)
	}
}

const mapStateToProps = state => ({
	...state
})

export default connect(
	mapStateToProps,
	{ getCourses }
)(withStyles(style)(LastCourses))
