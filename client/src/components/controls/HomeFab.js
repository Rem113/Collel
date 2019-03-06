import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import HomeOutlined from "@material-ui/icons/HomeOutlined"
import { Link } from "react-router-dom"

const styles = theme => ({
	fab: {
		position: "fixed",
		bottom: theme.spacing.unit * 2,
		right: theme.spacing.unit * 2,
		backgroundColor: theme.palette.secondary.dark,
		color: theme.palette.common.white,
		"&:hover": {
			backgroundColor: theme.palette.secondary.main
		}
	}
})

class HomeFab extends Component {
	render() {
		const { classes } = this.props

		return (
			<Link to={"/"}>
				<Fab className={classes.fab}>
					<HomeOutlined />
				</Fab>
			</Link>
		)
	}
}

export default withStyles(styles)(HomeFab)
