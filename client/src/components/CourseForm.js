import React, { Component } from "react"

class CourseForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			...this.props.course,
			tags: this.props.course
				? this.props.course.tags
					? this.props.course.tags.join(",")
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
		return (
			<React.Fragment />
			/*<Col className="mx-auto" sm={8}>
				<Form onSubmit={this.onSubmit}>
					<FormGroup row>
						<Label for="title" sm={2}>
							Titre
						</Label>
						<Col sm={10}>
							<Input
								type="text"
								name="title"
								placeholder="Titre"
								value={this.state.title}
								onChange={this.onChange}
								className={
									this.props.errors
										? this.props.errors.title
											? "is-invalid"
											: ""
										: ""
								}
							/>
							{this.props.errors && (
								<small className="invalid-feedback">
									{this.props.errors.title}
								</small>
							)}
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="description" sm={2}>
							Description
						</Label>
						<Col sm={10}>
							<Input
								type="textarea"
								name="description"
								rows="5"
								placeholder="Description"
								value={this.state.description}
								onChange={this.onChange}
								className={
									this.props.errors
										? this.props.errors.description
											? "is-invalid"
											: ""
										: ""
								}
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="link" sm={2}>
							Lien
						</Label>
						<Col sm={10}>
							<Input
								type="text"
								name="link"
								placeholder="Lien"
								value={this.state.link}
								onChange={this.onChange}
								className={
									this.props.errors
										? this.props.errors.link
											? "is-invalid"
											: ""
										: ""
								}
							/>
							{this.props.errors && (
								<small className="invalid-feedback">
									{this.props.errors.link}
								</small>
							)}
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="tags" sm={2}>
							Tags
						</Label>
						<Col sm={10}>
							<Input
								type="text"
								name="tags"
								placeholder="Tags"
								value={this.state.tags}
								onChange={this.onChange}
								className={
									this.props.errors
										? this.props.errors.tags
											? "is-invalid"
											: ""
										: ""
								}
							/>
							<FormText color="muted">
								Entrez des tags, séparés par une virgule
							</FormText>
						</Col>
					</FormGroup>
					<FormGroup className="text-center">
						<Button color="dark">Envoyer</Button>
					</FormGroup>
				</Form>
			</Col>*/
		)
	}
}

export default CourseForm
