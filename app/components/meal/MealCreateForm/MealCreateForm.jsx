import React, { Component } from 'react';
import Loader from "components/common/Loader";
import { Bootstrap, Button, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, FieldGroup, Label } from 'react-bootstrap';
import styles from "./mealCreateForm.css";
import validationMessages from '../../../constants/validationMessages';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import FieldInput from '../../common/FieldInput';
import Select2Input from '../../common/Select2Input';

class MealCreateForm extends Component {
	render() {
		const { meal, mealTypes, mealIsLoading, handleFoodOptions, handleFoodChange, handleSubmit } = this.props;
		if (mealIsLoading) return <Loader />

		return (
			<Form onSubmit={handleSubmit} type="multipart/form-data" horizontal>
				<Field name="title" component={FieldInput} type="text" value={meal.title} label="Title" />
				<FormGroup>
					<Col componentClass={ControlLabel} sm={2}>
						<label>Food</label>
					</Col>
					<Field name="food" component={Select2Input} type="select" value={meal.food} label="Food" selectedValue={meal.food} loadOptions={handleFoodOptions} onChange={handleFoodChange} isMulti={true} />
				</FormGroup>

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
	if (values.type && values.title.length > maxLengthTitle) {
		errors.title = validationMessages.maxLength(maxLengthTitle);
	}

	if (!values.title) {
		errors.title = validationMessages.required;
	}

	return errors
}

MealCreateForm.propTypes = {
	meal: PropTypes.shape({
		food: PropTypes.array,
		type: PropTypes.string
	}),
	mealIsLoading: PropTypes.bool.isRequired,
	onSubmit: PropTypes.func.isRequired,
	initialValues: PropTypes.shape({
		food: PropTypes.array,
		type: PropTypes.string
	})

};

export default reduxForm({
	form: 'createMeal',
	fileds: ['food', 'type'],
	enableReinitialize: true,
	validate
})(MealCreateForm);


