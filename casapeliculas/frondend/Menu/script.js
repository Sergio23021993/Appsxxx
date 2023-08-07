// Función para manejar el carrusel en cada tarjeta de película
$(document).ready(function () {
    // Activar el carrusel de cada tarjeta
    $('.carousel').carousel();

    // Controlar el desplazamiento del carrusel automáticamente
    $('.carousel').carousel({
        interval: 3000 // Cambiar la imagen cada 3 segundos (puedes ajustar el valor según tu preferencia)
    });

    // Detener el desplazamiento del carrusel al pasar el ratón sobre él
    $('.carousel').hover(function () {
        $(this).carousel('pause');
    }, function () {
        $(this).carousel('cycle');
    });
});
