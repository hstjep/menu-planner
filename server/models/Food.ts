import * as mongoose from 'mongoose';
import { IFood } from '../interfaces/IFood';
var Schema = mongoose.Schema;

// Mongoose schema definition.
var foodSchema = new Schema({
	title: { type: String, required: true }
});

// Interfaces that extend mongoose documents.
interface IFoodModel extends IFood, mongoose.Document { }

module.exports = mongoose.model<IFoodModel>('Food', foodSchema, 'food');

