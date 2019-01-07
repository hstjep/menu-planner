import React from "react";
import { Col, FormGroup, FormControl, ControlLabel, Label } from 'react-bootstrap';
import AsyncSelect from 'react-select/lib/Async';

const Select2Input = ({ data, label, input, meta, type, placeholder, loadOptions, inputValue, selectedValue, isMulti }) => {
	const { touched, error, warning } = meta;

	return (
		<Col sm={4}>
			<AsyncSelect
				isMulti={isMulti}
				cacheOptions
				defaultOptions
				loadOptions={loadOptions}
				onChange={input.onChange}
				defaultValue={selectedValue.map(item => {
					if (item._id) {
						return {
							value: item._id,
							label: item.title
						}
					}
				})}
			/>
			{touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
		</Col>
	)
}

export default Select2Input;