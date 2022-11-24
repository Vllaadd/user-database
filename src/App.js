import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from  './components/Home';
import Search from './components/Search';

export default function App() {
  return (
	<>
	<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/serch' element={<Search />} />
	</Routes>
	</>
  )
}
