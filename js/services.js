document.addEventListener('DOMContentLoaded', () => {
    const botonesFiltro = document.querySelectorAll('.filter-btn');
    const habitaciones = document.querySelectorAll('.card-habitacion');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            botonesFiltro.forEach(btn => btn.classList.remove('active'));
            boton.classList.add('active');

            const categoria = boton.getAttribute('data-filter');
            habitaciones.forEach(habitacion => {
                const categoriaHabitacion = habitacion.getAttribute('data-category');

                if (categoria === 'todas' || categoria === categoriaHabitacion) {
                    habitacion.style.display = 'flex';
                    setTimeout(() => {
                        habitacion.style.opacity = '1';
                        habitacion.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    habitacion.style.opacity = '0';
                    habitacion.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        habitacion.style.display = 'none';
                    }, 300); 
                }
            });
        });
    });

    //Boton de Scroll
    const btnScrollTop = document.getElementById('btn-scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnScrollTop.classList.add('show');
        } else {
            btnScrollTop.classList.remove('show');
        }
    });
    btnScrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
});