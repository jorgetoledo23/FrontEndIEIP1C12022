import './App.css';
import Navbar from './components/Navbar';
import Producto from './components/Producto';
import Productos from './Productos.json'
import Carro from './components/Carro'
import React from 'react'




function App() {
    //Hooks useState

    const [Visible, setVisible] = React.useState(false)
    const [Total, setTotal] = React.useState(0)
    const [ItemsCarro, setItemsCarro] = React.useState([])  

    const toggleVisible = () => {
        setVisible(!Visible) //!true => false    !false => true
    }

    const AñadirProductoAlCarro = (P) =>{
        //console.log('Agregando Producto al Carro: ' + P.Descripcion)

        const Item = ItemsCarro.find(x => x.Producto.Id === P.Id)

        if(Item === undefined){
            //El producto NO existe en el Carro
            const newItem = {
                Producto : P, //Item.Producto.Descripcion
                Cantidad : 1, //Item.Cantidad
                SubTotal : P.Precio //Item.SubTotal
            }
            ItemsCarro.push(newItem)
            setItemsCarro(ItemsCarro)
        }else{
            //El Pproducto YA existe en el Carro
            Item.Cantidad += 1
            let SubTotal = parseInt(Item.Cantidad) * parseInt(P.Precio)
            Item.SubTotal = SubTotal
            setItemsCarro(ItemsCarro)
        }

        
    }

  //console.log(Productos)
    return (
        <div>
            <Navbar ToggleVisible={ toggleVisible }/>

            <Carro Visible={Visible} ToggleVisible={ toggleVisible } ItemsCarro={ ItemsCarro }/> 

            <div className='container'>
                <div className='row justify-content-evenly'>                   
                    { Productos.map(P => <Producto 
                    key={P.Id}
                    Producto={P} 
                    FuncionAddToCart={AñadirProductoAlCarro}
                    ToggleVisible={ toggleVisible }
                    />) }  
                </div>
            </div>

        </div>
    );
}

export default App;
