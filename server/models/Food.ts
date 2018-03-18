import * as mongoose from 'mongoose';
import { IFood } from '../interfaces/IFood';
var Schema = mongoose.Schema;

// Mongoose schema definition.
var foodSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String },
	imageUrl: { type: String }
});

// Interfaces that extend mongoose documents.
interface IFoodModel extends IFood, mongoose.Document { }

export default mongoose.model<IFoodModel>('Food', foodSchema, 'food');

