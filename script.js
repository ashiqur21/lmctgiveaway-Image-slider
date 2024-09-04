// Select all the frames and thumbnails
const frames = document.querySelectorAll('.carousel-frame');
const thumbnails = document.querySelectorAll('.carousel-thumbnails div');

// Keep track of the currently active index
let currentIndex = 0;

// Function to show the frame at the specified index
function showFrame(index) {
  frames[currentIndex].classList.remove('active');
  thumbnails[currentIndex].classList.remove('active');
  currentIndex = index;
  frames[currentIndex].classList.add('active');
  thumbnails[currentIndex].classList.add('active');
}

// Event listener for the "Prev" button
document.querySelector('.prev-btn').addEventListener('click', () => {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) newIndex = frames.length - 1;
  showFrame(newIndex);
});

// Event listener for the "Next" button
document.querySelector('.next-btn').addEventListener('click', () => {
  let newIndex = (currentIndex + 1) % frames.length;
  showFrame(newIndex);
});

// Event listeners for the thumbnails
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    showFrame(index);
  });
});
