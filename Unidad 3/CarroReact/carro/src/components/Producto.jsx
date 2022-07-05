import React from "react";

var CLFormat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
});

export default function Producto(){
    return <div className="card m-2 p- col-md-3 text-center">
        <div className="card-body">
            <p><strong>Logitech</strong></p>
            <img alt='Imagen' />
            <p>Precio: <strong>$199.990</strong></p>
            <p>Stock: <strong>20</strong></p>
        </div>
    </div>
} 