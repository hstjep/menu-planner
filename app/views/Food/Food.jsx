import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { getFoodItems, deleteFoodItem } from "actions/foodActions";
import toggleDeleteConfirm from "actions/commonActions";
import FoodList from 'components/food/FoodList';
import { PageHeader, Button } from 'react-bootstrap';

const mapStateToProps = (state) => {
  const { foodItems, foodItemsAreLoading } = state.food;
  const { isDeleteModalOpen } = state.common;

  return {
    foodItems,
    foodItemsAreLoading,
    isDeleteModalOpen
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  handleFoodItemDelete: (id) => dispatch(deleteFoodItem(id)),
  handleDeleteConfirmToggle: (id) => dispatch(toggleDeleteConfirm(id))
});

class Food extends PureComponent {
  componentDidMount() {
    this.props.dispatch(getFoodItems());
  }

  render() {
    const match = this.props.match;

    return (
      <div>
        <PageHeader>
          <small>Food</small>
        </PageHeader>
        <LinkContainer to={`${match.url}/create`}>
          <Button bsStyle="primary" bsSize="small"><span className="glyphicon glyphicon-plus" /> Create New</Button>
        </LinkContainer>
        <FoodList
          {...this.props}
          handleFoodItemDelete={this.props.handleFoodItemDelete}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Food);