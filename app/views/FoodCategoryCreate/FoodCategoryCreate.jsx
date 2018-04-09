import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { getFoodCategory, createFoodCategory, updateFoodCategory } from "../../actions/foodCategoryActions";
import FoodCategoryCreateForm from '../../components/food-category/FoodCategoryCreateForm';
import { PageHeader } from 'react-bootstrap';

const mapStateToProps = (state) => {
  const { foodCategory, foodCategoryIsLoading, isDeleteModalOpen } = state.foodCategoryDetails;

  return {
    foodCategory,
    foodCategoryIsLoading,
    isDeleteModalOpen
  }
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
		createFoodCategory: (foodCategory, callback) => dispatch(createFoodCategory(foodCategory, callback)),
		updateFoodCategory: (foodCategory, callback) => dispatch(updateFoodCategory(foodCategory, callback))
	};
};

class FoodCategoryCreate extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			foodCategory: {
				title: ''
			},
			foodCategoryIsLoading: false
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.redirectToFoodCategoryList = this.redirectToFoodCategoryList.bind(this);
	}

	handleUpdateState = newState => {
		this.setState(newState);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		if (id) {
			this.props.dispatch(getFoodCategory(id));
		}
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			foodCategory: { ...this.state.foodCategory, [name]: value }
		});
	}

	handleSubmit(event) {
		const id = this.props.match.params.id;
		const { updateFoodCategory, createFoodCategory } = this.props;
		const newFoodCategory = that.state.foodCategory;

		if (id) {
			updateFoodCategory(id, newFoodCategory, that.redirectToFoodCategoryList);
		} else {
			createFoodCategory(newFoodCategory, that.redirectToFoodCategoryList);
		}

		event.preventDefault();
	}

	redirectToFoodCategoryList() {
		this.props.history.push('/food-category');
	}

	render() {
		const match = this.props.match;
		const { foodCategory, foodCategoryIsLoading } = this.props;

		return (
			<div>
				<PageHeader>
					<small>{match.params.id ? 'Edit' : 'Create'} food category</small>
				</PageHeader>
				<FoodCategoryCreateForm foodCategory={foodCategory} foodCategoryIsLoading={foodCategoryIsLoading}
					handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodCategoryCreate);
