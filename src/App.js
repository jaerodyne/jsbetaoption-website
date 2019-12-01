import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import Home from './components/Home';
import Bio from './components/Bio';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
    	  <div>
	  	  	<Switch>
		        <Route exact path="/" component={Home}/>
		        <Route path="/bio" component={Bio}/>
	  	  	</Switch>
	      </div>
     </BrowserRouter>
    );
  }
}

export default App;
