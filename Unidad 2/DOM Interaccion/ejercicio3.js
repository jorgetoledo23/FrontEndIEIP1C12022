/* Crear un listado de Productos con las propiedades : Id, Descripcion, Stock, Precio, UrlImagen
Representarlo mediantes tarjetas en el HTML con un Boton para Agregar al Carro
Mostrar mas abajo una Tabla (Carro de Compra) en donde aparezcan los productos agregados, sus cantidades, 
precio unitario, precio total.
Se debe poder eliminar productos del Carro */

const P1 = {
    "Id" : "1",
    "Descripcion" : "Logitech TKL G915",
    "Stock" : 23,
    "Precio" : "189990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/82384/picture/?width=375&height=375"
}
const P2 = {
    "Id" : "2",
    "Descripcion" : "Logitech G513 Carbon Español GX",
    "Stock" : 10,
    "Precio" : "89990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/86059/picture/?width=375&height=375"
}
const P3 = {
    "Id" : "3",
    "Descripcion" : "Mouse Logitech G403",
    "Stock" : 15,
    "Precio" : "26990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/67699/picture/?width=375&height=375"
}
const P4 = {
    "Id" : "4",
    "Descripcion" : "Mouse Logitech G502 Hero",
    "Stock" : 12,
    "Precio" : "32990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/51795/picture/?width=375&height=375"
}
const P5 = {
    "Id" : "5",
    "Descripcion" : "Mouse Logitech G502 Lightspeed",
    "Stock" : 5,
    "Precio" : "69990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/51795/picture/?width=375&height=375"
}
const P6 = {
    "Id" : "6",
    "Descripcion" : "Parlantes Logitech G560",
    "Stock" : 30,
    "Precio" : "279990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/51810/picture/?width=375&height=375"
}
const P7 = {
    "Id" : "7",
    "Descripcion" : "Audifonos Logitech G435 White",
    "Stock" : 20,
    "Precio" : "62990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/126338/picture/?width=375&height=375"
}
const P8 = {
    "Id" : "8",
    "Descripcion" : "Audifonos Logitech G533 Wireless 7.1 - Negro",
    "Stock" : 8,
    "Precio" : "80990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/72794/picture/?width=375&height=375"
}

Productos = [P1,P2,P3,P4,P5,P6,P7,P8]

// Create our number formatter.
var formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });

const root = document.getElementById("root");
const carro = document.getElementById("carro");
const btnCarro = document.getElementById("openCart")

var total = 0;

function loadProducts(){
    for (let i = 0; i < Productos.length; i++) {
    
        const Item = Productos[i];
    
        const card = document.createElement("div");
        card.classList.add("card")
        card.classList.add("col-md-3")
        card.classList.add("p-2")
        card.classList.add("m-2")
        card.classList.add("justify-content-center")
        //card.style.height = "300px"
    
        const desc = document.createElement("h2")
        desc.innerHTML = Item.Descripcion;
        desc.classList.add("text-center")
        desc.style.height = "77px"
        card.appendChild(desc);
    
        const img = document.createElement("img")
        img.className = "img-fluid"
        img.style.display = "block"
        img.style.marginRight ="auto"
        img.style.marginLeft ="auto"
        img.src = Item.UrlImagen
        img.style.width = "250px"
        img.style.height = "250px"
        card.appendChild(img)
    
        const stock = document.createElement("p")
        stock.classList.add("text-center")
        stock.innerHTML = Item.Stock
        card.appendChild(stock)
    
        const precio = document.createElement("p")
        precio.className = "fst-italic"
        precio.classList.add("text-center")
        precio.innerHTML = formatter.format(Item.Precio);
        card.appendChild(precio) 
    
        const btn = document.createElement("button")
        btn.innerHTML = "Add to Cart"
        btn.className = "btn"
        btn.classList.add("btn-outline-success")
        btn.classList.add("m-2")
    
        
        btn.addEventListener("click", function(e){
            addToCart(Item)
            openNav()
        })
    
        card.addEventListener("mouseover", function(){
            card.classList.add("shadow")
        })
        card.addEventListener("mouseleave", function(){
            card.classList.remove("shadow")
        })
    
        card.appendChild(btn)
        root.appendChild(card)   
    }
}

