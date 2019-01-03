import { TOGGLE_DELETE_CONFIRM } from './../constants/actionTypes';

const toggleDeleteConfirm = (id) => {
	return (dispatch) => {
		dispatch({ type: TOGGLE_DELETE_CONFIRM, value: id });
	}
};

export { toggleDeleteConfirm };