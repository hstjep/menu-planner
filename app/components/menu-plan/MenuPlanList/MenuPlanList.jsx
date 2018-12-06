import React, { Component } from 'react';
import MenuPlanItem from 'components/menu-plan/MenuPlanItem';
import Loader from "components/common/Loader";
import { Table } from 'react-bootstrap';
import styles from './menuPlanList.css';

class MenuPlanList extends Component {
	render() {
		const { menuPlanItems, handleMenuPlanSelect } = this.props;

		// if (foodItemsAreLoading) return <Loader />
		// if (!menuPlanItems) return null;

		return (
			<Table striped bordered condensed hover className={styles.menuTable}>
				<thead>
					<tr>
						<th>Date</th>
						<th>Breakfast</th>
						<th>Lunch</th>
						<th>Dinner</th>
						<th>Snack</th>
					</tr>
				</thead>
				{menuPlanItems.map((menuPlan, index) => <MenuPlanItem
					key={index}
					item={menuPlan}
					handleMenuPlanSelect={handleMenuPlanSelect}
				/>)}	
			</Table>
		)
	}
}

export default MenuPlanList;  