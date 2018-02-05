import React from 'react';
import { Bootstrap, Modal, Button } from 'react-bootstrap';

class ConfirmDelete extends React.Component {

	render() {
		const { show, onClose, onConfirm, item, message } = this.props;

		if (!show) {
			return null;
		}
		return (
			<div className="static-modal">
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>{message}</Modal.Title>
				</Modal.Header>
	
				{/* <Modal.Body></Modal.Body> */}
	
				<Modal.Footer>
					<Button onClick={onClose}>Cancel</Button>
					<Button onClick={() => onConfirm(item)} bsStyle="primary">Yes</Button>
				</Modal.Footer>
			</Modal.Dialog>
			</div>
		)
	}
}

// render(modalInstance);
export default ConfirmDelete;


