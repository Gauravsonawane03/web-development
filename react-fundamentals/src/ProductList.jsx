function ProductList(props) {
  const filteredProducts = props.products.filter((product) => {
    return product.name.toLowerCase().includes(props.searchText.toLowerCase());
  });

  return (
    <div>
      {filteredProducts.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
      {filteredProducts.length === 0 && <p>No products found</p>}
    </div>
  );
}

export default ProductList;
