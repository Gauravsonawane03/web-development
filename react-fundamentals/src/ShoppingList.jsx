function ShoppingList(props){
    const filteredList=props.itemList.filter((list)=>{
        return list.name.toLowerCase().includes(props.searchList.toLowerCase());
    });

    return(
        <div>
            {filteredList.map((list)=>(
                <p key={list.id}>{list.name}</p>
            ))}
            {filteredList.length===0&&<p>No product found</p>}
        </div>
    );
}
export default ShoppingList;