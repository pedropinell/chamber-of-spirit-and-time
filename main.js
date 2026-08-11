const box = document.getElementById('myBox');
let start = null;
const duration = 1000; // 1 second
const targetDistance = 300; // pixels

function step(timestamp) {
  if (!start) start = timestamp;
  const progress = timestamp - start;
  const percent = Math.min(progress / duration, 1);
  
  // Move the box
  box.style.transform = `translateX(${percent * targetDistance}px)`;

  if (progress < duration) {
    requestAnimationFrame(step);
  }
}

requestAnimationFrame(step);









