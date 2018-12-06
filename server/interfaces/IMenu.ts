import IMeal from './IMeal';

export interface IMenu {
	date: string,
	type: number,
	meals: IMeal[]
}

export default IMenu;