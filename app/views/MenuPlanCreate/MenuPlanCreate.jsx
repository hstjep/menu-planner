import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { getMenuPlan, createMenuPlan, updateMenuPlan } from "../../actions/menuPlanActions";
import { selectMeal } from "../../actions/mealActions";
import MenuPlanCreateForm from '../../components/menu-plan/MenuPlanCreateForm';
import { PageHeader, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { setQueryOptions } from './../../actions/queryUtilityActions';
import { getMeals, getMealOptions } from '../../actions/mealActions';

const mapStateToProps = (state) => {
	const { menuPlan, isMenuPlanLoading } = state.menuPlan;
	const { meals, queryOptions } = state.meals;

	return {
		menuPlan,
		isMenuPlanLoading,
		meals,
		queryOptions
	}
}

class MenuPlanCreate extends PureComponent {
	componentDidMount() {
		const id = this.props.match.params.id;
		if (id) {
			this.props.dispatch(getMenuPlan(id));
		}
	}

	handleMealOptions = value => {
		return getMealOptions(setQueryOptions({page: 1, pageSize: 10, searchTerm: value }));
	}

	handleMealChange = value => {
		this.props.dispatch(selectMeal([value]));
	}

	handleSubmit = values => {
		const id = this.props.match.params.id;
		const { dispatch } = this.props;

		let data = JSON.parse(JSON.stringify(values));
		if (data.meals && data.meals.length > 0) {
			data.meals = data.meals.map(function(item) {
				return item._id;
			});
		}

		if (id) {
			dispatch(updateMenuPlan(id, data, this.redirectToHome));
		} else {
			dispatch(createMenuPlan(data, this.redirectToHome));
		}
	}

	redirectToHome = () => {
		this.props.history.push('/');
	}

	render() {
		const match = this.props.match;
		const { menuPlan, isMenuPlanLoading, meals } = this.props;
		const initValues = this.props.match.params.id ? this.props.menuPlan : {};

		return (
			<div>
				<PageHeader>
					<small>{match.params.id ? 'Edit' : 'Create'} menu plan</small>
				</PageHeader>
				<MenuPlanCreateForm 
					menuPlan={menuPlan} 
					isMenuPlanLoading={isMenuPlanLoading} 
					handleMealOptions={this.handleMealOptions}
					handleMealChange={this.handleMealChange}
					onSubmit={this.handleSubmit} 
					initialValues={initValues}
				/>
				<LinkContainer to={`/`}>
					<Button bsStyle="link">Back to List</Button>
				</LinkContainer>
			</div>
		);
	}
}

export default connect(mapStateToProps)(MenuPlanCreate);