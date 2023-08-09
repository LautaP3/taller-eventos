document.addEventListener("DOMContentLoaded", function() {
    const contenedor = document.getElementById("contenedor");
    contenedor.addEventListener("click", function() {
        alert("Hola! Soy el div.");
    });
    
    const botonSaludar = document.getElementById("saludar");
    botonSaludar.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});