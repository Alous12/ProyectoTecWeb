document.addEventListener('DOMContentLoaded', () => {
	const explorarButtons = document.querySelectorAll('.btn-explorar');
	const reservarButtons = document.querySelectorAll('.btn-reservar, .btn-hacerReserva');

	explorarButtons.forEach((button) => {
		button.addEventListener('click', () => {
			window.location.href = 'habitaciones.html';
		});
	});

	reservarButtons.forEach((button) => {
		button.addEventListener('click', () => {
			window.location.href = 'contacto.html';
		});
	});

	const carousel = document.querySelector('.Carrusel');
	if (!carousel) return;

	const track = carousel.querySelector('.carousel-track');
	const slides = track ? Array.from(track.querySelectorAll('img')) : [];
	const prevBtn = carousel.querySelector('.Carrusel-control.prev');
	const nextBtn = carousel.querySelector('.Carrusel-control.next');

	if (!track || slides.length === 0) return;

	let currentIndex = 0;
	const totalSlides = slides.length;
	const autoplayDelay = 5000;
	let autoplayId;

	const dotsContainer = document.createElement('div');
	dotsContainer.className = 'carousel-dots';

	const dots = slides.map((_, index) => {
		const dot = document.createElement('button');
		dot.type = 'button';
		dot.className = 'carousel-dot';
		dot.setAttribute('aria-label', `Ir al slide ${index + 1}`);
		dot.addEventListener('click', () => goToSlide(index));
		dotsContainer.appendChild(dot);
		return dot;
	});

	carousel.querySelector('.container').appendChild(dotsContainer);

	function updateCarousel() {
		track.style.transform = `translateX(-${currentIndex * 100}%)`;

		dots.forEach((dot, index) => {
			dot.classList.toggle('is-active', index === currentIndex);
		});
	}

	function goToSlide(index) {
		currentIndex = (index + totalSlides) % totalSlides;
		updateCarousel();
	}

	function nextSlide() {
		goToSlide(currentIndex + 1);
	}

	function prevSlide() {
		goToSlide(currentIndex - 1);
	}

	function startAutoplay() {
		stopAutoplay();
		autoplayId = window.setInterval(nextSlide, autoplayDelay);
	}

	function stopAutoplay() {
		if (autoplayId) {
			window.clearInterval(autoplayId);
		}
	}

	prevBtn?.addEventListener('click', () => {
		prevSlide();
		startAutoplay();
	});

	nextBtn?.addEventListener('click', () => {
		nextSlide();
		startAutoplay();
	});

	carousel.addEventListener('mouseenter', stopAutoplay);
	carousel.addEventListener('mouseleave', startAutoplay);

	// Soporte táctil básico para deslizar en móvil.
	let touchStartX = 0;
	let touchEndX = 0;

	carousel.addEventListener('touchstart', (event) => {
		touchStartX = event.changedTouches[0].clientX;
	}, { passive: true });

	carousel.addEventListener('touchend', (event) => {
		touchEndX = event.changedTouches[0].clientX;
		const swipeDistance = touchEndX - touchStartX;

		if (Math.abs(swipeDistance) < 45) return;

		if (swipeDistance > 0) {
			prevSlide();
		} else {
			nextSlide();
		}

		startAutoplay();
	}, { passive: true });

	updateCarousel();
	startAutoplay();
});
