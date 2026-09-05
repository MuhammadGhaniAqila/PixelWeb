document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation with Intersection Observer
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed if you only want it to happen once
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Parallax effect enhancement (optional: move clouds slightly with mouse)
    const skyBackground = document.querySelector('.sky-background');
    if (skyBackground) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
            skyBackground.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
        });
    }
});
