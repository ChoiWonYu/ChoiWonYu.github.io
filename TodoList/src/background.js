const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const image = document.createElement("img");
image.src = `img/${chosenImage}`;
document.body.appendChild(image);
