// const card = document.querySelector('.card');
// let tiltX = 0;
// let tiltY = 0;

// card.addEventListener('mousemove', function(event) {
//   const cardRect = card.getBoundingClientRect();
//   const mouseX = event.clientX - cardRect.left - cardRect.width / 2;
//   const mouseY = event.clientY - cardRect.top - cardRect.height / 2;
//   tiltX = (mouseY / cardRect.height) * 20;
//   tiltY = -(mouseX / cardRect.width) * 20;
//   card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
// });

// card.addEventListener('mouseleave', function() {
//   tiltX = 0;
//   tiltY = 0;
//   card.style.transform = 'rotate(0)';
// });

