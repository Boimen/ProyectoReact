import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav"

const {Item} = Nav



const Navegador = () => {
    return(
 
            <Nav>
                <Item>   
                <Link className="nav-link" to="/categoria/1">Hamburguesas</Link>
                </Item> 
                <Item>   
                <Link className="nav-link" to="/categoria/2">Papas fritas</Link>
                </Item> 
                <Item>   
                <Link className="nav-link" to="/categoria/3">Combos</Link>
                </Item>
                   
            


            </Nav>

    )
}

export default Navegador  

      