import React from 'react';
import styles from './Meal.css';
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ConfirmModal from "components/common/ConfirmModal";
import PropTypes from 'prop-types';

class Meal extends React.Component {
  constructor() {
    super();
    this.handleDeleteConfirmToggle = this.handleDeleteConfirmToggle.bind(this);
    this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this);
  }

  handleDeleteConfirmToggle() {
    const id = this.props.item._id;
    this.props.handleDeleteConfirmToggle(id);
  }

  handleDeleteConfirm() {
    const id = this.props.item._id;
    this.props.handleMealDelete(id);
  }

  render() {
    const { item, isDeleteModalOpen, handleDeleteConfirmToggle, handleMealDelete } = this.props;

    return (
      <tr>
        <td>
          {item.title}
        </td>
        <td>{item.food.map((foodItem, i) => <span 
        key={foodItem._id}>
        {foodItem.title}
        {i < (item.food.length - 1) ? ', ' : ''}
        </span>)}  
        </td>
        <td>
          <ButtonGroup bsSize="small">
            <LinkContainer to={`/meals/edit/${item._id}`}>
              <OverlayTrigger placement="top" overlay={<Tooltip id="edit">Edit</Tooltip>}>
                <Button bsStyle="primary"><span className="glyphicon glyphicon-edit" /></Button>
              </OverlayTrigger>
            </LinkContainer>
            <OverlayTrigger placement="top" overlay={<Tooltip id="delete">Delete</Tooltip>}>
              <Button bsStyle="danger" onClick={this.handleDeleteConfirmToggle} href="javascript:void(0)"><span className="glyphicon glyphicon-remove" /></Button>
            </OverlayTrigger>
          </ButtonGroup>
          <ConfirmModal
            show={isDeleteModalOpen[item._id]}
            onClose={this.handleDeleteConfirmToggle}
            onConfirm={this.handleDeleteConfirm}
            item={item}
            message={"Are you sure you want to delete " + item.mealType + "?"}
          />
        </td>
      </tr>
    );
  }
}

// PropTypes.Meal = {
//   item: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired
//   }).isRequired,
//   isDeleteModalOpen: PropTypes.shape(
//     PropTypes.bool.isRequired
//   ),
//   handleDeleteConfirmToggle: PropTypes.func.isRequired,
//   handleMealDelete: PropTypes.func.isRequired
// }

export default Meal;