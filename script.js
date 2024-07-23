const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const errorMessages = document.querySelectorAll('.error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  let isValid = true;

  // Validate Name
  if (nameInput.value.length < 5) {
    nameInput.nextElementSibling.textContent = 'Name must be at least 5 characters';
    isValid = false;
  } else {
    nameInput.nextElementSibling.textContent = '';
  }

  // Validate Email
  if (!emailInput.value.includes('@')) {
    emailInput.nextElementSibling.textContent = 'Invalid email format';
    isValid = false;
  } else {
    emailInput.nextElementSibling.textContent = '';
  }

  // Validate Phone Number
  if (phoneInput.value === '1234567890' || phoneInput.value.length !== 10) {
    phoneInput.nextElementSibling.textContent = 'Invalid phone number (must be 10 digits)';
    isValid = false;
  } else {
    phoneInput.nextElementSibling.textContent = '';
  }

// Validate Confirm Password
if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.nextElementSibling.textContent = 'Passwords do not match';
    isValid = false;
  } else {
    confirmPasswordInput.nextElementSibling.textContent = '';
  }
});
