import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { getFoodCategories, deleteFoodCategory } from "actions/foodCategoryActions";
import toggleDeleteConfirm from "actions/commonActions";
import FoodCategoryList from 'components/food-category/FoodCategoryList';
import { PageHeader, Button } from 'react-bootstrap';
import withPagination from './../../helpers/withPagination';
import queryString from 'query-string';

const mapStateToProps = (state) => {
  const { foodCategories, foodCategoriesAreLoading, queryOptions } = state.foodCategories;
  const { isDeleteModalOpen } = state.common;

  return {
    foodCategories,
    foodCategoriesAreLoading,
    queryOptions,
    isDeleteModalOpen
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  handleFoodCategoryDelete: (id) => dispatch(deleteFoodCategory(id)),
  handleDeleteConfirmToggle: (id) => dispatch(toggleDeleteConfirm(id))
});

class FoodCategories extends PureComponent {
  componentDidMount() {
    const params = queryString.parse(window.location.search);
    this.props.dispatch(getFoodCategories({...this.props.queryOptions, ...params,  page: params.page || 1 }));
  }

  render() {
    const { foodCategories, foodCategoriesAreLoading, handleDeleteConfirmToggle, handleFoodCategoryDelete, isDeleteModalOpen, match, queryOptions } = this.props;
    const FoodCategoryListWithPagination = withPagination(FoodCategoryList, { ...queryOptions }, getFoodCategories);

    return (
      <div>
        <PageHeader>
          <small>Food Category</small>
        </PageHeader>
        <LinkContainer to={`${match.url}/create`}>
          <Button bsStyle="primary" bsSize="small"><span className="glyphicon glyphicon-plus" /> Create New</Button>
        </LinkContainer>
        <FoodCategoryListWithPagination
          foodCategoriesAreLoading={foodCategoriesAreLoading}
          foodCategories={foodCategories.items}
          handleDeleteConfirmToggle={handleDeleteConfirmToggle}
          handleFoodCategoryDelete={handleFoodCategoryDelete}
          isDeleteModalOpen={isDeleteModalOpen}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodCategories);