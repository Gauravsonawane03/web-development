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
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 75000,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Keyboard",
    price: 2500,
    category: "Accessories"
  },
  {
    id: 3,
    name: "Monitor",
    price: 18000,
    category: "Electronics"
  }
];
const items = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Keyboard" },
  { id: 3, name: "Monitor" }
];
function App() {
  const [selectedProduct, setSelectedProduct] = useState("");
  return (
    <div>
    <Header title="Gaurav's React App" />
    <Nameform />
    <Username />
    <QuantityCart />
    <VolumeControl />
    <Counter />
   <Productselector
  products={products}
  onSelect={setSelectedProduct}
  selectedProduct={selectedProduct}/>
<p>Selected: {selectedProduct}</p>
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
