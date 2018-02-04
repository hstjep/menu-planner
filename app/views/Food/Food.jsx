import React, { PureComponent } from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { getFoodItems, deleteFoodItem } from "actions/foodActions";
import FoodList from 'components/food/FoodList';
import { Well, PageHeader, Button } from 'react-bootstrap';

class Food extends PureComponent {
  state = {
    foodItems: undefined,
    foodItemsAreLoading: false,
    isDeleteModalOpen: {}
  };

  handleUpdateState = newState => {
    this.setState(newState);
  };

  handleFoodItemDelete = (id) => {
    deleteFoodItem(id, this.handleUpdateState);
  }

  componentDidMount() {
    getFoodItems(this.handleUpdateState);
  }

  render() {
    const { foodItems, foodItemsAreLoading, isDeleteModalOpen } = this.state;
    const match = this.props.match;

    return (
      <div>
        {/* <Well bsSize="small"><h3>Food</h3></Well> */}
        <PageHeader>
          <small>Food</small>
        </PageHeader>
        <LinkContainer to={`${match.url}/create`}>
          <Button bsStyle="primary" bsSize="small"><span className="glyphicon glyphicon-plus"/> Create New</Button>
        </LinkContainer>
        <FoodList
          {...this.state}
          handleUpdateState={this.handleUpdateState}
          handleFoodItemDelete={this.handleFoodItemDelete}
        />
      </div>
    );
  }
}

export default Food;