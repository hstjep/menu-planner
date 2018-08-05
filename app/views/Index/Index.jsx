import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import MenuList from 'components/menu/MenuList';
import { Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import  { getMenuPlans, getListOfDays } from "actions/menuPlanActions";

const mapStateToProps = (state) => {
  const { days } = state.menuPlan;

  return {
    days
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
});

class Index extends PureComponent {



componentDidMount() {
  this.props.dispatch(getListOfDays()); 

  var filter = {
    days: 7
  };
  this.props.dispatch(getMenuPlans(filter));
}
  render() {
    return (
      <MenuList days={this.props.days}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
