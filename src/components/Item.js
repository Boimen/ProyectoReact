import 'bootstrap/dist/css/bootstrap.min.css';
import './Estilos.css';
import ItemCount from './ItemCount';

const Item = ({producto}) => {
    return(
       <>
     
       <div class="col d-flex justify-content-center mb-4">
       <div class="card shadow mb-1 bg-dark rounded" id="cart">   
       <h1>{producto.titulo}</h1>
       <img src={producto.imagen} id="cartimg"/>
       <h2>${producto.precio}</h2>
       <ItemCount stock={producto.stock} />
       </div>
       </div>
     
       
       </>
    );
}







export default Item;