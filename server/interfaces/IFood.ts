import IFoodCategory from './IFoodCategory';

export interface IFood {
	title: string,
	description: string,
	category: IFoodCategory,
	subcategory: number,	
	imageUrl: string
}

export default IFood;