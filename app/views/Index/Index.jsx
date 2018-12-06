import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import MenuPlanList from 'components/menu-plan/MenuPlanList';
import { getWeekMenuPlans } from "actions/menuPlanActions";

const mapStateToProps = (state) => {
  const { menuPlanItems } = state.menuPlans;

  return {
    menuPlanItems
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
});

class Index extends PureComponent {
  componentDidMount() {
    this.props.dispatch(getWeekMenuPlans());
  }

  render() {
    const { menuPlanItems } = this.props;

    if (!menuPlanItems) return null;

    return (
      <MenuPlanList menuPlanItems={menuPlanItems} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
