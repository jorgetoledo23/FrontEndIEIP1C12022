import React from 'react'

var CLFormat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
});

export default function ItemCarro(){
    return <div className='row justify-content-center'>
    <div className="card m-2 p-2 text-center col-8">
    <div className="card-body">
        <div className='row'>
            <div className='col-4'>
                <img height='150' width='150'
                alt='Imagen' src='https://publicapi.solotodo.com/products/86059/picture/?width=375&height=375'/>
            </div>
            <div className='col-8'>
                <p><strong> Producto 1</strong></p>
                <p>Precio: <strong>{CLFormat.format(99999)}</strong></p>
                <p>Cantidad: <strong>1</strong></p>
                <p>SubTotal: <strong>{ CLFormat.format(99999) }</strong></p>
            </div>
        </div>
        </div>
</div>
</div>
}