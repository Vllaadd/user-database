import ExpenseForm from './ExpenseForm';
import '../styling/NewExpense.css';

const NewExpense = () => {
    saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
    };
    return(
        <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
    )  
};

export default NewExpense;