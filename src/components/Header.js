import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Cartwidjet from "./Cartwidjet"
import Nav from "./Nav"

const Header = () => {

return(
<header>
<div class="row" id="Header">
    <div class="col-sm">
  <nav class="navbar navbar-expand-lg navbar-light bg-green" >
    <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
          <Link to="/">
         <a class="nav-link">Home<span class="sr-only"></span></a>
         </Link>
      </li>
   
      <li class="nav-item dropdown">

       <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu
       </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        
         <Nav/>

      </div>
      </li>
  </ul>
</div>
</nav>
</div>
<div class="col-sm">
<Cartwidjet/>
</div>
<div class="col-sm">
<h1>Lo de Fer</h1>
</div>

</div>

</header>

)

}





export default Header