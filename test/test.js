const square = document.querySelector('.square');

document.addEventListener('mousemove', (e) => {
  const rect = square.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  square.style.setProperty('--x', `${x}px`);
  square.style.setProperty('--y', `${y}px`);
});
