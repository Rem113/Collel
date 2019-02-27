import React, { Component } from "react"
import CourseDeck from "./CourseDeck"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({
	header: {
		textAlign: "center"
	}
})

class Home extends Component {
	render() {
		const { classes } = this.props

		return (
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<Typography
						className={classes.header}
						component="h1"
						variant="h1"
						gutterBottom
					>
						Mini-Collel
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography
						className={classes.header}
						component="h3"
						variant="h3"
						gutterBottom
					>
						Les derniers cours
					</Typography>
				</Grid>
				<Grid item>
					<CourseDeck />
				</Grid>
			</Grid>
		)
	}
}

export default withStyles(styles)(Home)
