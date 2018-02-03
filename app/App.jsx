import React, {PropTypes} from 'react';  
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route, hashHistory } from 'react-router-dom';
import { Index, Food, FoodCreate } from './views/views';

class App extends React.Component {  
	
	render() {
	  return (
		<div className="container-fluid">
			<Router history={hashHistory}>
		  	<div>
					<Header/>
					<switch>
						<Route exact path="/" component={Index}/>
						<Route exact path="/food" component={Food}/>
						<Route exact path="/food/create" component={FoodCreate}/>
						<Route exact path="/food/edit/:id" component={FoodCreate}/>
					</switch>
			</div>
			</Router>
		</div>
	  );
	}
  }
  
	export default App; 
	