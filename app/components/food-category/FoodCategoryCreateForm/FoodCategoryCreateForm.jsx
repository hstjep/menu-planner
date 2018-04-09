import React, { Component } from 'react';
import Loader from "components/common/Loader";
import { Bootstrap, Button, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, FieldGroup, Label } from 'react-bootstrap';
import styles from "./foodCategoryCreateForm.css";
import { Field, reduxForm } from 'redux-form';

class FoodCategoryCreateForm extends Component {
	render() {
		const { foodCategory, foodCategoryIsLoading, handleSubmit, handleInputChange, handleImageClear, fileInput } = this.props;
		if (foodCategoryIsLoading) return <Loader />

		return (
			<Form onSubmit={handleSubmit} type="multipart/form-data" horizontal>
				<FormGroup>
					<Col componentClass={ControlLabel} sm={2}>
						Name
					</Col>
					<Col sm={4}>
						<FormControl name="title" type="text" value={foodCategory.title} onChange={handleInputChange} placeholder="Name" />
					</Col>
				</FormGroup>
				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button type="submit" bsStyle="primary">Save</Button>
					</Col>
				</FormGroup>
			</Form>)
	}
}

export default FoodCategoryCreateForm;  