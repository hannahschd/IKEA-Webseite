const section = document.querySelector(".zoom-section");
const text = document.querySelector(".zoom-text");
const image = document.querySelector(".zoom-image");
const icons = document.querySelectorAll(".icon"); // NEU

function animateOnScroll() {
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const scrollProgress = 1 - Math.max(0, Math.min(1, rect.top / windowHeight));

  // TEXT ZOOM
  const textScale = 1 + scrollProgress * 1.5;
  text.style.transform = `translate(-50%, -50%) scale(${textScale})`;

  // BILD ZOOM
  if (scrollProgress > 0.4) {
    const imgProgress = (scrollProgress - 0.4) / 0.6;
    const imageScale = 0.4 + imgProgress * 0.6;
    image.style.opacity = `${Math.min(imgProgress, 1)}`;
    image.style.transform = `translate(-50%, -50%) scale(${imageScale})`;
  } else {
    image.style.opacity = 0;
    image.style.transform = `translate(-50%, -50%) scale(0.4)`;
  }

  // ICON ANIMATION (NEU)
  icons.forEach(icon => {
  if (scrollProgress > 0.4) {
    const iconProgress = (scrollProgress - 0.4) / 0.6; // normalisieren auf 0–1
    const iconScale = 1 + iconProgress * 0.3;
    const iconOpacity = iconProgress > 1 ? 1 : iconProgress;
    icon.style.opacity = iconOpacity;
    icon.style.transform = `scale(${iconScale})`;
  } else {
    icon.style.opacity = 0;
    icon.style.transform = "scale(1)";
  }
});

  requestAnimationFrame(animateOnScroll);
}

requestAnimationFrame(animateOnScroll);
