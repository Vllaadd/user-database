import React from 'react';
import Expenses from './components/Expenses';


export default function App(props) {
	const expenses = [
		{
			id: 'ci',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 2, 28)
		},{
			id: 'gr',
			title: 'Groceries',
			amount: 73,
			date: new Date(2021, 2, 28)
		},{
			id: 'cr',
			title: 'Car rental',
			amount: 73,
			date: new Date(2021, 2, 28)
		}
	]
	return (
		<>
			<h3>Let's get started!</h3>
			<Expenses items={expenses} />
		</>
	)
};
