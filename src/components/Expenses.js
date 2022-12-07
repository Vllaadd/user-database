import ExpenseItem from './ExpenseItem';

function Expenses(props){
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

    return(
        <div>
            <ExpenseItem 
				title={props.expenses[0].title}
				amount={props.expenses[0].amount}
				date={props.expenses[0].date} 
				/>
				<ExpenseItem 
				title={props.expenses[1].title}
				amount={props.expenses[1].amount}
				date={props.expenses[1].date} 
				/>
				<ExpenseItem 
				title={props.expenses[2].title}
				amount={props.expenses[2].amount}
				date={props.expenses[2].date} 
				/>
        </div>
    )
}