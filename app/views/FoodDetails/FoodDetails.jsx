import React, { PureComponent } from "react";
import { Link, Route } from 'react-router-dom';
import { getFoodItem } from "actions/foodActions";
import Loader from "components/common/Loader";
import { PageHeader, Button } from 'react-bootstrap';

class FoodDetails extends PureComponent {
	state = {
		foodItem: undefined,
		foodItemIsLoading: false
	};

	handleUpdateState = newState => {
		this.setState(newState);
	};

	componentDidMount() {
		const id = this.props.match.params.id;

		if (id) {
			this.handleUpdateState({ foodItemIsLoading: true });

			getFoodItem(id, this.handleUpdateState);
		}
	}

	render() {
		const match = this.props.match;
		const { foodItem, foodItemIsLoading } = this.state;

		if (!foodItem || foodItemIsLoading) return <Loader />

		return (
			<div>
				<PageHeader>
					<small>{foodItem.title}</small>
				</PageHeader>
				<dl className="dl-horizontal">
					<dt>Description</dt>
					<dd>{foodItem.description}</dd>

					<dt>Category</dt>
					<dd>{foodItem.category}</dd>

					<dt>Subcategory</dt>
					<dd>{foodItem.subcategory}</dd>
				</dl>
			</div>
		);
	}
}

export default FoodDetails;