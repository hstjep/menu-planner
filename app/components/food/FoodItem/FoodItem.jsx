import React from 'react'; 
import styles from './foodItem.css'; 
import {Bootstrap, ButtonToolbar, Button} from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';

class FoodItem extends React.Component {
  render() {      
    const item = this.props.item;

    return (
      <tr>
        <th>
			{item.title}
        </th>
		<th>
			{item.category}
        </th>
		<th>
			{item.subcategory}
        </th>
        <th>
          <Link to={`/food/edit/${item._id}`}>Edit</Link> | 
          <button>Delete</button>
        </th>
      </tr>
    );
  }
}

export default FoodItem;