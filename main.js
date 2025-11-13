console.log('Hello World!');

toggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode', toggle.checked);
});