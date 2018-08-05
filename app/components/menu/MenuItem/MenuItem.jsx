import React from 'react';
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ConfirmModal from "components/common/ConfirmModal";
import styles from './menuItem.css';

class MenuItem extends React.Component {
	//   constructor() {
	//     super();
	//     this.handleDeleteConfirmToggle = this.handleDeleteConfirmToggle.bind(this);
	//     this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this);
	//   }

	//   handleDeleteConfirmToggle() {
	//     const id = this.props.item._id;
	//     this.props.handleDeleteConfirmToggle(id);
	//   }

	//   handleDeleteConfirm() {
	//     const id = this.props.item._id;
	//     this.props.handleFoodItemDelete(id);
	//   }

	render() {
		const { item } = this.props;

		return (
			<tbody>
				<tr>
					<td rowSpan="3">{item}</td>
					<td>Eggs <div className={styles.menuBtnGroup}><ButtonGroup bsSize="small">
						<LinkContainer to={`/food`}>
							<OverlayTrigger placement="top" overlay={<Tooltip id="details">Details</Tooltip>}>
								<Button bsStyle="info"><span className="glyphicon glyphicon-info-sign" /></Button>
							</OverlayTrigger>
						</LinkContainer>
						<LinkContainer to={`/food/edit`}>
							<OverlayTrigger placement="top" overlay={<Tooltip id="edit">Edit</Tooltip>}>
								<Button bsStyle="primary"><span className="glyphicon glyphicon-edit" /></Button>
							</OverlayTrigger>
						</LinkContainer>
					</ButtonGroup></div></td>
					<td>Fish<span className={styles.menuBtnGroup}><ButtonGroup bsSize="small">
						<LinkContainer to={`/food`}>
							<OverlayTrigger placement="top" overlay={<Tooltip id="details">Details</Tooltip>}>
								<Button bsStyle="info"><span className="glyphicon glyphicon-info-sign" /></Button>
							</OverlayTrigger>
						</LinkContainer>
						<LinkContainer to={`/food/edit`}>
							<OverlayTrigger placement="top" overlay={<Tooltip id="edit">Edit</Tooltip>}>
								<Button bsStyle="primary"><span className="glyphicon glyphicon-edit" /></Button>
							</OverlayTrigger>
						</LinkContainer>
					</ButtonGroup></span></td>					
					<td>Pie<span className={styles.menuBtnGroup}><ButtonGroup bsSize="small">
						<LinkContainer to={`/food`}>
							<OverlayTrigger placement="top" overlay={<Tooltip id="details">Details</Tooltip>}>
								<Button bsStyle="info"><span className="glyphicon glyphicon-info-sign" /></Button>
							</OverlayTrigger>
						</LinkContainer>
						<LinkContainer to={`/food/edit`}>
							<OverlayTrigger placement="top" overlay={<Tooltip id="edit">Edit</Tooltip>}>
								<Button bsStyle="primary"><span className="glyphicon glyphicon-edit" /></Button>
							</OverlayTrigger>
						</LinkContainer>
					</ButtonGroup></span>
					</td>
					<td>Peanut<span className={styles.menuBtnGroup}><ButtonGroup bsSize="small">
						<LinkContainer to={`/food`}>
							<OverlayTrigger placement="top" overlay={<Tooltip id="details">Details</Tooltip>}>
								<Button bsStyle="info"><span className="glyphicon glyphicon-info-sign" /></Button>
							</OverlayTrigger>
						</LinkContainer>
						<LinkContainer to={`/food/edit`}>
							<OverlayTrigger placement="top" overlay={<Tooltip id="edit">Edit</Tooltip>}>
								<Button bsStyle="primary"><span className="glyphicon glyphicon-edit" /></Button>
							</OverlayTrigger>
						</LinkContainer>
					</ButtonGroup></span>
					</td>
				</tr>
				{/* <tr>
					<td>Fish</td>
					<td><ButtonGroup bsSize="small">
						<LinkContainer to={`/food`}>
							<OverlayTrigger placement="top" overlay={<Tooltip id="details">Details</Tooltip>}>
								<Button bsStyle="info"><span className="glyphicon glyphicon-info-sign" /></Button>
							</OverlayTrigger>
						</LinkContainer>
						<LinkContainer to={`/food/edit`}>
							<OverlayTrigger placement="top" overlay={<Tooltip id="edit">Edit</Tooltip>}>
								<Button bsStyle="primary"><span className="glyphicon glyphicon-edit" /></Button>
							</OverlayTrigger>
						</LinkContainer>
					</ButtonGroup></td>
				</tr>
				<tr>
					<td>Pie</td>
					<td><ButtonGroup bsSize="small">
						<LinkContainer to={`/food`}>
							<OverlayTrigger placement="top" overlay={<Tooltip id="details">Details</Tooltip>}>
								<Button bsStyle="info"><span className="glyphicon glyphicon-info-sign" /></Button>
							</OverlayTrigger>
						</LinkContainer>
						<LinkContainer to={`/food/edit`}>
							<OverlayTrigger placement="top" overlay={<Tooltip id="edit">Edit</Tooltip>}>
								<Button bsStyle="primary"><span className="glyphicon glyphicon-edit" /></Button>
							</OverlayTrigger>
						</LinkContainer>
					</ButtonGroup></td>
				</tr> */}
				{/* <tr>
					<td colSpan="4"></td>
				</tr> */}

			</tbody>
		);
	}
}

export default MenuItem;