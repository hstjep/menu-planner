import * as mongoose from 'mongoose';
import { IMenu } from '../interfaces/IMenu';
const Schema = mongoose.Schema;

// Mongoose schema definition.
const menuSchema = new Schema({
	date: {type: Date, required: true},	
	type: {type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'], required: true},	
	meals: [{ type: Schema.Types.ObjectId, ref: 'Meal' }]
});

// Interfaces that extend mongoose documents.
interface IMenuModel extends IMenu, mongoose.Document { }

export default mongoose.model<IMenuModel>('Menu', menuSchema);

