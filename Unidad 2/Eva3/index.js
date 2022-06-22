const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", function(){
    addPostIt();
})

function addPostIt(){
    const postItContainer = document.getElementById("postItContainer");

    const postIt = document.createElement("div")
    const titulo = document.createElement("h2")
    const desc = document.createElement("p")
    const chekd = document.getElementById("importante").checked;

    postIt.className ="col-md-3"
    postIt.classList.add("card")
    postIt.classList.add("m-2")
    postIt.classList.add("p-2")
    postIt.style.minHeight = "210px"
    postIt.style.maxWidth = "280px"
    postIt.style.position = "relative"

    titulo.innerHTML = document.getElementById("titulo").value;
    titulo.className = "titulo"

    desc.innerHTML = document.getElementById("desc").value;
    desc.className = "desc"

    btnBorrar = document.createElement("btn")
    btnBorrar.innerHTML = '<i class="fa-solid fa-trash"></i>'
    btnBorrar.style.position ="absolute"
    btnBorrar.style.right ="15px"
    btnBorrar.style.top ="15px"
    btnBorrar.addEventListener("click", () =>{
        postItContainer.removeChild(postIt)
    });
    

    if(chekd){
        postIt.classList.add("bg-importante")
    }

    postIt.appendChild(titulo)
    postIt.appendChild(desc)
    postIt.appendChild(btnBorrar)
    postItContainer.appendChild(postIt)

}