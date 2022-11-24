import React from 'react';
import {Router, Route} from 'react-router-dom';
import Home from  './components/Home';
import Search from './components/Search';

export default function App() {
  return (
	<>
	<Router>
			<Route path='/' element={<Home />} />
			<Route path='/serch' element={<Search />} />
	</Router>
	</>
  )
}
