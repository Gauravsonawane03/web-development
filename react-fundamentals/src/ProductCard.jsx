function ProductCard(props){
    return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      {props.category && (
  <p>{props.category}</p>
)}  
    </div>
  );
}

export default ProductCard;
