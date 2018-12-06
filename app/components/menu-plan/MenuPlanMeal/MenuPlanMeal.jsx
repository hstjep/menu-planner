import React from 'react';
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from './menuPlanMeal.css';

class MenuPlanMeal extends React.Component {
    render() {
        const { item, handleMenuPlanSelect } = this.props;

        return (
            <td>{item.meals.map((meal, index) => <span 
                key={index}
                >{meal.title}{item.meals.length > 0 && index < (item.meals.length - 1) ? ', ' : ''}</span>)} <div className={styles.menuBtnGroup}><ButtonGroup bsSize="small">
                {/* <LinkContainer to={`/food`}>
                    <OverlayTrigger placement="top" overlay={<Tooltip id="details">Details</Tooltip>}>
                        <Button bsStyle="info"><span className="glyphicon glyphicon-info-sign" /></Button>
                    </OverlayTrigger>
                </LinkContainer> */}
                <LinkContainer to={`/menu/${item.type}/edit/${item._id}`}>
                    <OverlayTrigger placement="top" overlay={<Tooltip id="edit">Edit</Tooltip>}>
                        <Button bsStyle="primary" onClick={handleMenuPlanSelect}><span className="glyphicon glyphicon-edit" /></Button>
                    </OverlayTrigger>
                </LinkContainer>
            </ButtonGroup></div></td>
        );
    }
}

export default MenuPlanMeal;