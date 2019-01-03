import React, { Component } from 'react';
import FoodCategory from 'components/food-category/FoodCategory';
import Loader from "components/common/Loader";
import { Table } from 'react-bootstrap';
import styles from './foodCategoryList.css';
import PropTypes from 'prop-types';

class FoodCategoryList extends Component {
  render() {
    const { foodCategories, foodCategoriesAreLoading, handleDeleteConfirmToggle, handleFoodCategoryDelete, isDeleteModalOpen } = this.props;

    if (foodCategoriesAreLoading) return <Loader />
    if (!foodCategories) return null;

    return (
      <div className={styles.section}>
        <Table responsive striped condensed hover>
          <thead>
            <tr>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{foodCategories.map(foodCategory => <FoodCategory
            key={foodCategory._id}
            item={foodCategory}
            isDeleteModalOpen={isDeleteModalOpen}
            handleDeleteConfirmToggle={handleDeleteConfirmToggle}
            handleFoodCategoryDelete={handleFoodCategoryDelete}
          />)}</tbody>
        </Table>
      </div>)
  }
}

FoodCategoryList.propTypes = {
  foodCategories: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ),
  foodCategoriesAreLoading: PropTypes.bool.isRequired,
  handleDeleteConfirmToggle: PropTypes.func.isRequired,
  handleFoodCategoryDelete: PropTypes.func.isRequired,
  isDeleteModalOpen: PropTypes.shape(
    PropTypes.bool.isRequired
  )
};

export default FoodCategoryList;  