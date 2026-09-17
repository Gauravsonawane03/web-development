let products = [
  { name: "Laptop", price: 70000 },
  { name: "Mouse", price: 1200 },
  { name: "Keyboard", price: 2500 },
  { name: "Monitor", price: 15000 },
  { name: "Phone", price: 40000 },
];
function assesment(products) {
  let result = products.filter((product) => {
    return product.price >= 10000;
  });

  let filtered = result.map((filterprod) => {
    return filterprod.name;
  });

  console.log(filtered);
  let found = products.find((findproduct) => {
    return findproduct.name === "Keyboard";
  });
  return{
    expensiveproducts : filtered,
    keyboard : found
  }
}
console.log(assesment(products));
