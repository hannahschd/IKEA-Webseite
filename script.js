const section = document.querySelector(".zoom-section");
const text = document.querySelector(".zoom-text");
const image = document.querySelector(".zoom-image");

function animateOnScroll() {
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Wie weit die Section im Viewport ist (0 bis 1)
  const scrollProgress = 1 - Math.max(0, Math.min(1, rect.top / windowHeight));

  // TEXT: Zoom langsam (1 bis 2.5)
  const textScale = 1 + scrollProgress * 1.5;
  text.style.transform = `translate(-50%, -50%) scale(${textScale})`;

  // BILD: wird eingeblendet & zoomt leicht mit
  if (scrollProgress > 0.4) {
    const imgProgress = (scrollProgress - 0.4) / 0.6; // normalisieren
    const imageScale = 0.4 + imgProgress * 0.6;
    image.style.opacity = `${Math.min(imgProgress, 1)}`;
    image.style.transform = `translate(-50%, -50%) scale(${imageScale})`;
  } else {
    image.style.opacity = 0;
    image.style.transform = `translate(-50%, -50%) scale(0.4)`;
  }

  requestAnimationFrame(animateOnScroll);
}

requestAnimationFrame(animateOnScroll);
