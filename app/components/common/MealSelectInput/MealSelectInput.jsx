import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, FormGroup, Radio, ControlLabel, Label } from 'react-bootstrap';
import { Field } from 'redux-form';
import Select2Input from '../../common/Select2Input';
import { getMeals } from "actions/mealActions";

const mapStateToProps = (state) => {
	const { meals, mealsAreLoading } = state.meals;

	return {
		meals,
		mealsAreLoading
	}
}

const mapDispatchToProps = dispatch => ({
	dispatch
});

class MealSelectInput extends Component {
	componentDidMount() {
		this.props.dispatch(getMeals());
	}

	render() {
		const { value, onChange, meals } = this.props;

		if (!meals) return null;
		return (
			<FormGroup>
				<Col componentClass={ControlLabel} sm={2}>
					<label>Meal</label>
				</Col>
				<Field name="meals" component={Select2Input} type="select" value={value} label="Meal" data={meals} selectedValue={value} onChange={onChange} />
			</FormGroup>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MealSelectInput);