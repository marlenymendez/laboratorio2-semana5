// AGREGAR TAREA
document.getElementById("btnAgregar").addEventListener("click", function () {
    let texto = document.getElementById("tarea").value;

    if (texto === "") {
        alert("Escribe una tarea");
        return;
    }

    let li = document.createElement("li");
    li.textContent = texto;

    let btnCompletar = document.createElement("button");
    btnCompletar.textContent = "✔";
    btnCompletar.className = "btnCompletar";

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btnEliminar";

    let contenedor = document.createElement("span");
    contenedor.appendChild(btnCompletar);
    contenedor.appendChild(btnEliminar);

    li.appendChild(contenedor);
    document.getElementById("listaTareas").appendChild(li);

    document.getElementById("tarea").value = "";
});

document.getElementById("btnModo").addEventListener("click", function () {
    document.querySelector("body").classList.toggle("dark");
});


document.getElementById("listaTareas").addEventListener("click", function (e) {

    
    if (e.target.classList.contains("btnCompletar")) {
        e.target.parentElement.parentElement.classList.toggle("completada");
    }

    
    if (e.target.classList.contains("btnEliminar")) {
        e.target.parentElement.parentElement.remove();
    }
});


document.getElementById("btnDia").addEventListener("click", function () {

    
    document.getElementById("listaTareas").innerHTML = "";

    
    document.getElementById("mensajeDia").textContent = "Estás libre, todas las tareas del día fueron completadas.";

});

let botones = document.querySelectorAll("button");