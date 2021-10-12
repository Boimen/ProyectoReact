import Button from '@restart/ui/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Estilos.css';
import { Link } from 'react-router-dom';


const Item = ({producto}) => {


    return(

       <>

       <div class="col d-flex justify-content-center mb-4">
       <div class="card shadow mb-1 bg-dark rounded" id="cart">   
       <h1>{producto.titulo}</h1>
       <img src={producto.imagen} id="cartimg"/>
       <h2>${producto.precio}</h2>
       
       <Link className="nav-link" to={`Item/${producto.id}`}>
       <Button>Mas informacion </Button>
        </Link>

   
       </div>
       </div>
     
       
       </>
     
    );
}







export default Item;