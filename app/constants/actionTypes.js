import { defineAction } from 'redux-define';
import { PENDING, ERROR, SUCCESS } from './stateConstants';

// Food
export const FETCH_FOOD = defineAction('FETCH_FOOD', [PENDING, ERROR, SUCCESS]);
export const FETCH_FOOD_ITEM = defineAction('FETCH_FOOD_ITEM', [PENDING, ERROR, SUCCESS]);
export const DELETE_FOOD_ITEM = defineAction('DELETE_FOOD_ITEM', [PENDING, ERROR, SUCCESS]);
export const CREATE_FOOD_ITEM = defineAction('CREATE_FOOD_ITEM', [PENDING, ERROR, SUCCESS]);
export const UPDATE_FOOD_ITEM = defineAction('UPDATE_FOOD_ITEM', [PENDING, ERROR, SUCCESS]);

// Food category
export const FETCH_FOOD_CATEGORIES = defineAction('FETCH_FOOD_CATEGORIES', [PENDING, ERROR, SUCCESS]);
export const FETCH_FOOD_CATEGORY = defineAction('FETCH_FOOD_CATEGORY', [PENDING, ERROR, SUCCESS]);
export const DELETE_FOOD_CATEGORY = defineAction('DELETE_FOOD_CATEGORY', [PENDING, ERROR, SUCCESS]);
export const CREATE_FOOD_CATEGORY = defineAction('CREATE_FOOD_CATEGORY', [PENDING, ERROR, SUCCESS]);
export const UPDATE_FOOD_CATEGORY = defineAction('UPDATE_FOOD_CATEGORY', [PENDING, ERROR, SUCCESS]);

// Meal
export const FETCH_MEALS = defineAction('FETCH_MEALS', [PENDING, ERROR, SUCCESS]);
export const FETCH_MEAL = defineAction('FETCH_MEAL', [PENDING, ERROR, SUCCESS]);
export const DELETE_MEAL = defineAction('DELETE_MEAL', [PENDING, ERROR, SUCCESS]);
export const CREATE_MEAL = defineAction('CREATE_MEAL', [PENDING, ERROR, SUCCESS]);
export const UPDATE_MEAL = defineAction('UPDATE_MEAL', [PENDING, ERROR, SUCCESS]);

// Menu
export const FETCH_MENU = defineAction('FETCH_MENU', [PENDING, ERROR, SUCCESS]);

export const FETCH_MENU_PLANS = defineAction('FETCH_MENU_PLANS', [PENDING, ERROR, SUCCESS]);

// Common
export const TOGGLE_DELETE_CONFIRM = 'TOGGLE_DELETE_CONFIRM';



