import React, { Component } from "react"
import { Grid, CircularProgress } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const style = theme => ({
	root: {
		height: "100%"
	}
})

class Loading extends Component {
	render() {
		const { classes } = this.props

		return (
			<Grid
				container
				align="center"
				alignContent="center"
				className={classes.root}
			>
				<Grid item xs={12}>
					<CircularProgress />
				</Grid>
			</Grid>
		)
	}
}

export default withStyles(style)(Loading)
