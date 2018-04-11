import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { getFoodCategory, createFoodCategory, updateFoodCategory } from "../../actions/foodCategoryActions";
import FoodCategoryCreateForm from '../../components/food-category/FoodCategoryCreateForm';
import { PageHeader } from 'react-bootstrap';

const mapStateToProps = (state) => {
	const { foodCategory, foodCategoryIsLoading, isDeleteModalOpen } = state.foodCategory;

	return {
		foodCategory,
		foodCategoryIsLoading,
		isDeleteModalOpen
	}
}

class FoodCategoryCreate extends PureComponent {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.redirectToFoodCategoryList = this.redirectToFoodCategoryList.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		if (id) {
			this.props.dispatch(getFoodCategory(id));
		} else {
			
		}
	}

	handleSubmit = values => {
		const id = this.props.match.params.id;
		const { dispatch } = this.props;

		if (id) {
			dispatch(updateFoodCategory(id, values, this.redirectToFoodCategoryList));
		} else {
			dispatch(createFoodCategory(values, this.redirectToFoodCategoryList));
		}
	}

	redirectToFoodCategoryList() {
		this.props.history.push('/food-category');
	}

	render() {
		const match = this.props.match;
		const { foodCategory, foodCategoryIsLoading, isDeleteModalOpen } = this.props;
		const initValues = this.props.match.params.id ? this.props.foodCategory : {};

		return (
			<div>
				<PageHeader>
					<small>{match.params.id ? 'Edit' : 'Create'} food category</small>
				</PageHeader>
				<FoodCategoryCreateForm foodCategory={foodCategory} foodCategoryIsLoading={foodCategoryIsLoading}
					onSubmit={this.handleSubmit} initialValues={initValues}
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps)(FoodCategoryCreate);
