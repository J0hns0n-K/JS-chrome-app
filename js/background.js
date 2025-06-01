const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

const ii = document.body.style.backgroundImage = `url(${bgImage.src})`
const dd = document.body.style.backgroundRepeat = "no-repeat";
const cc = document.body.style.backgroundPosition = "center";
const bb = document.body.style.backgroundSize = "cover";