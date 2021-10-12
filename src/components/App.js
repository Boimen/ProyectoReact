
import { BrowserRouter,Route,Switch} from "react-router-dom";
import ItemlistContainer from "./ItemlistContainer";
import './Estilos.css';
import ItemDetailContainer from "./ItemDetailContainer";
import Header from "./Header";

import Carrito from "./Carrito";
import Contexto from "./Contexto";
import { ProviderCustom } from "./Contexto";



const App = () => {
    return(
<BrowserRouter> 
<ProviderCustom>     
<Header />

<Switch>
<div id="index">

<Route path="/" component={ItemlistContainer} exact/>    
<Route path="/categoria/:categoria" component={ItemlistContainer} exact/>
<Route path="/Item/:id" component={ItemDetailContainer} exact/>
<Route path="/carrito" component={Carrito} exact/>
</div>

</Switch>
</ProviderCustom>


</BrowserRouter>
)    
}


export default App