import './App.css';
import Navbar from './components/Navbar';
import Producto from './components/Producto';
import Productos from './Productos.json'

function App() {
  //console.log(Productos)
    return (
        <div>
            <Navbar/>

            <div className='container'>
                <div className='row justify-content-evenly'>                   
                    { Productos.map(P => <Producto Producto={P}/>) }  
                </div>
            </div>

        </div>
    );
}

export default App;
