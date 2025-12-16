document.getElementById("sellForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("zapatilla-name").value;
    const price = document.getElementById("zapatilla-price").value;
    const image = document.getElementById("zapatilla-image").files[0];
    
    if (name && price && image) {
        alert(`¡Zapatillas puestas en venta!\nNombre: ${name}\nPrecio: $${price}\nImagen: ${image.name}`);
        // Aquí podrías enviar los datos a un servidor o almacenarlos localmente
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
