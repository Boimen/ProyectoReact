import { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { firestore } from "../Firebase";



const ItemDetailContainer = () => {
            
  
    const [productos,setProductos] = useState([])
    const parametro = useParams()

    
    useEffect (() =>{

        const db = firestore

        const coleccion = db.collection("productos")

        const consulta = coleccion.get()



        consulta
            .then((resultado) => {

              const prod_finales = resultado.docs.map(producto =>{ 
                    const producto_final = {
                        id: producto.id,
                        ...producto.data()
                    } 
                    return producto_final

                })

                
                setProductos(prod_finales)
                

            
            })
            .catch(() =>{
                console.log("error")
            })
          
    },[])


            return(
           
                <ul>

            {productos.filter(productos => productos.id == parametro.id ).map((productos,indice)=>{
            return <ItemDetail productos={productos}/>
        })}
             </ul>
            )}
        

         
   
    

      


export default ItemDetailContainer;