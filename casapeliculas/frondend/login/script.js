// Función para manejar el envío del formulario de registro
document.getElementById('registroForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar que se envíe el formulario automáticamente

  // Obtener los valores ingresados por el usuario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Aquí puedes agregar código para validar los datos del formulario, como comprobar que los campos no estén vacíos o que el email tenga un formato válido.

  // Simulamos un registro exitoso (esto debe reemplazarse por la lógica de registro real)
  const usuarioRegistrado = {
      nombre: nombre,
      email: email
  };

  // Mostrar un mensaje de éxito
  alert('Registro exitoso. Bienvenido, ' + usuarioRegistrado.nombre + '!');

  // Limpiar el formulario
  document.getElementById('nombre').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
});
