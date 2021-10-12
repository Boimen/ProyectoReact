import { createContext, useContext } from "react"
import { useState } from "react"



const Contexto = createContext()

const {Provider} = Contexto



export const ProviderCustom = ({children}) => {


    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState ()

    const addItem = (producto,cantidad) => {
        let precio = (producto.precio * cantidad)
        if(!inInCart(producto.id)){
        setCarrito([producto,cantidad])
        setTotal(precio)
    }
}
  

    const removeItem = (id) => {
        let eliminado = false;
        for(let i = 0; i<carrito.length;i++){
            if(carrito[i].id === id){
           carrito.splice(i,carrito[i].cantidad)
       } eliminado = true
   }
 
   return id;
}

    console.log(removeItem)

     

    const clearCarrito = (producto) =>{
        carrito.clear()
    }
    
    const inInCart = (id) =>{
         let presente = false;
            for(let i = 0; i<carrito.length;i++){
                if(carrito[i].id == id){
               presente = true;
           }
           return presente;
       }
    }
    

    const valorDelContexto = {
        carrito : carrito,
        total : total,
        addItem : addItem,
        removeItem : removeItem
    }

        return ( 
            <Provider value = {valorDelContexto}>
                {children}
            </Provider>
        )
}


export default Contexto