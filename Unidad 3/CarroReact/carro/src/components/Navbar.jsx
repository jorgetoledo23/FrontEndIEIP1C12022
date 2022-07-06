import React from "react";

export default function Navbar( { ToggleVisible } ){
    return <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Carro de Compras React</a>
      <div className="d-flex" role="search">
          <button onClick={ () => ToggleVisible() }
          className="btn btn-outline-danger"><i className="fa-solid fa-cart-shopping"></i></button>
        </div>
    </div>
  </nav>
}
//export default Navbar