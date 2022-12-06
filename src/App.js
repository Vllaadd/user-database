import React from 'react';
import ExpenseItem from './components/ExpenseItem';


export default function App() {
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
			<ExpenseItem 
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date} 
				></ExpenseItem>
				<ExpenseItem 
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date} 
				></ExpenseItem>
				<ExpenseItem 
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date} 
				></ExpenseItem>
		</>
	)
};
