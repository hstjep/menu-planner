import React, {Component} from 'react'
import { Col, FormGroup, Radio, ControlLabel, Label } from 'react-bootstrap';
import {change} from 'redux-form';

class RadioInput extends Component {
	render() {
		const { label, input, meta, type, placeholder } = this.props;

		return (
			<input name="subcategory" className="radio-inline" value={input.value} type="radio" />
		)
	}
}

export default RadioInput;