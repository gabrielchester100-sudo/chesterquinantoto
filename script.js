let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
menu.onclick = () => {
 menu.classList.toggle('bx-x');
 navbar.classList.toggle('active');
}
window.onscroll = () => {
 menu.classList.remove('bx-x');
 navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
 strings: ['CS Student', 'Computer Programmer'],
 typeSpeed: 80,
 backSpeed: 80,
 backDelay:1200,
 loop: true,
 });

 const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.style.color = '#28a745';
                    formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                    contactForm.reset(); // Clears the form fields
                } else {
                    formStatus.style.color = '#dc3545';
                    formStatus.textContent = 'Oops! There was a problem submitting your form.';
                }
            } catch (error) {
                formStatus.style.color = '#dc3545';
                formStatus.textContent = 'Oops! There was a network error sending your message.';
            }
        });
    }
});