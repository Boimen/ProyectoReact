import { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";




const products = [
    {id:1,titulo:"Hamburguesa 1",detalle:"Doble hamburguesa de Carne con cebolla cheddar y pepinos",precio:300,imagen:'Imagenes/doblecuarto.jpg',stock:2,categoria:1},
    {id:2,titulo:"Hamburguesa 2",detalle:"Doble Hamburguesa de carne con cheddar lechuga y tomate",precio:250,imagen:'Imagenes/bigmac.jpg',stock:500,categoria:1},
    {id:3,titulo:"Combo1",precio:540,detalle:"Doble cuarto de libra con papas fritas y gaseosa medianas",imagen:'Imagenes/doblecuartocombo.jpg',stock:300,categoria:3},
    {id:4,titulo:"Fritas1",precio:160,detalle:"papas fritas con sal a gusto",imagen:'Imagenes/fritas1.jpg',stock:300,categoria:2}
]
 


const ItemDetailContainer = () => {
            
  
    const [productos,setProductos] = useState([])
    const parametro = useParams()


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
           
                <ul>

            {productos.filter(productos => productos.id ===1).map((productos,indice)=>{
            return <ItemDetail productos={productos}/>
        })}
             </ul>
            )}
        

         
   
    

      


export default ItemDetailContainer;