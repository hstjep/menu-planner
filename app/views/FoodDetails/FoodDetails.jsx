import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { getFoodItem } from "actions/foodActions";
import Loader from "components/common/Loader";
import { PageHeader, Button } from 'react-bootstrap';

const mapStateToProps = (state) => {
  const { foodItem, foodItemIsLoading } = state.foodDetails;

  return {
    foodItem,
    foodItemIsLoading
  }
}

class FoodDetails extends PureComponent {
	componentDidMount() {
		const id = this.props.match.params.id;

		if (id) {
			this.props.dispatch(getFoodItem(id));
		}
	}

	render() {
		const match = this.props.match;
		const { foodItem, foodItemIsLoading } = this.props;
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

					<dd><img src={foodItem.imageUrl} /></dd>
				</dl>
			</div>
		);
	}
}

export default connect(mapStateToProps)(FoodDetails);