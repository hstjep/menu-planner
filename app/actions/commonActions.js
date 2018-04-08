const toggleDeleteConfirm = (id) => {
	return (dispatch) => {
		dispatch({ type: 'TOGGLE_DELETE_CONFIRM', value: id });	
	}
};

export default toggleDeleteConfirm;