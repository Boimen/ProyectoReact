import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import usePlaceholder from 'react-bootstrap/esm/usePlaceholder';
import { useParams } from 'react-router';

const ItemDetail = ({productos}) => {
    
    const datocantidad = (dato) =>{
        console.log(dato)
    }
  


    return(

    <>

       <div class="col d-flex justify-content-center mb-4">
       <div class="card shadow mb-1 bg-dark rounded" id="cart">   
       <h1>{productos.titulo}</h1>
       <img src={productos.imagen} id="cartimg"/>
       <p class="col d-flex justify-content-center mb-4" >{productos.detalle}</p>
       <h2>${productos.precio}</h2>
       <ItemCount id={productos.id} stock={productos.stock} onAdd={datocantidad}/>
       </div>
       </div>
        
    </>
        );
}

export default ItemDetail;


