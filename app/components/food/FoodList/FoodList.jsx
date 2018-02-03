import React, { Component } from 'react';  
import FoodItem from '../FoodItem';
import { Table } from 'react-bootstrap';
import Loader from "../../common/Loader";


class FoodList extends Component {
  render() { 
    const { foodItems, foodItemsAreLoading, handleUpdateState } = this.props;
    
    if (foodItemsAreLoading) return <Loader />
    if (!foodItems) return null;

    return (
      <div>
        <Table responsive striped bordered condensed hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{foodItems.map(foodItem => <FoodItem key={foodItem._id} item={foodItem} 
          handleUpdateState={handleUpdateState} />)}</tbody>
        </Table>
    </div>)
  }
}

export default FoodList;  