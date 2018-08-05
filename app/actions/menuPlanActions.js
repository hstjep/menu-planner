import { Moment } from 'moment'
let moment = require('moment');
import { FETCH_MENU_PLANS } from './../constants/actionTypes';

const getMenuPlans = (filter) => {
	return (dispatch) => {
		dispatch({ type: FETCH_MENU_PLANS.PENDING });

		fetch('/api/menu?days=' + filter.days)
			.then(response => {
        response.json()}
      )
			.then(menuPlans => {
        dispatch({
          type: FETCH_MENU_PLANS.SUCCESS,
          data: menuPlans
      })}
    )
			.catch(error => dispatch({
				type: FETCH_MENU_PLANS.ERROR
			}))
	}
};

 const getListOfDays = () => {
  var todayDate = moment();
  let days = [todayDate.format('dddd DD/MM/YYYY')];

  for (let i = 1; i <= 5; i++) {
    days.push(todayDate.add(1, 'days').format('dddd DD/MM/YYYY'));
  }

  return {
	  type: 'SET_WEEK_DAYS',
	  data: days
  }
}

export { getMenuPlans, getListOfDays };