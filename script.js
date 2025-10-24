// Floating Fish Animation Script 🐠

// Number of fish you want
const fishCount = 6;

// Path to your fish image
const fishImage = "C:/FYP/image/B1.png";

// Container for fish
const container = document.querySelector(".fish-container");

// Create each fish
function createFish() {
    const fish = document.createElement("img");
    fish.src = fishImage;
    fish.classList.add("fish");

    // Random vertical position
    fish.style.top = Math.random() * 90 + "%";

    // Random scale (size)
    const scale = 0.6 + Math.random() * 0.6;
    fish.style.transform = `scale(${scale})`;

    // Random speed (duration)
    const duration = 12 + Math.random() * 10;
    fish.style.animationDuration = `${duration}s`;

    container.appendChild(fish);
}

// Generate fish
for (let i = 0; i < fishCount; i++) {
    createFish();
}
