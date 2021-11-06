import {useState} from "react"



const ItemCount = ({stock,id, onAdd}) => {

    const [contador, setContador] = useState(0)


    const data = contador

    const handleclick  = () => {
        onAdd(data)
    }

    return(
        <>
        <div class="col d-flex justify-content-center mb-4">
        <h2>Cantidad: {contador}</h2>
        </div>
        <div class="col d-flex justify-content-center mb-4">
        <div>
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
        </div>
        </div>
        <button onClick={handleclick}>Agregar al carrito </button>

        </>
        );

      
    
}

export default ItemCount;