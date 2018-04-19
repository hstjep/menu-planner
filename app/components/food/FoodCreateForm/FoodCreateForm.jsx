import React, { Component } from 'react';
import Loader from "components/common/Loader";
import { Bootstrap, Button, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, FieldGroup, Label } from 'react-bootstrap';
import styles from "./foodCreateForm.css";
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../../common/FieldInput';
import FileInput from '../../common/FileInput';
import SelectInput from '../../common/SelectInput';
import RadioInput from '../../common/RadioInput';

class FoodCreateForm extends Component {
	render() {
		const { foodItem, foodItemIsLoading, foodCategories, handleSubmit } = this.props;
		if (foodItemIsLoading) return <Loader />

		return (
			<Form onSubmit={handleSubmit} type="multipart/form-data" horizontal>
				<Field name="title" component={FieldInput} type="text" value={foodItem.title} label="Title" />
				<Field name="description" component={FieldInput} type="textarea" value={foodItem.description} label="Description" />
				<Field name="category" component={SelectInput} type="select" value={foodItem.category} label="Category" data={foodCategories} selectedValue={foodItem.category} optionField="title" />
				<FormGroup>
					<Col componentClass={ControlLabel} sm={2}>
						<label>Subcategory</label>
					</Col>
					<Col sm={4}>
						<label className="radio-inline">
							<Field name="subcategory" component="input" type="radio" value="Basic" label="Basic" />
							Basic
						</label>
						<label className="radio-inline">
							<Field name="subcategory" component="input" type="radio" value="Prepared" label="Prepared" />
							Prepared
						</label>
					</Col>
				</FormGroup>
				<FormGroup>
					<Col componentClass={ControlLabel} sm={2}></Col>
					<Col sm={4}>
						<Field component={FileInput} name='file' accept=".jpg, .jpeg, .png" />
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

export default reduxForm({
	form: 'createFood',
	fileds: ['title', 'description', 'file', 'category'],
	enableReinitialize: true
	// validate
})(FoodCreateForm);