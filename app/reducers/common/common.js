import { handleActions } from 'redux-actions';
import { TOGGLE_DELETE_CONFIRM } from './../../constants/actionTypes';

const initialState = {
		isDeleteModalOpen: {}
};

const common = handleActions({
	[TOGGLE_DELETE_CONFIRM] : (state, action) => ({
		...state,
		isDeleteModalOpen: { [action.value]: !state.isDeleteModalOpen[action.value]}
	})
}, initialState);

export default common;