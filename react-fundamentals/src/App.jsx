import { useState } from "react";
import QuantityCart from "./QuantityCart";
import VolumeControl from "./VolumeControl";
import Counter from "./Counter";
import Header from "./Header";
import Nameform from "./NameForm";
import Username from "./UsernameForm";
import ProductCard from "./ProductCard";
import ItemSelector from "./ItemSelector";
import Productselector from "./ProductSelector";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import ShoppingList from "./ShoppingList";
import SearchList from "./SearchList";
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 75000,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Keyboard",
    price: 2500,
    category: "Accessories",
  },
  {
    id: 3,
    name: "Monitor",
    price: 18000,
    category: "Electronics",
  },
];
const items = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Keyboard" },
  { id: 3, name: "Monitor" },
];
const itemList = [
  { id: 1, name: "Milk" },
  { id: 2, name: "Bread" },
];
function App() {
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [newTask, setNewtask] = useState("");
  const [error, setError] = useState("");
  function handleAddTask(event) {
    event.preventDefault();
    if (newTask.trim() === "") {
      setError("Enter Valid Task");
      return;
    }
    setError("");
    const newTaskObject = { id: Date.now(), name: newTask, completed: false };
    setTasks((previousTasks) => [...previousTasks, newTaskObject]);
    setNewTask("");
  }
  const filteredTasks = tasks.filter((task) => {
    if (selectedFilter === "pending") {
      return task.completed === false;
    }

    if (selectedFilter === "completed") {
      return task.completed === true;
    }

    return true;
  });

  function handleToggleTask(taskId) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  }
  return (
    <div>
      <Header title="Gaurav's React App" />
      <form onSubmit={handleAddTask}>
        <input
          value={newTask}
          onChange={(event) => setNewtask(event.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
        {error && <p>{error}</p>}
      </form>
      <button onClick={() => setSelectedFilter("all")}>All</button>
      <button onClick={() => setSelectedFilter("pending")}>Pending</button>
      <button onClick={() => setSelectedFilter("completed")}>Completed</button>
      {filteredTasks.map((task) => (
        <p key={task.id}>
          {task.name} - {task.completed ? "Completed" : "Pending"}
          <button onClick={() => handleToggleTask(task.id)}>
            {task.completed ? "Mark Pending" : "Complete"}
          </button>
        </p>
      ))}
      <SearchBar value={searchText} onSearch={setSearchText} />
      <ProductList products={products} searchText={searchText} />
      <SearchList value={search} onSearch={setSearch} />
      <ShoppingList itemList={itemList} searchList={search}></ShoppingList>
      <Nameform />
      <Username />
      <QuantityCart />
      <VolumeControl />
      <Counter />
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
        />
      ))}
      <p>I am learning React.</p>
    </div>
  );
}
export default App;
