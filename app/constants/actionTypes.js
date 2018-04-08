import { defineAction } from 'redux-define';
import { PENDING, ERROR, SUCCESS } from './stateConstants';

// Food
export const FETCH_FOOD = defineAction('FETCH_FOOD', [PENDING, ERROR, SUCCESS]);
export const FETCH_FOOD_ITEM = defineAction('FETCH_FOOD_ITEM', [PENDING, ERROR, SUCCESS]);
export const DELETE_FOOD_ITEM = defineAction('DELETE_FOOD_ITEM', [PENDING, ERROR, SUCCESS]);
export const CREATE_FOOD_ITEM = defineAction('CREATE_FOOD_ITEM', [PENDING, ERROR, SUCCESS]);
export const UPDATE_FOOD_ITEM = defineAction('UPDATE_FOOD_ITEM', [PENDING, ERROR, SUCCESS]);

// Common
export const TOGGLE_DELETE_CONFIRM = 'TOGGLE_DELETE_CONFIRM';



