// Restablecer el formulario al hacer clic en el botón "Restablecer"
document.querySelector('form').addEventListener('reset', function () {
    setTimeout(function () {
      // Restablecer los estilos de validación al estado predeterminado
        document.querySelectorAll('.form-control').forEach(function (input) {
            input.classList.remove('is-valid', 'is-invalid');
        });
    }, 100);
});

  // Agregar eventos de escucha para validar los campos al escribir en ellos
document.getElementById('name').addEventListener('input', validarCampo);
document.getElementById('lastname').addEventListener('input', validarCampo);
document.getElementById('yourEmail').addEventListener('input', validarCampo);
document.getElementById('yourUsername').addEventListener('input', validarCampo);
document.getElementById('yourPassword').addEventListener('input', validarCampo);

function validarCampo(event) {
    const campo = event.target;

    if (campo.checkValidity()) {
        campo.classList.remove('is-invalid');
        campo.classList.add('is-valid');
    } else {
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
    }
}

document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos de entrada
    var nombre = document.getElementById("name").value.trim();
    var apellido = document.getElementById("lastname").value.trim();
    var email = document.getElementById("yourEmail").value.trim();
    var usuario = document.getElementById("yourUsername").value.trim();
    var contraseña = document.getElementById("yourPassword").value.trim();
    var terminos = document.getElementById("acceptTerms").checked;

    // Realizar validaciones y procesamiento de los datos
    if (nombre == "") {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingresa tu nombre.'
        });
        return;
    }

    if (apellido == "") {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingresa al menos un apellido.'
        });
        return;
    }

    if (email == "") {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingresa una dirección de correo electrónico válida.'
        });
        return;
    }

    if (usuario == "") {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Escoge un nombre de usuario válido.'
        });
        return;
    }

    if (contraseña == "") {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Escoge una contraseña válida.'
        });
        return;
    }

    if (!terminos) {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Es necesario aceptar los términos y condiciones.'
        });
        return;
    }

    // Aquí se realizarán las acciones necesarias con los datos, para enviarlos a un servidor

    // Resetear el formulario
    document.getElementById("myform").reset();
    
    // Mostrar mensaje de éxito
    Swal.fire({
    icon: 'success',
    title: 'Registro exitoso',
    text: 'Los datos han sido enviados correctamente.'
    });
});