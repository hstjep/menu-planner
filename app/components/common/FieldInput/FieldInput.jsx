import React from "react";
import { Col, FormGroup, FormControl, ControlLabel, Label } from 'react-bootstrap';

const FieldInput = ({ label, input, meta, type, placeholder }) => {
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
					value={input.value}
					onChange={input.onChange}
					onBlur={() => input.onBlur(input.value)} />
				{touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
			</Col>
		</FormGroup>
	)
}

export default FieldInput;