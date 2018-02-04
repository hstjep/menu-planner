import React, { Component } from 'react';
import Loader from "components/common/Loader";
import { Bootstrap, Button, Grid, Row, Col } from 'react-bootstrap';

class FoodCreateForm extends Component {
	render() {
		const { foodItem, foodItemIsLoading, handleSubmit, handleInputChange } = this.props;

		if (foodItemIsLoading) return <Loader />

		return (
			<form onSubmit={handleSubmit}>
				<label>
					Name:
            <input name="title" type="text" value={foodItem.title} onChange={handleInputChange} />
				</label>
				{/* <label>
          Description:
          <textarea name="description" value={this.state.description} onChange={this.handleInputChange} />
        </label> */}
				<Button type="submit" bsStyle="primary">Save</Button>
			</form>)
	}
}

export default FoodCreateForm;  