loadProducts();



//Agregar al Carro
function addToCart(P){

    const productoCarro = document.getElementById(P.Id)
    const card = document.getElementById("cardCarro")
    total += parseInt(P.Precio)   

    document.getElementById("total").innerHTML = "Total Carrito " + formatter.format(total);
    btnCarro.innerHTML = '<a><i class="fa-solid fa-cart-shopping me-2"></i></a>' + formatter.format(total);   

    if(productoCarro == null){
        
        const row = document.createElement("div");
        row.className = "row"
        row.classList.add("m-2")
        row.classList.add("justify-content-between")
        row.id = P.Id // <div id="1" <div id="2"

        <div id='1' className="row m-2 justify-content-between"></div>

        const col3 = document.createElement("div");
        col3.className = "col-4"
        const col9 = document.createElement("div");
        col9.className = "col-8"
        col9.style.position = "relative"
        
        //Imagen Producto en el Carro
        const img = document.createElement("img")
        img.style.width = "80px"
        img.style.height = "80px"
        img.src = P.UrlImagen
        img.className = "img-thumbnail"
        img.style.padding = "5px"
        img.classList.add("d-inline")

        <img style="" className="d-inline" src="www.rrr.cl/img" />

        //Descripcion Producto en el Carro
        const desc = document.createElement("p")
        desc.innerHTML = P.Descripcion
        desc.style.fontSize = "12px"
        desc.style.lineHeight = 0.8

        //Cantidad Producto en el Carro
        const cant = document.createElement("p")
        cant.innerHTML = "Cantidad: " + 1
        cant.style.fontSize = "12px"
        cant.id = "Cantidad"
        cant.style.lineHeight = 0.8

        //Subtotal Producto en el Carro
        const subtotal = document.createElement("p")
        subtotal.innerHTML = formatter.format(P.Precio);
        subtotal.style.fontSize = "12px"
        subtotal.style.lineHeight = 0.8

        const btnBorrar = document.createElement("a")
        btnBorrar.innerHTML = '<i class="fa-solid fa-trash"></i>'
        btnBorrar.style.position = "absolute"
        btnBorrar.style.top = "25px"
        btnBorrar.style.right = "5px"

        btnBorrar.addEventListener("click", function(){
            deleteFromCart(P)
            card.removeChild(row)
        })
    
        col3.appendChild(img)
        col9.appendChild(desc)
        col9.appendChild(cant)
        col9.appendChild(subtotal)
        col9.appendChild(btnBorrar)

        row.appendChild(col3)
        row.appendChild(col9)

        card.appendChild(row)

    }else{    
        //Sumar uno a la Cantidad

        const parrafos = productoCarro.getElementsByTagName("p")

        let cantidad = parseInt(parrafos[1].innerHTML.substring(parrafos[1].innerHTML.length - 2)) + 1
        parrafos[1].innerHTML = "Cantidad: " + cantidad

        let subtotal = parseInt(P.Precio) * cantidad
        parrafos[2].innerHTML ="$" + subtotal

    }

}

//Abrir SideNav
function openNav() {
    document.getElementById("closebtn").style.display = "block"
    document.getElementById("carro").style.width = "450px";
    document.getElementById("carro").style.backgroundColor = "white"
    document.getElementById("total").style.display = "block"
}
  
//Cerrar SideNav
function closeNav() {
    document.getElementById("carro").style.width = "0";
    document.getElementById("closebtn").style.display = "none"
    document.getElementById("carro").style.backgroundColor = "#ffffff00"
    document.getElementById("total").style.display = "none"
} 

document.getElementById("openCart").addEventListener("click",function(){
    openNav()
})

function deleteFromCart(P){
    const row = document.getElementById(P.Id)
    const subTotal = row.getElementsByTagName("p")[2].innerHTML.substring(1)
    console.log(subTotal)
    console.log(total)
    total -= parseInt(subTotal)
    console.log(total)
    document.getElementById("total").innerHTML = "Total Carrito " + formatter.format(total);
    btnCarro.innerHTML = '<a><i class="fa-solid fa-cart-shopping me-2"></i></a>' + formatter.format(total);   
}

