import React from 'react';
import ItemCarro from './ItemCarro'

export default function Carro( { Visible, ToggleVisible} ){

    const CarroStyles = {
        width : Visible ? '100%' : '0px', //If operador Ternario
        height : '100%',
        backgroundColor : 'white',
        position : 'fixed',
        zIndex : '99',
        top : '0px',
        right : '0px',
        transition : '0.5s'
    }

    const CloseBtnStyles = {
        fontSize : '2rem',
        position : 'absolute',
        top : '0px',
        right : '20px',
        display : Visible ? 'block' : 'none'
    }

    return <div style={ CarroStyles }>
        <span onClick={ () => ToggleVisible() } style={ CloseBtnStyles }><i class="fa-solid fa-circle-xmark"></i></span>

        <ItemCarro />
        <ItemCarro />
        <ItemCarro />
    
    </div>
}