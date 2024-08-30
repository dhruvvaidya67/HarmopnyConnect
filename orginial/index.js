
document.addEventListener('DOMContentLoaded', function () {
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });
});


// Back to Top button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = 'Top';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Example of additional validation
document.querySelector('.form-container').addEventListener('submit', function (e) {
    const name = this.querySelector('input[name="name"]').value;
    if (name.trim() === '') {
        e.preventDefault();
        alert('Name is required');
    }
});

