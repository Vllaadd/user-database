import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import Home from  './components/Home';

export default function App() {
  return (
	<>
	<Router>
		<Switch>
			<Route path='/' element={<Home />} />
		</Switch>
	</Router>
	</>
  )
}
