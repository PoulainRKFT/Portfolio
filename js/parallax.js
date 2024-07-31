document.addEventListener("mousemove", parallax);

function parallax(event) {
  this.querySelectorAll(".parallax").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

function checkWindowSize() {
  if (window.innerWidth <= 1300) {
    document.getElementById('error-message').classList.remove('hidden');
  } else {
    document.getElementById('error-message').classList.add('hidden');
  }
}

window.addEventListener('load', checkWindowSize);
window.addEventListener('resize', checkWindowSize);