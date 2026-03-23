document.addEventListener('DOMContentLoaded', function() {
    
    const formulario = document.querySelector('form');
    const modal = document.getElementById('modal-reserva');
    const modalMensaje = document.getElementById('modal-mensaje');
    const btnCerrar = document.getElementById('btn-cerrar-modal');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); 

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const fechaEntrada = document.getElementById('entrada').value;
        const fechaSalida = document.getElementById('salida').value;
        const huespedes = document.getElementById('huespedes').value;

        modalMensaje.innerHTML = `Gracias por tu solicitud, <strong>${nombre}</strong>.<br><br>Hemos recibido tu petición de reserva para ${huespedes} huésped(es) a partir del ${fechaEntrada} hasta ${fechaSalida}. Te enviaremos la confirmación al correo: <strong>${email}</strong>.`;

        modal.classList.add('active');

        formulario.reset();
    });

    btnCerrar.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', function(evento) {
        if (evento.target === modal) {
            modal.classList.remove('active');
        }
    });
    
});