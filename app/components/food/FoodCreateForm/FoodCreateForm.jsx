import React, { Component } from 'react';
import Loader from "components/common/Loader";
import { Bootstrap, Button, Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, FieldGroup, Label } from 'react-bootstrap';
import styles from "./foodCreateForm.css";

class FoodCreateForm extends Component {
	render() {
		const { foodItem, foodItemIsLoading, handleSubmit, handleInputChange, handleImageClear, fileInput } = this.props;
		if (foodItemIsLoading) return <Loader />

		return (
			<Form onSubmit={handleSubmit} type="multipart/form-data" horizontal>
				<FormGroup>
					<Col componentClass={ControlLabel} sm={2}>
						Name
					</Col>
					<Col sm={10}>
						<FormControl name="title" type="text" value={foodItem.title} onChange={handleInputChange} placeholder="Name" />
					</Col>
				</FormGroup>
				<FormGroup>
					<Col componentClass={ControlLabel} sm={2}>
						Description
					</Col>
					<Col sm={10}>
						<FormControl componentClass="textarea" name="description" value={foodItem.description} onChange={handleInputChange} placeholder="Description" />
					</Col>
				</FormGroup>
				<FormGroup>
				<Col componentClass={ControlLabel} sm={2}></Col>
					<Col sm={10}>
						<label htmlFor="image-upload" className={styles.customImageUpload}>
							<span className="glyphicon glyphicon-cloud-upload"></span> Upload Image
						</label>
						<input name="image" id="image-upload" type="file" onChange={handleInputChange} accept=".jpg, .jpeg, .png"/>
						{fileInput && <span>{fileInput.name} <span onClick={handleImageClear} className="glyphicon glyphicon-remove"></span></span>}
					</Col>
				</FormGroup>
				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button type="submit" bsStyle="primary">Save</Button>
					</Col>
				</FormGroup>
			</Form>)
	}
}

export default FoodCreateForm;  