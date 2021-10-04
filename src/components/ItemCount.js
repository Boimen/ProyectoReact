import {useState} from "react"



const ItemCount = ({stock,id, onAdd}) => {

    const [contador, setContador] = useState(0)


    const data = contador

    const handleclick  = () => {
        console.log(data)
        onAdd(data)
        
    }

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
           
        <button onClick={handleclick}>Agregar al carrito </button>

        </>
        );

      
    
}

export default ItemCount;