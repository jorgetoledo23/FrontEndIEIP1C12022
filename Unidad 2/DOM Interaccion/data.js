const Joe = {
    "Nombre" : "Joe",
    "Apellidos" : "Amstrong Luxer",
    "Age" : 25,
    "Ciudad" : "Curico",
    "PreferenciasMusicales" : ["Pop", "Reggae", "Rock"],
    "ProfileImg" : "Url"
}
const Ann = {
    "Nombre" : "Ann",
    "Apellidos" : "Jackson Smith",
    "Age" : 17,
    "Ciudad" : "Teno",
    "PreferenciasMusicales" : ["Pop", "Metal", "Jazz"]
}
const Neil = {
    "Nombre" : "Neil",
    "Apellidos" : "Matt Smith",
    "Age" : 23,
    "Ciudad" : "Romeral",
    "PreferenciasMusicales" : ["Rock", "Funk"]
}

const Personas = [Joe,Ann,Neil];


const root = document.getElementById("root");

for (let i = 0; i < Personas.length; i++) {
    
    const Item = Personas[i];

    const card = document.createElement("div");
    card.classList.add("card")
    card.classList.add("col-md-3")
    card.classList.add("p-3")
    card.classList.add("m-3")
    //card.style.height = "300px"

    const tituloName = document.createElement("h2")
    tituloName.innerHTML = Item.Nombre;
    tituloName.classList.add("text-center")
    card.appendChild(tituloName);

    const tituloApe = document.createElement("p")
    tituloApe.className = "fst-italic"
    tituloApe.classList.add("text-center")
    tituloApe.innerHTML = Item.Apellidos
    card.appendChild(tituloApe)

    const edad = document.createElement("p")
    edad.className = "fst-italic"
    edad.classList.add("text-center")
    edad.innerHTML = "Edad: " + Item.Age
    card.appendChild(edad)


    const city = document.createElement("p")
    city.className = "fst-italic"
    city.classList.add("text-center")
    city.innerHTML = "Ciudad: " + Item.Ciudad
    card.appendChild(city)

    const ul = document.createElement("ul")
    ul.className = "list-group"
    ul.classList.add("text-center")
    Item.PreferenciasMusicales.forEach(p => {
        const li = document.createElement("li")
        li.innerHTML = p
        li.className = "list-group-item"
        ul.appendChild(li)
    })

    card.appendChild(ul)

    const btn = document.createElement("button")
    btn.innerHTML = "Test"
    btn.className = "btn"
    btn.classList.add("btn-outline-success")
    btn.classList.add("m-2")

    
    const btnBorrar = document.createElement("button")
    btnBorrar.innerHTML = "Delete"
    btnBorrar.className = "btn"
    btnBorrar.classList.add("btn-danger")
    btnBorrar.classList.add("m-2")


    btn.addEventListener("click", function(){
        alert("Click")
    })
    
    btnBorrar.addEventListener("click", function(e){
        root.removeChild(card)
        console.log(e.target)
    })

    //btnBorrar.addEventListener("click", BorrarCard(root, card))

    card.addEventListener("mouseover", function(){
        //card.style.backgroundColor = "lightblue"
        card.classList.add("shadow")
    })
    card.addEventListener("mouseleave", function(){
        //card.style.backgroundColor = "white"
        card.classList.remove("shadow")
    })

    card.appendChild(btn)
    card.appendChild(btnBorrar)
    root.appendChild(card)   
}

function BorrarCard(container, remove){
    container.removeChild(remove)
}
