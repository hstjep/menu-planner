import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { getFoodItem, createFoodItem, updateFoodItem } from "../../actions/foodActions";
import { uploadFile } from "../../actions/fileActions";
import FoodCreateForm from '../../components/food/FoodCreateForm';
import { PageHeader } from 'react-bootstrap';

const mapDispatchToProps = dispatch => {
	return {
		createFoodItem: (foodItem, callback) => dispatch(createFoodItem(foodItem, callback)),
		updateFoodItem: (foodItem, callback) => dispatch(updateFoodItem(foodItem, callback))
	};
};

class FoodCreate extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			foodItem: {
				title: '',
				imageUrl: '',
				description: ''
			},
			foodItemIsLoading: false,
			fileInput: undefined
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleImageClear = this.handleImageClear.bind(this);
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

		if (target.files && target.files.length > 0) {
			this.setState({
				fileInput: target.files[0]
			});
		} else {
			const value = target.value;
			const name = target.name;

			this.setState({
				foodItem: { ...this.state.foodItem, [name]: value }
			});
		}
	}

	handleImageClear() {
		this.setState({
			fileInput: undefined
		});
	}

	handleSubmit(event) {
		const image = this.state.fileInput;
		const id = this.props.match.params.id;
		const { updateFoodItem, createFoodItem } = this.props;

		let promises = [];

		if (image) {
			promises.push(uploadFile(image, this.redirectToFoodList));
		}

		var that = this;
		Promise.all(promises).then(function (data) {
			that.setState({
				foodItem: {
					...that.state.foodItem,
					imageUrl: data && data[0] ? data[0].path : ''
				}
			});

			const newFoodItem = that.state.foodItem;

			if (id) {
				updateFoodItem(id, newFoodItem, that.redirectToFoodList);
			} else {
				createFoodItem(newFoodItem, that.redirectToFoodList);
			}
		})

		event.preventDefault();
	}

	redirectToFoodList() {
		this.props.history.push('/food');
	}

	render() {
		const match = this.props.match;
		const { foodItem, fileInput, foodItemIsLoading } = this.state;

		return (
			<div>
				<PageHeader>
					<small>{match.params.id ? 'Edit' : 'Create'} food</small>
				</PageHeader>
				<FoodCreateForm foodItem={foodItem} foodItemIsLoading={foodItemIsLoading}
					handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}
					fileInput={fileInput} handleImageClear={this.handleImageClear} />
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(FoodCreate);
