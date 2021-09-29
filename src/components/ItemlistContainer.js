import ItemCount from "./ItemCount";
import { useState,useEffect } from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router";



const products = [
    {id:1,titulo:"Hamburguesa 1",precio:300,imagen:'Imagenes/doblecuarto.jpg',stock:2,categoria:1},
    {id:2,titulo:"Hamburguesa 2",precio:250,imagen:'Imagenes/bigmac.jpg',stock:500,categoria:1},
    {id:3,titulo:"Combo1",precio:540,imagen:'Imagenes/doblecuartocombo.jpg',stock:300,categoria:3},
    {id:4,titulo:"Fritas1",precio:160,imagen:'Imagenes/fritas1.jpg',stock:300,categoria:2}
]


const ItemlistContainer = () => {
            
  
            const [productos,setProductos] = useState([])
            const parametro = useParams()

            console.log(parametro)

         
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
               
        if(parametro.categoria == 1){
            if(productos.length > 0){
            
            return(
                
            <>
            <ItemList productos={productos.filter(productos => productos.categoria == 1)}/>
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
        if(parametro.categoria == 2){
            if(productos.length > 0){
            
            return(
                
            <>
            <ItemList productos={productos.filter(productos => productos.categoria == 2)}/>
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
            
            if(parametro.categoria == 3){
            if(productos.length > 0){
            
            return(
                
            <>
            <ItemList productos={productos.filter(productos => productos.categoria == 3)}/>
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
    else{
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

    }
      

export default ItemlistContainer;