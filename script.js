document.addEventListener('DOMContentLoaded', () => {

    // --- ANIMACIONES ELEGANTES AL HACER SCROLL (INTERSECTION OBSERVER) ---
    const revealElements = document.querySelectorAll('.reveal');

    // Opciones para el observer: la animación se activa cuando el 20% del elemento es visible
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px" // Inicia la animación un poco antes
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está en la pantalla, añade la clase 'visible'
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Deja de observar el elemento una vez que ha sido animado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa cada elemento con la clase '.reveal'
    revealElements.forEach(element => {
        observer.observe(element);
    });

});