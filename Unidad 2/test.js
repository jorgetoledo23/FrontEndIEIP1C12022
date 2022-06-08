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
  
  function solicitudServidor(callback){
    setTimeout(function(){
      var datos = Productos;
      callback(datos);
    },10000);
  }
  

  function pintarProductos(Datos){
    for (let i = 0; i < Datos.length; i++) {
      
      const Item = Datos[i];
  
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
      precio.innerHTML = "$" + Item.Precio
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
  
  solicitudServidor(pintarProductos);

