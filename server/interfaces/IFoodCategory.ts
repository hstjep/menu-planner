import IFood from './IFood';

export interface IFoodCategory {
	title: string,
	food: Array<IFood>
}

export default IFoodCategory;