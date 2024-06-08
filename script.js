// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Obtener el formulario por su ID
  const form = document.getElementById("encuestaForm");

  // Agregar el evento 'submit' al formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    const mensaje = obtenerRespuestas();

    // Enviar mensaje por WhatsApp al número del comercio
    enviarWhatsapp(mensaje);

    mostrarAgradecimiento();
  });

  // Función para obtener las respuestas del formulario
  function obtenerRespuestas() {
    const respuestas = [];
    const inputs = document.querySelectorAll('input[type="text"]');

    inputs.forEach(function (input, index) {
      const numeroRespuesta = index + 1; // Obtener el número de la respuesta
      respuestas.push(
        `${numeroRespuesta}. ${input.previousElementSibling.textContent} ${input.value}`
      );
    });

    return respuestas.join("\n");
  }

  // Función para enviar el mensaje por WhatsApp
  function enviarWhatsapp(mensaje) {
    const numeroComercio = `${numeroTelefono}`; // Aquí colocas el número del comercio
    const url = `https://wa.me/${numeroComercio}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  }

  // Función para mostrar mensaje de agradecimiento
  function mostrarAgradecimiento() {
    // Crear elemento de mensaje
    const mensajeDiv = document.createElement("div");
    mensajeDiv.textContent = "¡Gracias por enviar la encuesta!";

    // Agregar estilos al mensaje
    mensajeDiv.style.padding = "10px";
    mensajeDiv.style.backgroundColor = "#fcb045";
    mensajeDiv.style.color = "black";
    mensajeDiv.style.borderRadius = "5px";
    mensajeDiv.style.width = "500px";
    mensajeDiv.style.margin = "20px auto";

    // Insertar el mensaje después del formulario
    form.parentNode.insertBefore(mensajeDiv, form.nextSibling);
  }
});
