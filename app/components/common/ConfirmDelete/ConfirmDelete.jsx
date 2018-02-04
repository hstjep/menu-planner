import React from 'react';
import { Bootstrap, Modal, Button } from 'react-bootstrap';

class ConfirmDelete extends React.Component {

	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<div className="static-modal">
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Are you sure you want to delete this item?</Modal.Title>
				</Modal.Header>
	
				<Modal.Body>One fine body...</Modal.Body>
	
				<Modal.Footer>
					<Button onClick={this.props.onClose}>Cancel</Button>
					<Button onClick={() => this.props.onConfirm(this.props.item)} bsStyle="primary">Yes</Button>
				</Modal.Footer>
			</Modal.Dialog>
			</div>
		)
	}
}

// render(modalInstance);
export default ConfirmDelete;


