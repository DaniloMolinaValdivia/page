// Año dinámico en el footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Función para pausar la animación al pasar el ratón
document.querySelector('.logo-carousel-container').addEventListener('mouseenter', function() {
    document.querySelector('.logo-carousel').style.animationPlayState = 'paused';
});

document.querySelector('.logo-carousel-container').addEventListener('mouseleave', function() {
    document.querySelector('.logo-carousel').style.animationPlayState = 'running';
});

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Script para reemplazar la imagen con el iframe de YouTube al hacer clic
document.querySelectorAll('.video-container').forEach(function(videoContainer) {
    const playButton = videoContainer.querySelector('.play-button');
    if (!playButton) return;

    playButton.addEventListener('click', function() {
        const videoId = videoContainer.dataset.youtubeId;
        const iframe = document.createElement('iframe');

        // Formato correcto para embeber videos de YouTube
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        // Limpiar el contenedor y agregar el iframe
        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframe);
    });
});