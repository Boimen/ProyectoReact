
import { BrowserRouter,Route,Switch} from "react-router-dom";
import ItemlistContainer from "./ItemlistContainer";
import './Estilos.css';
import ItemDetailContainer from "./ItemDetailContainer";
import Header from "./Header";
import ItemDetail from "./ItemDetail";
import Carrito from "./Carrito";



const App = () => {
    return(
<BrowserRouter>      
<Header />
<div id="index">
<Switch>

<Route path="/" component={ItemlistContainer} exact/>    
<Route path="/categoria/:categoria" component={ItemlistContainer} exact/>
<Route path="/Item/:id" component={ItemDetailContainer} exact/>
<Route path="/carrito" component={Carrito} exact/>


</Switch>


</div>
</BrowserRouter>
)    
}


export default App