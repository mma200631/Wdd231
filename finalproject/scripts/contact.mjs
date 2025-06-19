// contact.mjs
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('#year');
    yearSpan.textContent = new Date().getFullYear();
  
    const form = document.querySelector('#contact-form');
    const feedback = document.querySelector('#form-feedback');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // You could later add backend POST here
      feedback.textContent = 'Thank you for your message! We will get back to you shortly.';
      feedback.classList.remove('hidden');
  
      form.reset();
    });
  });
  