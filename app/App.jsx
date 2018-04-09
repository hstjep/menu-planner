import React, {PropTypes} from 'react';  
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route, hashHistory } from 'react-router-dom';
import { Index, Food, FoodDetails, FoodCreate, FoodCategory, FoodCategoryCreate } from './views/views';
import styles from './app.css';

class App extends React.Component {  
	
	render() {
	  return (
		<div className="container-fluid">
			<Router history={hashHistory}>
		  	<div className={styles.wrapper}>
					<Header/>
					<Switch>
						<Route exact path="/" component={Index}/>
						<Route exact path="/food" component={Food}/>
						<Route exact path="/food/create" component={FoodCreate}/>
						<Route exact path="/food/:id" component={FoodDetails}/>
						<Route exact path="/food/edit/:id" component={FoodCreate}/>
						<Route exact path="/food-category" component={FoodCategory}/>
						<Route exact path="/food-category/create" component={FoodCategoryCreate}/>
						<Route exact path="/food-category/edit/:id" component={FoodCategoryCreate}/>
						</Switch>
			</div>
			</Router>
		</div>
	  );
	}
  }
  
	export default App; 
	