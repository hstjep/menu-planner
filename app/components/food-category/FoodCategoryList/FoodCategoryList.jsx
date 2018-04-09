import React, { Component } from 'react';  
import FoodCategory from 'components/food-category/FoodCategory';
import Loader from "components/common/Loader";
import { Table } from 'react-bootstrap';
import styles from './foodCategoryList.css'; 

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

export default FoodCategoryList;  