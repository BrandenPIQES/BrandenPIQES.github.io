
function openModal(imageSrc) {
    document.getElementById('modalImg').src = imageSrc;
    document.getElementById('myModal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable scrolling on the background
    applyBlur();

    // Add event listener to the modal image to close the modal when clicked
    document.getElementById('modalImg').addEventListener('click', closeModal);
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling on the background
    removeBlur();
}

function applyBlur() {
    const elementsToBlur = document.querySelectorAll('.grid-item');
    elementsToBlur.forEach(element => {
        element.style.filter = 'blur(5px)';
    });
}

function removeBlur() {
    const elementsToBlur = document.querySelectorAll('.grid-item');
    elementsToBlur.forEach(element => {
        element.style.filter = 'none';
    });
}
