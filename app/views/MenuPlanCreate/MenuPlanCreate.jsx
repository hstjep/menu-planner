import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { getMenuPlan, createMenuPlan, updateMenuPlan } from "../../actions/menuPlanActions";
import { selectMeal } from "../../actions/mealActions";
import MenuPlanCreateForm from '../../components/menu-plan/MenuPlanCreateForm';
import { PageHeader, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const mapStateToProps = (state) => {
	const { menuPlan, isMenuPlanLoading } = state.menuPlan;

	return {
		menuPlan,
		isMenuPlanLoading
	}
}

class MenuPlanCreate extends PureComponent {
	constructor(props) {
		super(props);

		this.handleMealChange = this.handleMealChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.redirectToHome = this.redirectToHome.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		if (id) {
			this.props.dispatch(getMenuPlan(id));
		}
	}

	handleMealChange = value => {
		var values = [];

		Object.keys(value).forEach(function (prop) {
			if (value[prop].value) {
				values.push({
					_id: value[prop].value,
					title: value[prop].label
				});
			}
		});
		
		this.props.dispatch(selectMeal(values))
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

	redirectToHome() {
		this.props.history.push('/');
	}

	render() {
		const match = this.props.match;
		const { menuPlan, isMenuPlanLoading } = this.props;
		const initValues = this.props.match.params.id ? this.props.menuPlan : {};

		return (
			<div>
				<PageHeader>
					<small>{match.params.id ? 'Edit' : 'Create'} menu plan</small>
				</PageHeader>
				<MenuPlanCreateForm menuPlan={menuPlan} isMenuPlanLoading={isMenuPlanLoading} handleMealChange={this.handleMealChange}
					onSubmit={this.handleSubmit} initialValues={initValues}
				/>
				<LinkContainer to={`/`}>
					<Button bsStyle="link">Back to List</Button>
				</LinkContainer>
			</div>
		);
	}
}

export default connect(mapStateToProps)(MenuPlanCreate);