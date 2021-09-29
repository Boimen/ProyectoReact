import {useState} from "react"



const ItemCount = ({stock,id, initial, onAdd}) => {

    const [contador, setContador] = useState(0)
    return(
        <>
        <h2>Cantidad: {contador}</h2>
        <button onClick={()=>{ 
            if(contador<stock){
            setContador(contador+1)}
            else{
                alert("La cantidad no puede exceder el stock");
            }}}> Aumentar </button> 

        <button onClick={()=>{
            if(contador>0){

           setContador(contador-1)
        }else{
           alert("El contador no puede ser negativo")}}}> Disminuir </button>
           
        <button onClick={()=>{ alert("Compra confirmada")}}> Confirmar </button>

        </>
        );

      
    
}

export default ItemCount;