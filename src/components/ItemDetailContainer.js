import { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { BrowserRouter,Route,Switch} from "react-router-dom";



const products = [
    {id:1,titulo:"Hamburguesa 1",precio:300,imagen:'Imagenes/doblecuarto.jpg',stock:2,categoria:1},
    {id:2,titulo:"Hamburguesa 2",precio:250,imagen:'Imagenes/bigmac.jpg',stock:500,categoria:1},
    {id:3,titulo:"Combo1",precio:540,imagen:'Imagenes/doblecuartocombo.jpg',stock:300,categoria:3},
    {id:4,titulo:"Fritas1",precio:160,imagen:'Imagenes/fritas1.jpg',stock:300,categoria:2}
]


const ItemDetailContainer = () => {
            
  
    const [productos,setProductos] = useState([])
    const {id} = useParams()


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
         
     
        
            <ItemDetail productos={productos.filter(productos => productos.id == 1)}/>

               
            
            );
       
        }
    

      


export default ItemDetailContainer;