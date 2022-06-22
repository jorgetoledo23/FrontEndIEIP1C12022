const root = document.getElementById("root");
/*
//Paso a Paso decir como hacer el Programa (Imperativa)
const titulo = document.createElement("h1");
titulo.innerHTML = "Primer React"
titulo.className = "title"

root.appendChild(titulo)

//Decir que hacer y no como Hacerlo (Declarativa)
const tituloReact = <h1 className='title'>Primer React</h1>

ReactDOM.render(tituloReact, root)
*/


function Navbar(){
    return <nav>
        <ul>
            <li><a>Inicio</a></li>
            <li>Contacto</li>
            <li>Productos</li>
            <li>Registro</li>
        </ul>
    </nav>
}

function Main(){
    return <div className="container">
        <h1>Primer React</h1>
    </div>
}

ReactDOM.render(<div><Navbar /><Main /></div>, root)