import { createContext, useContext } from "react"
import { useState } from "react"



const Contexto = createContext()

const {Provider} = Contexto



export const ProviderCustom = ({children}) => {


    const [carrito,setCarrito] = useState([])

    const addItem = (producto,cantidad) => {
        if(!inInCart(producto.id)){
        setCarrito([producto,cantidad])
    }
}

    const removeItem = (id) => {
        for(let i = 0; i<carrito.length;i++){
            if(carrito[i].id == id){
           carrito.removeItem(i)
       }
   }
}
    

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
        addItem : addItem
    }

        return ( 
            <Provider value = {valorDelContexto}>
                {children}
            </Provider>
        )
}


export default Contexto