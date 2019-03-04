import React, { Component } from "react"
import { Grid, TextField, Button } from "@material-ui/core"

class CourseForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			...this.props.course,
			tags: this.props.course
				? this.props.course.tags
					? this.props.course.tags.join(", ")
					: ""
				: ""
		}
	}

	onSubmit = e => {
		e.preventDefault()

		const user = {
			title: this.state.title,
			description: this.state.description,
			link: this.state.link,
			tags: this.state.tags
		}

		this.props.onSubmit(user)
	}

	onChange = e => {
		e.preventDefault()

		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		const { errors } = this.props

		return (
			<Grid container justify="center" alignContent="center">
				<Grid item xs={9} md={6}>
					<Grid container>
						<Grid item xs={12}>
							<TextField
								name="title"
								variant="outlined"
								label="Titre"
								margin="dense"
								value={this.state.title}
								onChange={this.onChange}
								fullWidth
								errors={errors.title}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								name="description"
								variant="outlined"
								label="Description"
								margin="dense"
								value={this.state.description}
								onChange={this.onChange}
								fullWidth
								multiline
								rows={3}
								errors={errors.description}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								name="link"
								variant="outlined"
								label="Lien"
								margin="dense"
								value={this.state.link}
								onChange={this.onChange}
								fullWidth
								errors={errors.link}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								name="tags"
								variant="outlined"
								label="Tags"
								margin="dense"
								helperText="Entrez des tags, séparés par une virgule"
								value={this.state.tags}
								onChange={this.onChange}
								fullWidth
								errors={errors.tags}
							/>
						</Grid>
						<Grid item align="center" xs={12}>
							<Button
								variant="contained"
								color="primary"
								onClick={this.onSubmit}
							>
								Envoyer
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		)
	}
}

export default CourseForm
