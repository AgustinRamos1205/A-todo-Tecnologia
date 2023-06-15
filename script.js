function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
  
    // Validar los campos (puedes agregar más validaciones según tus necesidades)
    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, completa todos los campos del formulario.");
    } else {
      // Enviar el formulario o realizar otras acciones
      alert("Gracias, te tenemos en contactos");
      // Aquí puedes agregar el código para enviar el formulario a través de AJAX o realizar otras acciones adicionales
    }
  };