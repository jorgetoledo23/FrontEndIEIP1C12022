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

    const toggleVisible = () => {
        setVisible(!Visible) //!true => false    !false => true
    }

  //console.log(Productos)
    return (
        <div>
            <Navbar ToggleVisible={ toggleVisible }/>

            <Carro Visible={Visible} ToggleVisible={ toggleVisible }/> 

            <div className='container'>
                <div className='row justify-content-evenly'>                   
                    { Productos.map(P => <Producto Producto={P}/>) }  
                </div>
            </div>

        </div>
    );
}

export default App;
