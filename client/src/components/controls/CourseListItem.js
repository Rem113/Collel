import React, { Component } from "react"
import { Grid, ListItem, Typography, Button } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"

const style = theme => ({
	container: {
		display: "flex",
		flexDirection: "column"
	},
	image: {
		width: "100%"
	},
	bottom: {
		marginTop: "auto",
		marginBottom: "0"
	},
	vertical: {
		marginTop: "auto",
		marginBottom: "auto"
	},
	tag: {
		textDecoration: "none",
		color: theme.palette.primary.main,
		"&:hover": {
			color: theme.palette.primary.dark
		}
	},
	button: {
		textDecoration: "none"
	}
})

class CourseListItem extends Component {
	render() {
		const { course, classes } = this.props
		return (
			<ListItem>
				<Grid container spacing={24}>
					<Grid item xs={12} md={3} className={classes.vertical}>
						<img
							className={classes.image}
							src={`http://img.youtube.com/vi/${course.link}/maxresdefault.jpg`}
							alt={course.title}
							title={course.title}
						/>
					</Grid>
					<Grid item xs={12} md={6} className={classes.vertical}>
						<Typography variant="h2" component="h4">
							{course.title}
						</Typography>
						<Typography variant="h5" component="h6">
							{new Date(course.date).toLocaleDateString()}
						</Typography>
						<br />
						<p className={classes.bottom}>{course.description}</p>
					</Grid>
					<Grid item xs={12} md={3} className={classes.vertical} align="center">
						<Grid container>
							<Grid item xs={12}>
								<p>
									{course.tags.map(tag => (
										<Link to={`/tag/${tag}`} className={classes.tag}>
											#{tag + " "}
										</Link>
									))}
								</p>
								<Link
									className={classes.button}
									to={`/course/id/${course._id}`}
								>
									<Button color="primary">Voir le cours</Button>
								</Link>
								<p>{course.clicks} clicks</p>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</ListItem>
		)
	}
}

export default withStyles(style)(CourseListItem)
