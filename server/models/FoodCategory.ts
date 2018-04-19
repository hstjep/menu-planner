import * as mongoose from 'mongoose';
import { IFoodCategory } from '../interfaces/IFoodCategory';
var Schema = mongoose.Schema;

// Mongoose schema definition.
var foodCategorySchema = new Schema({
	title: { type: String, required: true },
	food: [{ type: Schema.Types.ObjectId, ref: 'Food' }]
});

// Interfaces that extend mongoose documents.
interface IFoodCategoryModel extends IFoodCategory, mongoose.Document { }

export default mongoose.model<IFoodCategoryModel>('FoodCategory', foodCategorySchema);

