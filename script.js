const form = document.getElementById('joinForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (!email) return;
  message.textContent = `Thanks — ${email} is on the ParenBond list.`;
  form.reset();
});
