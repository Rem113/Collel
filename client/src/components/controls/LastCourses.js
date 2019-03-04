import React, { Component } from "react"
import { connect } from "react-redux"
import { Button, Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import CourseCard from "./CourseCard"
import { withStyles } from "@material-ui/core/styles"
import { getCourses } from "../../actions/courseActions"
import { Link } from "react-router-dom"

const style = theme => ({
	title: {
		marginBottom: theme.spacing.unit * 2
	},
	linkItem: {
		margin: theme.spacing.unit * 2
	},
	link: {
		textDecoration: "none"
	},
	hr: {
		width: "5%",
		borderColor: theme.palette.secondary.main,
		border: "2px solid"
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
				<Grid item xs={12} className={classes.title}>
					<Typography component="h3" variant="h3" align="center">
						Les derniers cours
					</Typography>
					<hr className={classes.hr} />
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
				<Grid item xs={12} align="center" className={classes.linkItem}>
					<Link to={"/course/list"} className={classes.link}>
						<Button variant="raised" color="primary">
							Tous les cours
						</Button>
					</Link>
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
