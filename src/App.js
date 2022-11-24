import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from  './components/Home';
import Search from './components/Search';
import History from './components/History';

export default function App() {
  return (
	<>
	<Routes history={History}>
			<Route path='/' element={<Home />} />
			<Route path='/serch' element={<Search />} />
	</Routes>
	</>
  )
}
