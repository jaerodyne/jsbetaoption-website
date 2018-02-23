import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import Home from './components/Home';
import Bio from './components/Bio';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
    	  <div>
	  	  	<Switch>
		        <Route exact path="/" component={Home}/>
		        <Route exact path="/bio" component={Bio}/>
	  	  	</Switch>
	        <Footer />
	     </div>
     </BrowserRouter>
    );
  }
}

export default App;
