import React, {Component} from 'react'
import styles from "./fileInput.css";

class FileInput extends Component {
	render() {
		const { input: { value: omitValue, ...inputProps }, meta: omitMeta, ...props } = this.props;
		return (
			<div>
				<label htmlFor="image-upload" className={styles.customImageUpload}>
					<span className="glyphicon glyphicon-cloud-upload"></span> Upload Image
						</label>
				<input type='file' {...inputProps} {...props} id="image-upload" label="test" name="file" />
				<span>{this.props.input.value && this.props.input.value[0].name}</span>
			</div>
		)
	}
}


export default FileInput;