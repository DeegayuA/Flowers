onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    setRandomFlowerColor();
    clearTimeout(c);
  }, 1000);
};

function setRandomFlowerColor() {
  // Generate a random hue (0-360)
  const hue = Math.floor(Math.random() * 360);

  // Create HSL colors (using the same saturation and lightness)
  const color1 = `hsl(${hue}, 70%, 80%)`;          // Lighter shade for the main color
  const color2 = `hsl(${hue}, 80%, 50%)`;          // Darker shade for the gradient

   // Set the CSS variables
  document.documentElement.style.setProperty('--flower-color', color1);
  document.documentElement.style.setProperty('--flower-gradient-top', color2);

  // Remove the "not-loaded" class to start animations *after* the color is set
  document.body.classList.remove('not-loaded');
}

// Call the function when the window has fully loaded
 window.onload = setRandomFlowerColor;