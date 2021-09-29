
import { BrowserRouter,Route,Switch} from "react-router-dom";
import ItemlistContainer from "./ItemlistContainer";
import './Estilos.css';
import ItemDetailContainer from "./ItemDetailContainer";
import Header from "./Header";



const App = () => {
    return(
<BrowserRouter>      
<Header />
<div id="index">
<Switch>

<Route path="/" component={ItemlistContainer} exact/>    
<Route path="/categoria/:categoria" component={ItemlistContainer}/>
<Route path="/item/:id" component={ItemDetailContainer}/>

</Switch>



</div>
</BrowserRouter>
)    
}


export default App