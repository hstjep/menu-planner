import React, { Component } from 'react';
import Loader from "components/common/Loader";
import { Bootstrap, Button, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, FieldGroup, Label } from 'react-bootstrap';
import styles from "./foodCategoryCreateForm.css";
import validationMessages from '../../../constants/validationMessages';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const FieldInput = ({ label, input, meta, type, placeholder }) => {
	const { touched, error, warning } = meta;

	return (
		<FormGroup>
			<Col componentClass={ControlLabel} sm={2}>
				<label>{label}</label>
			</Col>
			<Col sm={4}>
				<FormControl
					type={type}
					placeholder={placeholder}
					value={input.value}
					onChange={input.onChange}
					onBlur={() => input.onBlur(input.value)} />
				{touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
			</Col>
		</FormGroup>
	)
}

class FoodCategoryCreateForm extends Component {
	render() {
		const { foodCategory, foodCategoryIsLoading, handleSubmit } = this.props;
		if (foodCategoryIsLoading) return <Loader />

		return (
			<form onSubmit={handleSubmit}>
				<Field name="title" component={FieldInput} type="text" value={foodCategory.title} label="Title" />
				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button type="submit" bsStyle="primary" className={styles.btnCustom}>Save</Button>
					</Col>
				</FormGroup>
			</form>
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
