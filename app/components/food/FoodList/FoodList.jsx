import React, { Component } from 'react';
import FoodItem from 'components/food/FoodItem';
import Loader from 'components/common/Loader';
import { Table } from 'react-bootstrap';
import styles from './foodList.css';
import Pager from 'components/common/Pager';

const FoodList = ({ foodItems, foodItemsAreLoading, handleDeleteConfirmToggle, handleFoodItemDelete, isDeleteModalOpen, handlePageChange }) => {
  {
    if (foodItemsAreLoading) return <Loader />
    if (!(foodItems)) return null;

    return (
      <div className={styles.section}>
        <Table responsive striped condensed hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{foodItems.map(foodItem => <FoodItem
            key={foodItem._id}
            item={foodItem}
            isDeleteModalOpen={isDeleteModalOpen}
            handleDeleteConfirmToggle={handleDeleteConfirmToggle}
            handleFoodItemDelete={handleFoodItemDelete}
            handlePageChange={handlePageChange}
          />)}</tbody>
        </Table>
      </div>)
  }
}

export default FoodList;  