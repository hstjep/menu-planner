import React, { Component } from 'react';
import Meal from 'components/meal/Meal';
import Loader from "components/common/Loader";
import { Table } from 'react-bootstrap';
import styles from './mealList.css';
import PropTypes from 'prop-types';

class MealList extends Component {
  render() {
    const { meals, mealsAreLoading, handleDeleteConfirmToggle, handleMealDelete, isDeleteModalOpen } = this.props;

    if (mealsAreLoading) return <Loader />
    if (!meals) return null;

    return (
      <div className={styles.section}>
        <Table responsive striped condensed hover>
          <thead>
            <tr>
              <th>Food</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{meals.map(meal => <Meal
            key={meal._id}
            item={meal}
            isDeleteModalOpen={isDeleteModalOpen}
            handleDeleteConfirmToggle={handleDeleteConfirmToggle}
            handleMealDelete={handleMealDelete}
          />)}</tbody>
        </Table>
      </div>)
  }
}

// MealList.propTypes = {
//   meals: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   mealsAreLoading: PropTypes.bool.isRequired,
//   handleDeleteConfirmToggle: PropTypes.func.isRequired,
//   handleMealDelete: PropTypes.func.isRequired,
//   isDeleteModalOpen: PropTypes.shape(
//     PropTypes.bool.isRequired
//   )
// };

export default MealList;  