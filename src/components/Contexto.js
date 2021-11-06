import { createContext, useContext } from "react"
import { useState } from "react"



const Contexto = createContext()

const {Provider} = Contexto



export const ProviderCustom = ({children}) => {


    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState (0)

    
    const addItem = (nuevoproducto,cantidad) => {
        let precio = (nuevoproducto.precio * cantidad)
        if(!inInCart(nuevoproducto.id)){
        setCarrito([nuevoproducto,cantidad])
        setTotal(precio)
        const updatedItems= [...carrito,nuevoproducto]

        return (setCarrito(updatedItems))
    }
}
  

    const removeItem = (id) => {
        
        const updatedItems = [...carrito]
        for(let i = 0;i<updatedItems.length;i++){
          if(updatedItems[i].id === id){  
          updatedItems.splice(updatedItems[i],1 )
        }
      }
   

     return setCarrito(updatedItems);
  
}
  
     

    const clearCarrito = () =>{
         setCarrito([])
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
        removeItem : removeItem,
        clearCarrito : clearCarrito 
    }

        return ( 
            <Provider value = {valorDelContexto}>
                {children}
            </Provider>
        )
}


export default Contexto