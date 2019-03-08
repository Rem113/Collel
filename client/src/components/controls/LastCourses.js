import React, { Component } from "react"
import { connect } from "react-redux"
import { Button } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import CourseCard from "./CourseCard"
import { withStyles } from "@material-ui/core/styles"
import { getCourses } from "../../actions/courseActions"
import { Link } from "react-router-dom"
import Subtitle from "./Subtitle"

const style = theme => ({
	linkItem: {
		margin: theme.spacing.unit * 2
	},
	link: {
		textDecoration: "none"
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
					<Subtitle caption="Les derniers cours" />
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={24} justify="center">
						{courses.slice(0, 4).map(course => (
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
