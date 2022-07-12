import React from "react";

var CLFormat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
});

export default function Producto({ Producto, FuncionAddToCart, ToggleVisible}){
    //console.log(props)
    return <div className="card m-2 p- col-md-3 text-center">
        <div className="card-body">
            <p><strong>{ Producto.Descripcion }</strong></p>
            <img alt='Imagen' src={Producto.UrlImagen} width='100' height='100'/>
            <p>Precio: <strong>{CLFormat.format(Producto.Precio)}</strong></p>
            <p>Stock: <strong>{Producto.Stock}</strong></p>
            <button onClick={ () => (FuncionAddToCart(Producto), ToggleVisible()) }
            className="btn btn-success">Add To Cart</button>
        </div>
    </div>
} 