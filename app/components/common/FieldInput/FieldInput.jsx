import React from "react";
import { Col, FormGroup, FormControl, ControlLabel, Label } from 'react-bootstrap';
import moment from 'moment';

const FieldInput = ({ label, input, meta, type, placeholder, disabled }) => {
	const { touched, error, warning } = meta;

	return (
		<FormGroup>
			<Col componentClass={ControlLabel} sm={2}>
				<label>{label}</label>
			</Col>
			<Col sm={4}>
				<FormControl
					type={type}
					componentClass={type === 'textarea' ? type : undefined}
					placeholder={placeholder}
					value={!isNaN(Date.parse(input.value)) ? moment(input.value).format('dddd DD/MM/YYYY') : input.value}
					onChange={input.onChange}
					onBlur={() => input.onBlur(input.value)}
					disabled={disabled} />
				{touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
			</Col>
		</FormGroup>
	)
}

export default FieldInput;