
import { useContext } from "react";
import { Link } from "react-router-dom";
import Contexto from "./Contexto";

const Cartwidjet = () => {

    const {carrito} = useContext(Contexto)

    if(carrito.length>0){

    return(
  
     
        <Link to="/carrito">
            <p className="material-icons">
            shopping_cart
            </p>
            <h3>{carrito.length}</h3>
        </Link>    
    

    )
}else{
    return(
    <>
    </>
    )
}
}
export default Cartwidjet  
