import ItemCount from "./ItemCount";
import Button from '@restart/ui/esm/Button';
import { useContext } from "react";
import Contexto from "./Contexto";
import 'bootstrap/dist/css/bootstrap.min.css';

const Carrito = () =>{

    const {carrito} = useContext(Contexto)

    console.log(carrito)


    return(
    <div>
  
    <ul>
    {carrito.map(producto => {
        return(
        
        <div class="col d-flex justify-content-center mb-4">
        <div class="card shadow mb-1 bg-dark rounded" id="cart">   
        <h1>{producto.titulo}</h1>
        <img src={producto.imagen} id="cartimg"/>
        <p class="col d-flex justify-content-center mb-4" >{producto.detalle}</p>
        <h2>${producto.precio}</h2>
        </div>
        </div>
       
    )})}


    </ul>
    </div>
    
    )
}

export default Carrito;