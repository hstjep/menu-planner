import React, { Component } from 'react';
import MenuItem from 'components/menu/MenuItem';
import Loader from "components/common/Loader";
import { Table } from 'react-bootstrap';
import styles from './menuList.css';

class MenuList extends Component {
	render() {
		const { days } = this.props;

		// if (foodItemsAreLoading) return <Loader />
		// if (!foodItems) return null;

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
				{days.map((day, index) => <MenuItem
					key={index}
					item={day}
				/>)}	
			</Table>
		)
	}
}

export default MenuList;  