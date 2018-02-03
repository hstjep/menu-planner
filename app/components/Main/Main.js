import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './../home/HomePage';
import FoodList from './../food/FoodList';
import FoodCreate from './../food/FoodCreate';
import Food from './../views/Food';

const Main = () => {
	return (<main>
		<switch>
			<Route exact path="/" component={HomePage}/>
			<Route exact path="/food" component={FoodList}/>
			<Route exact path="/food/create" component={FoodCreate}/>
		</switch>
	</main>)
};

export default Main;
