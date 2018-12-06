import React, { Component } from 'react';
import Loader from "components/common/Loader";
import { Bootstrap, Button, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, FieldGroup, Label } from 'react-bootstrap';
import styles from "./menuPlanCreateForm.css";
import validationMessages from '../../../constants/validationMessages';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import FieldInput from '../../common/FieldInput';
import MealSelectInput from '../../common/MealSelectInput';

class MenuPlanCreateForm extends Component {
    render() {
        const { menuPlan, isMenuPlanLoading, handleMealChange, handleSubmit } = this.props;
        if (isMenuPlanLoading) return <Loader />

        return (
            <Form onSubmit={handleSubmit} type="multipart/form-data" horizontal>
                <Field name="date" component={FieldInput} type="text" value={menuPlan.date} label="Date" disabled="true" />
                <MealSelectInput name="meals" value={menuPlan.meals} selectedValue={menuPlan.meals} onChange={handleMealChange} />

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" bsStyle="primary" className={styles.btnCustom}>Save</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

const validate = values => {
    const errors = {};

    // const maxLengthTitle = 50;
    // if (values.title && values.title.length > maxLengthTitle) {
    //     errors.title = validationMessages.maxLength(maxLengthTitle);
    // }

    // if (!values.title) {
    //     errors.title = validationMessages.required;
    // }

    return errors
}

MenuPlanCreateForm.propTypes = {
    menuPlan: PropTypes.shape({
        date: PropTypes.string,
        meals: PropTypes.array
    }),
    isMenuPlanLoading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.shape({
        date: PropTypes.string
    })

};

export default reduxForm({
    form: 'createMenuPlan',
    fileds: ['title', 'meals'],
    enableReinitialize: true,
    validate
})(MenuPlanCreateForm);


