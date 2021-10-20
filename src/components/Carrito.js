import { firestore } from "../Firebase";
import { Link } from 'react-router-dom';
import { useContext, useEffect } from "react";
import Contexto, { ProviderCustom } from "./Contexto";
import 'bootstrap/dist/css/bootstrap.min.css';


const Carrito = () =>{

    const {carrito} = useContext(Contexto)
    const {total} = useContext(Contexto)
    const {removeItem} = useContext(Contexto)
   

    const handleclick = (dato) => {
         removeItem(dato)
    }
    
    useEffect(()=>{

        const db = firestore
        const coleccion = db.collection("ordenes")

        const nueva_orden = {
            buyer : {
                nombre:"Fernando",
                telefono:"11111111",
                email:"fgbaumann@gmail.com",
            },
            /* NO FUNCIONA
            date: firestore.Timestamp.now(),
            */
            items: carrito,
            total: total,
            }
            const consulta = coleccion.add(nueva_orden)

            consulta
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err)
                })
        },[])
   
    
 
    if(carrito.length>0){

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
        <h2>${producto.precio}x{total/producto.precio}</h2>
        <button onClick={handleclick(producto.id)}>Eliminar del carrito</button>
        </div>
        </div>

    )})}
    <div class="col d-flex justify-content-center mb-4">
        <h1>Precio total: ${total}</h1>
    </div>

    </ul>
    </div>
    
    )
        }else{
            return(
                <div class="col d-flex justify-content-center mb-4">
                    <h1>Tu Carrito esta vacio</h1>  
                    <Link to="/">
                    <a class="nav-link">Volver a la pagina principal<span class="sr-only"></span></a>
                    </Link>
                    
                </div>
            )
        }
}

export default Carrito;