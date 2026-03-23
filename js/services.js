document.addEventListener('DOMContentLoaded', () => {
    const botonesFiltro = document.querySelectorAll('.filter-btn');
    const habitaciones = document.querySelectorAll('.card-habitacion');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            // 1. Manejar la clase activa en los botones
            botonesFiltro.forEach(btn => btn.classList.remove('active'));
            boton.classList.add('active');

            // 2. Obtener la categoría a filtrar
            const categoria = boton.getAttribute('data-filter');

            // 3. Filtrar las habitaciones con una pequeña animación
            habitaciones.forEach(habitacion => {
                const categoriaHabitacion = habitacion.getAttribute('data-category');

                if (categoria === 'todas' || categoria === categoriaHabitacion) {
                    // Mostrar
                    habitacion.style.display = 'flex';
                    // Pequeño timeout para que la animación de entrada se note
                    setTimeout(() => {
                        habitacion.style.opacity = '1';
                        habitacion.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    // Ocultar
                    habitacion.style.opacity = '0';
                    habitacion.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        habitacion.style.display = 'none';
                    }, 300); // Tiempo coincide con la transición de CSS
                }
            });
        });
    });
});