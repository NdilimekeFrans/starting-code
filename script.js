// =======================
// THEME TOGGLE
// =======================
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
}

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Save preference
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// =======================
// CHIPS INTERACTION
// =======================
const chips = document.querySelectorAll('.chip');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chip.classList.toggle('active');
  });

  const closeBtn = chip.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent toggling active
      chip.remove();
    });
  }
});

// =======================
// FORM SUBMIT
// =======================
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    // Get form values
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields!');
        return;
    }

    // Simulate form submission (you can replace with actual backend call)
    alert(`Form submitted successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Reset form after submission
    form.reset();
});
