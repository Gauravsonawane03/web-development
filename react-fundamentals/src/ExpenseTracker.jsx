import { useState } from "react";

function ExpenseTracker(){
const[expenses,setExpenses]=useState([]);
const[description,setDescription]=useState("");
const[amount,setAmount]=useState("");
const[selectedCategory,setSelectedCategory]=useState("all");
function handleAddExpense(event) {
  event.preventDefault();
  if(description.trim()==="" || amount.trim()===""){
            return;
        }
    const newExpense = {
        id: Date.now(),
        description: description,
        amount: amount,
        category: selectedCategory,
        }
        setDescription("");
        setAmount("");
    setExpenses((previousExpenses) => [...previousExpenses, newExpense]);
}
const total = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
return(
<div>
    <form onSubmit={handleAddExpense}>
<input
  value={description}
  onChange={(event) => setDescription(event.target.value)}
  placeholder="Enter description"
/>
<input
  type="number"
  value={amount}
  onChange={(event) => setAmount(event.target.value)}
  placeholder="Enter amount"
/>
<select
  value={selectedCategory}
  onChange={(event) => setSelectedCategory(event.target.value)}
>
  <option value="all">All Categories</option>
  <option value="Food">Food</option>
  <option value="Travel">Travel</option>
</select>
<button type="submit">Add Expense</button>
</form>
<h2>Expenses</h2>
{expenses.map((expense) => (
  <p key={expense.id}>
    {expense.description},
    {expense.amount},
    {expense.category}
  </p>
))}
<h3>Total Expenses: ₹{total}</h3>
</div>
);
}
export default ExpenseTracker;