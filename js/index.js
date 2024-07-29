document.getElementById('cost-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener todos los checkboxes seleccionados
    const products = document.querySelectorAll('input[name="product"]:checked');
    const services = document.querySelectorAll('input[name="service"]:checked');

    // Calcular el costo total usando un bucle
    let totalCost = 0;

    products.forEach(function(product) {
        totalCost += parseFloat(product.value);
    });

    services.forEach(function(service) {
        totalCost += parseFloat(service.value);
    });

    // Verificar si hay algún producto o servicio seleccionado
    if (products.length === 0 && services.length === 0) {
        document.getElementById('total-cost').innerText = 'Por favor, selecciona al menos un producto o servicio.';
    } else {
        // Mostrar el costo total
        document.getElementById('total-cost').innerText = `Costo total: €${totalCost.toFixed(2)}`;
    }
});
