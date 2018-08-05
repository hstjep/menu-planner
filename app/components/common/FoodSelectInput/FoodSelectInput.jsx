import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Col, FormGroup, Radio, ControlLabel, Label } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import Select2Input from '../../common/Select2Input';
import { getFoodItems } from "actions/foodActions";

const mapStateToProps = (state) => {
	const { foodItems, foodItemsAreLoading } = state.food;
  
	return {
	  foodItems,
	  foodItemsAreLoading
	}
  }

  const mapDispatchToProps = dispatch => ({
	dispatch
  });

class FoodSelectInput extends Component {	
	componentDidMount() {
		this.props.dispatch(getFoodItems());
	  }

	render() {
		const { value, onChange, foodItems } = this.props;

		if (!foodItems) return null;
		return (
			<FormGroup>
				<Col componentClass={ControlLabel} sm={2}>
					<label>Food</label>
				</Col>
			<Field name="food" component={Select2Input} type="select" value={value} label="Food" data={foodItems} selectedValue={value} onChange={onChange} />			
		</FormGroup>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodSelectInput);