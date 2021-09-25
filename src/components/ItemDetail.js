


const ItemDetail = ({products}) => {
    return(
    <>
     
       <div class="col d-flex justify-content-center mb-4">
       <div class="card shadow mb-1 bg-dark rounded" id="cart">   
       <h1>{products.titulo}</h1>
       <img src={products.imagen} id="cartimg"/>
       <p>{products.detalle}</p>
       <h2>${products.precio}</h2>
       </div>
       </div>

    </>
        );
}

export default ItemDetail;


