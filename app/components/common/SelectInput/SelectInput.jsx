import React from "react";
import { Col, FormGroup, FormControl, ControlLabel, Label } from 'react-bootstrap';

const SelectInput = ({ label, input, meta, type, placeholder, data, optionField, selectedValue }) => {
	const { touched, error, warning } = meta;

	return (
		<FormGroup controlId="formControlsSelect">
			<Col componentClass={ControlLabel} sm={2}>
				<label>{label}</label>
			</Col>
			<Col sm={4}>
				<FormControl
					{...input}
					type={type}
					componentClass="select"
					placeholder={placeholder}
					value={input.value}
					onChange={input.onChange}
					onBlur={() => input.onBlur(input.value)}>
					<option></option>
						{data.map((item, index) => <option
							key={item._id ? item._id : index}
							value={item._id}>{optionField ? item[optionField] : item}</option>)}
				</FormControl>
				{touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
			</Col>
		</FormGroup>
	)
}

export default SelectInput;