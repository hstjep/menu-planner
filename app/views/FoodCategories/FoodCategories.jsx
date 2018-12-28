import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { getFoodCategories, deleteFoodCategory } from "actions/foodCategoryActions";
import toggleDeleteConfirm from "actions/commonActions";
import FoodCategoryList from 'components/food-category/FoodCategoryList';
import { PageHeader, Button } from 'react-bootstrap';

const mapStateToProps = (state) => {
  const { foodCategories, foodCategoriesAreLoading } = state.foodCategories;
  const { isDeleteModalOpen } = state.common;

  return {
    foodCategories,
    foodCategoriesAreLoading,
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
    this.props.dispatch(getFoodCategories());
  }

  render() {
    const match = this.props.match;

    return (
      <div>
        <PageHeader>
          <small>Food Category</small>
        </PageHeader>
        <LinkContainer to={`${match.url}/create`}>
          <Button bsStyle="primary" bsSize="small"><span className="glyphicon glyphicon-plus" /> Create New</Button>
        </LinkContainer>
        <FoodCategoryList
          {...this.props}
          handleFoodCategoryDelete={this.props.handleFoodCategoryDelete}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodCategories);