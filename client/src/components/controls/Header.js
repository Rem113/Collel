import React, { Component } from "react"
import { Typography, Grid } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
	header: {
		marginBottom: theme.spacing.unit * 5
	},
	title: {
		margin: theme.spacing.unit * 2
	},
	hr: {
		width: "10%",
		borderColor: theme.palette.primary.main,
		border: "2px solid"
	}
})

class Header extends Component {
	render() {
		const { classes } = this.props

		return (
			<Grid container className={classes.header}>
				<Grid item xs={12}>
					<Typography
						className={classes.title}
						align="center"
						component="h1"
						variant="h1"
					>
						Mini-Collel
					</Typography>
					<hr className={classes.hr} />
				</Grid>
			</Grid>
		)
	}
}

export default withStyles(styles)(Header)
