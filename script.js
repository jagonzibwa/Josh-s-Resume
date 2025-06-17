// Responsive navbar toggle
const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Form validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if (!name.value || !email.value || !message.value) {
    alert('Please fill in all fields.');
    e.preventDefault();
  } else if (!email.value.includes('@')) {
    alert('Please enter a valid email.');
    e.preventDefault();
  }
});
