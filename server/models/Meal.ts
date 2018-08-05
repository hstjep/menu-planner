import * as mongoose from 'mongoose';
import { IMeal } from '../interfaces/IMeal';
var Schema = mongoose.Schema;

// Mongoose schema definition.
var mealSchema = new Schema({
	mealType: {type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'], required: true},	
	food: [{ type: Schema.Types.ObjectId, ref: 'Food' }]
});

// Interfaces that extend mongoose documents.
interface IMealModel extends IMeal, mongoose.Document { }

export default mongoose.model<IMealModel>('Meal', mealSchema);

