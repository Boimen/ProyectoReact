import ItemCount from './ItemCount';


const ItemDetail = ({productos}) => {
    return(
    <>
         

       <div class="col d-flex justify-content-center mb-4">
       <div class="card shadow mb-1 bg-dark rounded" id="cart">   
       <h1>{productos.titulo}</h1>
       <img src={productos.imagen} id="cartimg"/>
       <p>{productos.detalle}</p>
       <h2>${productos.precio}</h2>
       <ItemCount id={productos.id} stock={productos.stock} />
       </div>
       </div>

    </>
        );
}

export default ItemDetail;


