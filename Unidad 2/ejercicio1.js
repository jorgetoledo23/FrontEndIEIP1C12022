//alert("asdasd")

const Joe = {
    "Nombre" : "Joe",
    "Apellidos" : "Amstrong Luxer",
    "Age" : 25,
    "Ciudad" : "Curico",
    "PreferenciasMusicales" : ["Pop", "Reggae", "Rock"]
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


/* Determinar cantidad Personas Mayores de edad */
let mayores = 0;
Personas.forEach(p => {
    if(p.Age >= 18){
        mayores += 1
    }
});
console.log("Mayores: " + mayores)
//console.log("Mayores: ${mayores}")

/* Determinar quienes tienen como preferencia musical el Rock */

const root = document.getElementById("root");
const ul = document.createElement("ul");
root.className = "container";
ul.className = "list"

Personas.forEach(p => {
    p.PreferenciasMusicales.forEach(m => {
        if(m == "Rock"){
            //console.log(p.Nombre + " Prefiere el Rock")
            const li = document.createElement("li");
            li.innerHTML = p.Nombre + " Prefiere el Rock"
            ul.appendChild(li)
        }
    })
})
root.appendChild(ul);

/* Mostrar Resultado en una Pagina Web */