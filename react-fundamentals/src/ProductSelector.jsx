function Productselector(props){
    return (
     <div>
    {props.products.map((product)=>(
    <div key={product.id}
    style={{
            fontWeight: props.selectedProduct === product.name ? "bold" : "normal"
        }}
    onClick={()=>{
        props.onSelect(product.name) }}
    >
            {product.name}
    </div>
    ))}
        </div>
);
}
export default Productselector;