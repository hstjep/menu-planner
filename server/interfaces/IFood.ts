import IFoodCategory from './IFoodCategory';

export interface IFood {
	title: string,
	description: string,
	foodCategory: IFoodCategory,
	foodSubcategory: number,	
	imageUrl: string
}

export default IFood;