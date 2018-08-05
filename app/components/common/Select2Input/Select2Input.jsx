import React from "react";
import { Col, FormGroup, FormControl, ControlLabel, Label } from 'react-bootstrap';
import Select from 'react-select';
import '!style-loader!css-loader!react-select/dist/react-select.css';

const Select2Input = ({ data, label, input, meta, type, placeholder, selectedValue }) => {
	const { touched, error, warning } = meta;

	return (
		<Col sm={4}>	
			<Select
				name="form-field-name"
				onChange={input.onChange}
				multi={true}
				value={selectedValue.map(item => {
					if (item._id) {
						return {
							value: item._id,
							label: item.title
						}
					}
				})}
				options={data.map(item => {
					return {
						value: item._id,
						label: item.title
					}
				})}		
			  />
			  {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
		</Col>
	)
}

export default Select2Input;