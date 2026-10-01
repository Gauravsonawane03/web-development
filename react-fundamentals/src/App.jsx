import QuantityCart from "./QuantityCart";
import VolumeControl from "./VolumeControl";
import Counter from "./Counter";
import Header from "./Header";
import Nameform from "./NameForm";
import ProductCard from "./ProductCard";
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
function App() {
  return (
    <div>
    <Header title="Gaurav's React App" />
    <Nameform />
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
