import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { getFoodItem, createFoodItem, updateFoodItem } from "../../actions/foodActions";
import { uploadFile } from "../../actions/fileActions";
import { getFoodCategories } from "../../actions/foodCategoryActions";
import FoodCreateForm from '../../components/food/FoodCreateForm';
import { PageHeader, Button } from 'react-bootstrap';
import { change } from 'redux-form';
import { LinkContainer } from 'react-router-bootstrap';

const mapStateToProps = (state) => {
	// const { foodItem, foodItemIsLoading } = state.foodItem;
	const { foodItem, foodItemIsLoading, foodCategories, foodCategoriesAreLoading } = state.foodCreate;

	return {
		foodItem,
		foodItemIsLoading,
		// isDeleteModalOpen,
		foodCategories,
		foodCategoriesAreLoading
	}
}

class FoodCreate extends PureComponent {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.redirectToFoodList = this.redirectToFoodList.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		let promises = [];

		if (id) {
			this.props.dispatch(getFoodItem(id));
		}

		this.props.dispatch(getFoodCategories());	
	}

	handleFileInputClear() {
		this.props.dispatch(change('createFood', 'title', ''));
	}

	handleSubmit = values => {
		const id = this.props.match.params.id;
		const { dispatch } = this.props;

		let promises = [];

		if (values.file && values.file.length > 0) {
			promises.push(uploadFile(values.file[0], this.redirectToFoodList));
		}

		var that = this;
		Promise.all(promises).then(function (data) {
			if (data && data.length > 0) {
				values.imageUrl = data[0].path;
			}

			delete values.file;

			if (id) {
				dispatch(updateFoodItem(id, values, that.redirectToFoodList));
			} else {
				dispatch(createFoodItem(values, that.redirectToFoodList));
			}
		})
	}

	redirectToFoodList() {
		this.props.history.push('/food');
	}

	render() {
		const match = this.props.match;
		const { foodItem, foodItemIsLoading, foodCategories, foodCategoriesAreLoading } = this.props;
		const initValues = this.props.match.params.id ? this.props.foodItem : {};

		return (
			<div>
				<PageHeader>
					<small>{match.params.id ? 'Edit' : 'Create'} food</small>
				</PageHeader>
				<FoodCreateForm
					foodItem={foodItem}
					foodItemIsLoading={foodItemIsLoading}
					foodCategories={foodCategories}
					foodCategoriesAreLoading={foodCategoriesAreLoading}
					onSubmit={this.handleSubmit}
					initialValues={initValues} />
				<LinkContainer to={`/food`}>
					<Button bsStyle="link">Back to List</Button>
				</LinkContainer>
			</div>
		);
	}
}

export default connect(mapStateToProps)(FoodCreate);
