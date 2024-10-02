function functio(small) {
    var full = document.getElementById("imgbox");
    full.src = small.src;
}
const images = [
    "image/red_shoes1.png",
    "image/red_shoes2.png",
    "image/red_shoes3.png",
    "image/red_shoes4.png"
];
let currentIndex = 0;

function changeMainImage(smallImg) {
    const mainImage = document.getElementById("imgbox");
    mainImage.src = smallImg.src;
    currentIndex = Array.from(smallImg.parentNode.children).indexOf(smallImg);
}

function autoChangeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("imgbox").src = images[currentIndex];
}

// Change image every 3 seconds (3000 milliseconds)
setInterval(autoChangeImage, 2000);
