import React, { PureComponent } from "react";
import { Link, Route } from 'react-router-dom';
import FoodList from '../../components/food/FoodList';
import { Bootstrap, Well } from 'react-bootstrap';

class Food extends PureComponent {
  state = {
    foodItems: undefined,
    foodItemsAreLoading: false,
    isDeleteModalOpen: false
  };

  handleUpdateState = newState => {
    this.setState(newState);
  };

  componentDidMount() {
    this.handleUpdateState({ foodItemsAreLoading: true });

    fetch('/api/food')
      .then(response => response.json())
      .then(foodItems => {
        this.handleUpdateState({ foodItems, foodItemsAreLoading: false })
      }
      );
  }

  render() {
    const { foodItems, foodItemsAreLoading, isDeleteModalOpen } = this.state;
    const match = this.props.match;
    
    return (
      <div>
        <Well bsSize="small"><h2>Food List</h2></Well>
        <ul>
          <li>
            <Link to={`${match.url}/create`}>
              Create Food
              </Link>
          </li>
        </ul>
        <FoodList foodItems={foodItems} foodItemsAreLoading={foodItemsAreLoading} 
        handleUpdateState={this.handleUpdateState} />
      </div>
    );
  }
}

export default Food;