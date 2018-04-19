import React, { Component } from 'react';
import Loader from "components/common/Loader";
import { Bootstrap, Button, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, FieldGroup, Label } from 'react-bootstrap';
import styles from "./foodCategoryCreateForm.css";
import validationMessages from '../../../constants/validationMessages';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import FieldInput from '../../common/FieldInput';

class FoodCategoryCreateForm extends Component {
	render() {
		const { foodCategory, foodCategoryIsLoading, handleSubmit } = this.props;
		if (foodCategoryIsLoading) return <Loader />

		return (
			<Form onSubmit={handleSubmit} type="multipart/form-data" horizontal>
				<Field name="title" component={FieldInput} type="text" value={foodCategory.title} label="Title" />
				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button type="submit" bsStyle="primary" className={styles.btnCustom}>Save</Button>
					</Col>
				</FormGroup>
			</Form>
		)
	}
}

const validate = values => {
	const errors = {};

	const maxLengthTitle = 50;
	if (values.title && values.title.length > maxLengthTitle) {
		errors.title = validationMessages.maxLength(maxLengthTitle);
	}

	if (!values.title) {
		errors.title = validationMessages.required;
	}

	return errors
}

FoodCategoryCreateForm.propTypes = {
	foodCategory: PropTypes.shape({
		title: PropTypes.string
	}),
	foodCategoryIsLoading: PropTypes.bool.isRequired,
	onSubmit: PropTypes.func.isRequired,
	initialValues: PropTypes.shape({
		title: PropTypes.string
	})

};

export default reduxForm({
	form: 'createFoodCategory',
	fileds: ['title'],
	enableReinitialize: true,
	validate
})(FoodCategoryCreateForm);


