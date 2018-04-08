import React from 'react';
import styles from './foodItem.css';
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ConfirmModal from "components/common/ConfirmModal";

class FoodItem extends React.Component {
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
    this.props.handleFoodItemDelete(id);
  }

  render() {
    const { item, isDeleteModalOpen, handleDeleteConfirmToggle, handleFoodItemDelete } = this.props;

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
          <ButtonGroup bsSize="small">
            <LinkContainer to={`/food/${item._id}`}>
              <OverlayTrigger placement="top" overlay={<Tooltip id="details">Details</Tooltip>}>
                <Button bsStyle="info"><span className="glyphicon glyphicon-info-sign" /></Button>
              </OverlayTrigger>
            </LinkContainer>
            <LinkContainer to={`/food/edit/${item._id}`}>
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
            message={"Are you sure you want to delete " + item.title + "?"}
          />
        </th>
      </tr>
    );
  }
}

export default FoodItem;