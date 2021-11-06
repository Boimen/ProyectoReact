import Item from "./Item"

const ItemList = ({productos}) => {
    return(
    <ul>
         <div class="row">
        {productos.map((producto,indice)=>{
            return <Item producto={producto}/>
        })}
        </div>  

    </ul>
    )
}





export default ItemList;
