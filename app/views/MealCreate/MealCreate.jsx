import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { getMeal, createMeal, updateMeal } from "../../actions/mealActions";
import { getFoodOptions, selectFood } from "../../actions/foodActions";
import MealCreateForm from '../../components/meal/MealCreateForm';
import { PageHeader, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { setQueryOptions } from './../../actions/queryUtilityActions';

const mapStateToProps = (state) => {
	const { meal, mealTypes, foodItems, mealIsLoading, isDeleteModalOpen } = state.meal;

	return {
		meal,
		mealTypes,
		foodItems,
		mealIsLoading,
		isDeleteModalOpen
	}
}

const mapDispatchToProps = dispatch => ({
	dispatch
  });

class MealCreate extends PureComponent {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFoodChange = this.handleFoodChange.bind(this);
		this.redirectToMealList = this.redirectToMealList.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		if (id) {
			this.props.dispatch(getMeal(id));
		}
	}

	handleFoodOptions = value => {
		return getFoodOptions(setQueryOptions({page: 1, pageSize: 10, searchTerm: value }));
	}

	handleFoodChange = value => {
		this.props.dispatch(selectFood(value))
	}

	handleSubmit = values => {
		const id = this.props.match.params.id;
		const { dispatch } = this.props;

		let data = JSON.parse(JSON.stringify(values));

		if (data.food && data.food.length > 0) {
			data.food = data.food.map(function(item) {
				return item.value || item._id;
			});
		}

		if (id) {
			dispatch(updateMeal(id, data, this.redirectToMealList));
		} else {
			dispatch(createMeal(data, this.redirectToMealList));
		}
	}

	redirectToMealList() {
		this.props.history.push('/meals');
	}

	render() {
		const match = this.props.match;
		const { meal, mealTypes, foodItems, mealIsLoading, isDeleteModalOpen } = this.props;
		const initValues = this.props.match.params.id ? this.props.meal : {};
		
		return (
			<div>
				<PageHeader>
					<small>{match.params.id ? 'Edit' : 'Create'} meal</small>
				</PageHeader>
				<MealCreateForm 
					meal={meal} 
					mealTypes={mealTypes} 
					foodItems={foodItems}
					mealIsLoading={mealIsLoading}
					handleFoodOptions={this.handleFoodOptions}
					handleFoodChange={this.handleFoodChange}
					onSubmit={this.handleSubmit} 
					initialValues={initValues}
				/>
				<LinkContainer to={`/meals`}>
					<Button bsStyle="link">Back to List</Button>
				</LinkContainer>
			</div>
		);
	}
}

export default connect(mapStateToProps)(MealCreate);