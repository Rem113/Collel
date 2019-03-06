import React, { Component } from "react"
import { connect } from "react-redux"
import { Grid, Typography, IconButton } from "@material-ui/core"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import { withStyles } from "@material-ui/core/styles"
import {
	getCourseById,
	getPreviousCourse,
	getNextCourse
} from "../../actions/courseActions"
import { Link, withRouter } from "react-router-dom"
import Loading from "../controls/Loading"

const style = theme => ({
	root: {
		height: "100%"
	},
	videoItem: {
		overflow: "hidden",
		paddingTop: "30%",
		position: "relative"
	},
	video: {
		height: "100%",
		position: "absolute",
		top: "0",
		left: "0",
		width: "100%"
	}
})

class Course extends Component {
	componentDidMount() {
		this.updateCoursesProps(this.props.id)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.id !== this.props.id) this.updateCoursesProps(nextProps.id)
	}

	updateCoursesProps = id => {
		this.props.getCourseById(id)
		this.props.getPreviousCourse(id)
		this.props.getNextCourse(id)
	}

	render() {
		const { classes } = this.props
		const { course, prev, next, loading } = this.props.course

		if (loading === true) return <Loading />

		const hasPrev = Object.getOwnPropertyNames(prev).length > 0
		const hasNext = Object.getOwnPropertyNames(next).length > 0

		const prevButton = hasPrev ? (
			<Link to={`/course/id/${prev._id}`}>
				<IconButton color="primary">
					<KeyboardArrowLeft />
				</IconButton>
			</Link>
		) : (
			<IconButton color="primary" disabled>
				<KeyboardArrowLeft />
			</IconButton>
		)

		const nextButton = hasNext ? (
			<Link to={`/course/id/${next._id}`}>
				<IconButton color="primary">
					<KeyboardArrowRight />
				</IconButton>
			</Link>
		) : (
			<IconButton color="primary" disabled>
				<KeyboardArrowRight />
			</IconButton>
		)

		return (
			<Grid
				container
				align="center"
				justify="center"
				alignItems="center"
				alignContent="center"
				className={classes.root}
			>
				<Grid item xs={12}>
					<Typography variant="h3" component="h3" align="center">
						{course.title}
					</Typography>
					<br />
				</Grid>
				<Grid item xs={12}>
					<Grid
						container
						align="center"
						justify="center"
						alignContent="center"
						alignItems="center"
					>
						<Grid item xs={2}>
							{prevButton}
						</Grid>
						<Grid className={classes.videoItem} item xs={6}>
							<iframe
								className={classes.video}
								title="youtube"
								src={`https://www.youtube.com/embed/${
									course.link
								}?modestbranding=1&rel=0`}
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</Grid>
						<Grid item xs={2}>
							{nextButton}
						</Grid>
					</Grid>
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
	{ getCourseById, getPreviousCourse, getNextCourse }
)(withRouter(withStyles(style)(Course)))
