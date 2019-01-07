import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { getMeals, deleteMeal } from "actions/mealActions";
import { toggleDeleteConfirm } from "actions/commonActions";
import MealList from 'components/meal/MealList';
import { PageHeader, Button } from 'react-bootstrap';
import withPagination from './../../helpers/withPagination';
import queryString from 'query-string';

const mapStateToProps = (state) => {
  const { meals, mealsAreLoading, queryOptions } = state.meals;
  const { isDeleteModalOpen } = state.common;

  return {
    meals,
    mealsAreLoading,
    queryOptions,
    isDeleteModalOpen
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  handleMealDelete: (id) => dispatch(deleteMeal(id)),
  handleDeleteConfirmToggle: (id) => dispatch(toggleDeleteConfirm(id))
});

class Meals extends PureComponent {
  componentDidMount() {
    const params = queryString.parse(window.location.search);
    this.props.dispatch(getMeals({...this.props.queryOptions, ...params,  page: params.page || 1 }));
  }

  render() {
    const { meals, mealsAreLoading, handleDeleteConfirmToggle, handleMealDelete, isDeleteModalOpen, match, queryOptions } = this.props;
    const MealListWithPagination = withPagination(MealList, { ...queryOptions }, getMeals);

    return (
      <div>
        <PageHeader>
          <small>Meals</small>
        </PageHeader>
        <LinkContainer to={`${match.url}/create`}>
          <Button bsStyle="primary" bsSize="small"><span className="glyphicon glyphicon-plus" /> Create New</Button>
        </LinkContainer>
        <MealListWithPagination
          meals={meals.items}
          mealsAreLoading={mealsAreLoading}
          handleDeleteConfirmToggle={handleDeleteConfirmToggle}
          handleMealDelete={handleMealDelete}
          isDeleteModalOpen={isDeleteModalOpen}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meals);