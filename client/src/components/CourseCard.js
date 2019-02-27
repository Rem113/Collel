import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const styles = {
	media: {
		height: "15rem"
	}
}

class CourseCard extends Component {
	render() {
		const { course, classes } = this.props

		return (
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={`http://img.youtube.com/vi/${course.link}/maxresdefault.jpg`}
						title={course.title}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{course.title}{" "}
							<Typography size="small">(vu {course.clicks} fois)</Typography>
						</Typography>
						<Typography component="p">{course.description}</Typography>
						{course.tags.map(tag => (
							<Typography>#{tag} </Typography>
						))}
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Voir le cours
					</Button>
				</CardActions>
			</Card>
		)
	}
}

export default withStyles(styles)(CourseCard)
