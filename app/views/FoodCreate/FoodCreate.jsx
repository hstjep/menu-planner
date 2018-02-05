import React, { PureComponent } from "react";
import { Link, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { getFoodItem, createFoodItem, updateFoodItem } from "../../actions/foodActions";
import FoodCreateForm from '../../components/food/FoodCreateForm';
import { PageHeader } from 'react-bootstrap';

class FoodCreate extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			foodItem: {
				title: ''
				// description: ''
			},
			foodItemIsLoading: false
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.redirectToFoodList = this.redirectToFoodList.bind(this);
	}


	handleUpdateState = newState => {
		this.setState(newState);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		if (id) {
			getFoodItem(id, this.handleUpdateState);
		}
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			foodItem: { [name]: value }
		});
	}

	handleSubmit(event) {
		const newFoodItem = this.state.foodItem;
		const id = this.props.match.params.id;

		var promise = undefined;
		if (id) {
			updateFoodItem(id, newFoodItem, this.redirectToFoodList);
		} else {
			createFoodItem(newFoodItem, this.redirectToFoodList);
		}

		event.preventDefault();
	}

	redirectToFoodList() {
		this.props.history.push('/food');
	}

	render() {
		const match = this.props.match;
		const { foodItem, foodItemIsLoading } = this.state;

		return (
			<div>
				<PageHeader>
					<small>{match.params.id ? 'Edit' : 'Create'} food</small>
				</PageHeader>
				<FoodCreateForm foodItem={foodItem} foodItemIsLoading={foodItemIsLoading}
					handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />
			</div>
		);
	}
}

export default FoodCreate;