import {useState} from "react"



const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(0)
    return(
        <>
        <h2>Cantidad: {contador}</h2>
        <button onClick={()=>{ setContador(contador+1)}}> Aumentar </button> 
        <button onClick={()=>{ setContador(contador-1)}}> Disminuir </button>
        <button onClick={()=>{ alert("Compra confirmada")}}> Confirmar </button>

        </>
        );

      
    
}

export default ItemCount;