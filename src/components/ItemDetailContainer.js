import { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail";


const products = 
    {id:1,titulo:"Producto 1",detalle:"Doble hamburguesa con cebolla y queso cheddar",precio:20,imagen:'Imagenes/doblecuarto.jpg',stock:2}




const ItemDetailContainer = () => {
            
  
    const [productos,setProductos] = useState()

    useEffect(()=>{
        const simulacion = new Promise((resolver)=>{
        setTimeout(() => {
            console.log("Hecho")
            resolver(products)
        }, 2000)
    })
    simulacion.then((res)=>{
        setProductos(res)
        console.log(res)
    })
})
   
    return(
 <>

    <ItemDetail products={products}/>
    
 </>
    );
  
}      


export default ItemDetailContainer;