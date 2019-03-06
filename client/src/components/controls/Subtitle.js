import React, { Component } from "react"
import { Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const style = theme => ({
	title: {
		marginBottom: theme.spacing.unit * 2
	},
	hr: {
		width: "5%",
		borderColor: theme.palette.secondary.main,
		border: "2px solid",
		marginBottom: theme.spacing.unit * 2
	}
})

class Subtitle extends Component {
	render() {
		const { classes } = this.props

		return (
			<React.Fragment>
				<Typography component="h3" variant="h3" align="center">
					{this.props.caption}
				</Typography>
				<hr className={classes.hr} />
			</React.Fragment>
		)
	}
}

export default withStyles(style)(Subtitle)
