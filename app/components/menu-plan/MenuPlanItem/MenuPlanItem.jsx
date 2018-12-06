import React from 'react';
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from './menuPlanItem.css';
import MenuPlanMeal from '../../menu-plan/MenuPlanMeal';

class MenuPlanItem extends React.Component {
	render() {
		const { item, handleMenuPlanSelect } = this.props;

		return (
			<tbody>
				<tr>
					<td rowSpan="3">{item.date}</td>
					{item.meals.map((meal, index) => <MenuPlanMeal
						key={index}
						item={meal}
						handleMenuPlanSelect={handleMenuPlanSelect}
					/>)}
				</tr>
			</tbody>
		);
	}
}

export default MenuPlanItem;