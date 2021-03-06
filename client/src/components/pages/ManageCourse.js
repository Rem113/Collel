import React, { Component } from "react"
import { connect } from "react-redux"
import { Add, EditOutlined, DeleteOutlined } from "@material-ui/icons"
import {
	Grid,
	List,
	ListItem,
	Button,
	IconButton,
	Typography
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { getCourses, deleteCourse } from "../../actions/courseActions"
import { Link } from "react-router-dom"
import Header from "../controls/Header"
import Subtitle from "../controls/Subtitle"

const style = theme => ({
	margin: {
		margin: "auto"
	},
	button: {
		margin: theme.spacing.unit,
		textDecoration: "none"
	},
	leftIcon: {
		marginRight: theme.spacing.unit
	}
})

class ManageCourse extends Component {
	componentDidMount() {
		this.props.getCourses()
	}

	render() {
		const { classes } = this.props
		const { courses } = this.props.course

		return (
			<Grid container justify="center">
				<Header />
				<Grid item xs={12}>
					<Subtitle caption="Gérer les cours" />
				</Grid>
				<Grid item xs={12} align="center">
					<Link to={"/course/add"} className={classes.button}>
						<Button variant="contained" color="primary">
							<Add className={classes.leftIcon} />
							Ajouter un cours
						</Button>
					</Link>
				</Grid>
				<Grid item xs={9} md={6} lg={4}>
					<List>
						{courses.map(course => (
							<ListItem key={course._id}>
								<Grid container>
									<Grid item xs={6} className={classes.margin}>
										<Typography variant="h5" component="h5">
											{course.title}
										</Typography>
									</Grid>
									<Grid item xs={6}>
										<Grid container align="end">
											<Grid item xs={12}>
												<Link to={`/course/edit/${course._id}`}>
													<IconButton color="primary">
														<EditOutlined />
													</IconButton>
												</Link>
												<IconButton
													color="secondary"
													onClick={() => this.props.deleteCourse(course._id)}
												>
													<DeleteOutlined />
												</IconButton>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</ListItem>
						))}
					</List>
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
	{ getCourses, deleteCourse }
)(withStyles(style)(ManageCourse))
