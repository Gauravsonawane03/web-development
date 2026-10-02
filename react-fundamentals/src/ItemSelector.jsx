function Itemselector(props){
    return (
     <div>
    {props.items.map((item)=>(
    <div key={item.id}
    onClick={()=>{
        props.onSelect(item.name) }}
    >
            {item.name}
    </div>
    ))}
        </div>
);
}
export default Itemselector;