window.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  const nombreInput = formulario.elements.namedItem("Nombre");
  const cantidadInput = formulario.elements.namedItem("Cantidad");
  const precioInput = formulario.elements.namedItem("precio-unitario");
  const totalInput = formulario.elements.namedItem("total");

  totalInput.readOnly = true;

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const cantidad = Number(cantidadInput.value.trim());
    const precioUnitario = Number(precioInput.value.trim());

    if (
      cantidadInput.value.trim() === "" ||
      precioInput.value.trim() === "" ||
      !Number.isFinite(cantidad) ||
      !Number.isFinite(precioUnitario)
    ) {
      alert("Ingresa una cantidad y un precio unitario válidos.");
      return;
    }

    totalInput.value = (cantidad * precioUnitario).toFixed(2);
      alert
("El total a pagar de " + nombreInput.value.trim() + " es: " + totalInput.value);
  });
});
