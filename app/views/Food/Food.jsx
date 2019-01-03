import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { getFoodItems, deleteFoodItem } from 'actions/foodActions';
import {toggleDeleteConfirm, changePage } from 'actions/commonActions';
import FoodList from 'components/food/FoodList';
import { PageHeader, Button } from 'react-bootstrap';
import withPagination from './../../helpers/withPagination';
import queryString from 'query-string';

const mapStateToProps = (state) => {
  const { foodItems, foodItemsAreLoading, queryOptions } = state.food;
  const { isDeleteModalOpen } = state.common;

  return {
    foodItems,
    foodItemsAreLoading,
    queryOptions,
    isDeleteModalOpen
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  handleFoodItemDelete: (id) => dispatch(deleteFoodItem(id)),
  handleDeleteConfirmToggle: (id) => dispatch(toggleDeleteConfirm(id)),
});

class Food extends PureComponent {
  componentDidMount() {
    const params = queryString.parse(window.location.search);
    this.props.dispatch(getFoodItems({...this.props.queryOptions, ...params,  page: params.page || 1 }));
  }

  render() {
    const { foodItems, foodItemsAreLoading, handleDeleteConfirmToggle, handleFoodItemDelete, isDeleteModalOpen, handlePageChange, queryOptions, match } = this.props;
    const FoodListWithPagination = withPagination(FoodList, { ...queryOptions }, getFoodItems);

    return (
      <div>
        <PageHeader>
          <small>Food</small>
        </PageHeader>
        <LinkContainer to={`${match.url}/create`}>
          <Button bsStyle="primary" bsSize="small"><span className="glyphicon glyphicon-plus" /> Create New</Button>
        </LinkContainer>
        <FoodListWithPagination
          foodItems={foodItems.items}
          foodItemsAreLoading={foodItemsAreLoading}
          handleDeleteConfirmToggle={handleDeleteConfirmToggle}
          handleFoodItemDelete={handleFoodItemDelete} 
          isDeleteModalOpen={isDeleteModalOpen} 
          handlePageChange={handlePageChange}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Food);