// Tipos de datos son Dinamicos
//string - number - boolean
let name = "Joe";
console.log(typeof(name));
name = 10;
console.log(typeof(name));

let estado = true;
console.log(typeof(estado));

let PI = 3.1416
console.log(typeof(PI));

//array
let autos = ["Volvo", "Kia", "Mercedez"];
console.log(typeof(autos));

//object
let persona = {
    Name: "Joe",
    LastName: "Amstrong",
    Age: 20,
    City: "New York"
}
let persona2 = {
    "Name": "Joe",
    "LastName": "Amstrong",
    "Age": 20,
    "City": "New York"
}
console.log(persona);
console.log(persona.City);