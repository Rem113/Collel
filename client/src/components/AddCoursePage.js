import React, { Component } from "react"
import {
	Col,
	Container,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from "reactstrap"
import { addCourse } from "../actions/courseActions"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

export class AddCoursePage extends Component {
	constructor() {
		super()

		this.state = {
			title: "",
			description: "",
			link: "",
			tags: []
		}
	}

	onChange = e => {
		e.preventDefault()

		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = e => {
		e.preventDefault()

		const user = {
			title: this.state.title,
			description: this.state.description,
			link: this.state.link,
			tags: this.state.tags
		}

		this.props.addCourse(user, this.props.history)
	}

	render() {
		return (
			<Container>
				<h1 className="display-3 text-center my-4">Ajouter un cours</h1>
				<Col className="mx-auto" sm={8}>
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
								/>
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
								/>
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
				</Col>
			</Container>
		)
	}
}

export default connect(
	null,
	{ addCourse }
)(withRouter(AddCoursePage))
