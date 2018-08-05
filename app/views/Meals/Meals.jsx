import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { getMeals, deleteMeal } from "actions/mealActions";
import toggleDeleteConfirm from "actions/commonActions";
import MealList from 'components/meal/MealList';
import { PageHeader, Button } from 'react-bootstrap';

const mapStateToProps = (state) => {
  const { meals, mealsAreLoading, isDeleteModalOpen } = state.meals;

  return {
    meals,
    mealsAreLoading,
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
    this.props.dispatch(getMeals());
  }

  render() {
    const match = this.props.match;

    return (
      <div>
        <PageHeader>
          <small>Meals</small>
        </PageHeader>
        <LinkContainer to={`${match.url}/create`}>
          <Button bsStyle="primary" bsSize="small"><span className="glyphicon glyphicon-plus" /> Create New</Button>
        </LinkContainer>
        <MealList
          {...this.props}
          handleMealDelete={this.props.handleMealDelete}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meals);