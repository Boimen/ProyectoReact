import ItemCount from "./ItemCount";
import { useState,useEffect } from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router";
import { firestore } from "../Firebase";




const ItemlistContainer = () => {
            

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


/*
            useEffect(()=>{
                const simulacion = new Promise((resolver)=>{
                setTimeout(() => {
                    resolver(products)
                }, 2000)
            })
            simulacion.then((res)=>{
                setProductos(res)
            })
        })
   
*/
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