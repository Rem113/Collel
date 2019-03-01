import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import HomeFab from "../controls/HomeFab"
import Header from "../controls/Header"
import LastCourses from "../controls/LastCourses"

class Home extends Component {
	render() {
		return (
			<Grid container justify="center">
				<Grid item xs={12}>
					<Header />
				</Grid>
				<Grid item xs={11}>
					<LastCourses />
				</Grid>
				<HomeFab />
			</Grid>
		)
	}
}

export default Home
