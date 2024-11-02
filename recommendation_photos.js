// Array of image elements in the gallery
const imgElements = [
    document.getElementById("img1"),
    document.getElementById("img2"),
    document.getElementById("img3")
];

const totalImages = 10;
let currentIndexes = [0, 1, 2];

// Function to load an image
function loadImage(element, index) {
    const imageNumber = currentIndexes[index] + 1;
    element.src = `resources/recommendations/help_teaching${imageNumber}.png`;
}

// Function to update and fade an image
function updateImage(index) {
    currentIndexes[index] = (currentIndexes[index] + 3) % totalImages;
    const nextImageNumber = currentIndexes[index] + 1;
    
    imgElements[index].classList.add("fade-out");
    
    setTimeout(() => {
        imgElements[index].src = `resources/recommendations/help_teaching${nextImageNumber}.png`;
        imgElements[index].classList.remove("fade-out");
    }, 2000);
}

// Start the image loop
function startImageLoop() {
    imgElements.forEach((img, index) => loadImage(img, index));
    
    let currentImgIndex = 0;
    setInterval(() => {
        updateImage(currentImgIndex);
        currentImgIndex = (currentImgIndex + 1) % 3;
    }, 2000);
}

// Function to enlarge image
function enlargeImage(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = element.src;
}

// Function to close modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

window.onload = startImageLoop;

