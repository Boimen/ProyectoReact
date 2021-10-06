
import { BrowserRouter,Route,Switch} from "react-router-dom";
import ItemlistContainer from "./ItemlistContainer";
import './Estilos.css';
import ItemDetailContainer from "./ItemDetailContainer";
import Header from "./Header";
import ItemDetail from "./ItemDetail";
import Carrito from "./Carrito";
import Contexto from "./Contexto";
import { ProviderCustom } from "./Contexto";



const App = () => {
    return(
<BrowserRouter>      
<Header />
<div id="index">
<Switch>
<ProviderCustom>
<Route path="/" component={ItemlistContainer} exact/>    
<Route path="/categoria/:categoria" component={ItemlistContainer} exact/>
<Route path="/Item/:id" component={ItemDetailContainer} exact/>
<Route path="/carrito" component={Carrito} exact/>

</ProviderCustom>
</Switch>


</div>
</BrowserRouter>
)    
}


export default App