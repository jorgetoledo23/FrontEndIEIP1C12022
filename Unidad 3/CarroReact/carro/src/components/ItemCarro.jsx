import React from 'react'

var CLFormat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
});

export default function ItemCarro({ Item }){

    const LineHeightCSS = {
        lineHeight : '0.5'
    }


    return <div className='row justify-content-center'>
    <div className="card m-2 p-2 text-center col-md-8">
    <div className="card-body position-relative">
        <div className='row'>
            <div className='col-4'>
                <img height='150' width='150'
                alt='Imagen' src={ Item.Producto.UrlImagen }/>
            </div>
            <div className='col-8'>
                <p><strong>{Item.Producto.Descripcion}</strong></p>
                <hr></hr>
                <p style={ LineHeightCSS }>Precio: <strong>{CLFormat.format(Item.Producto.Precio)}</strong></p>
                <p style={ LineHeightCSS }>Cantidad: <strong>{ Item.Cantidad }</strong></p>
                <p style={ LineHeightCSS }>SubTotal: <strong>{ CLFormat.format(Item.SubTotal) }</strong></p>
            </div>
        </div>
        <span style={ { fontSize: '1.2rem', position : 'absolute', top : '10px', right: '20px'} }><i className='fa fa-solid fa-trash'></i></span>
        </div>
</div>
</div>
}