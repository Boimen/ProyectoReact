
import { BrowserRouter,Route,Switch} from "react-router-dom";
import ItemlistContainer from "./ItemlistContainer";
import './Estilos.css';
import ItemDetailContainer from "./ItemDetailContainer";
import Header from "./Header";
import Carrito from "./Carrito";
import { ProviderCustom } from "./Contexto";


const App = () => {


    return(
<BrowserRouter> 
<ProviderCustom>     
<Header />

<Switch>
<div id="index">

<Route path="/" component={ItemlistContainer} exact/>    
<Route exact path="/categoria/:categoria" component={ItemlistContainer} />
<Route path="/Item/:id" component={ItemDetailContainer} strict/>
<Route path="/carrito" component={Carrito} exact/>
</div>

</Switch>
</ProviderCustom>


</BrowserRouter>
)    
}


export default App