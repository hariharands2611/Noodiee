// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Auto-Sliding Testimonials
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial() {
    testimonials.forEach(testimonial => testimonial.style.display = 'none');
    index = (index + 1) % testimonials.length;
    testimonials[index].style.display = 'block';
}

setInterval(showTestimonial, 3000);
showTestimonial();
