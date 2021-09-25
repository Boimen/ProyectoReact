import ItemCount from "./ItemCount";
import { useState,useEffect } from "react";
import ItemList from "./ItemList"



const products = [
    {id:1,titulo:"Producto 1",precio:20,imagen:'Imagenes/doblecuarto.jpg',stock:2},
    {id:2,titulo:"Producto 2",precio:50,imagen:'Imagenes/bigmac.jpg',stock:500},
]


const ItemlistContainer = () => {
            
  
            const [productos,setProductos] = useState([])

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
            if(productos.length > 0){
            return(
            <>
            
            <ItemList productos={productos}/>

            </>
            );
            }else{
                return(
                    <>
                    <p>Loading..</p>
                    </>
                );
            }
        }      
      

export default ItemlistContainer;