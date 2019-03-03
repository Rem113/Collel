import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography
} from "@material-ui/core"

const style = theme => ({
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column"
	},
	clicks: {
		fontSize: "1rem"
	},
	date: {
		color: theme.palette.text.secondary,
		marginBottom: theme.spacing.unit
	},
	media: {
		objectFit: "cover"
	},
	cardActions: {
		marginTop: "auto"
	},
	tag: {
		textDecoration: "none",
		color: theme.palette.primary.main
	},
	button: {
		textDecoration: "none"
	}
})

class CourseCard extends Component {
	render() {
		const { course, classes } = this.props

		return (
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt={course.title}
						className={classes.media}
						image={`http://img.youtube.com/vi/${course.link}/maxresdefault.jpg`}
						title={course.title}
					/>
					<CardContent>
						<Typography variant="h5" component="h2">
							{course.title}{" "}
							<span className={classes.clicks}>(vu {course.clicks} fois)</span>
						</Typography>
						<Typography className={classes.date} component="small">
							{new Date(course.date).toLocaleDateString()}
						</Typography>
						<Typography component="p">{course.description}</Typography>
						<br />
						{course.tags.map(tag => (
							<Link key={tag} className={classes.tag} to={`tags/${tag}`}>
								#{tag}{" "}
							</Link>
						))}
					</CardContent>
				</CardActionArea>
				<CardActions className={classes.cardActions}>
					<Link className={classes.button} to={`course/id/${course._id}`}>
						<Button size="medium" color="primary">
							Voir le cours
						</Button>
					</Link>
				</CardActions>
			</Card>
		)
	}
}

export default withStyles(style)(CourseCard)
