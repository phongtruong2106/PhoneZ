const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');



signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");

});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");

});

// back to top
// Show the button when the user scrolls down 20px from the top of the document
// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top-btn").classList.add("show");
  } else {
    document.getElementById("back-to-top-btn").classList.remove("show");
  }
};

// When the user clicks on the button, scroll to the top of the document
document.getElementById("back-to-top-btn").addEventListener("click", function () {
  // Set the duration of the scroll animation in milliseconds
  const duration = 500;
  // Calculate the distance to scroll based on the current scroll position
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const distance = scrollTop;
  // Calculate the number of frames to use for the animation
  const frames = Math.ceil(duration / 16);
  // Calculate the amount to scroll on each frame
  const step = distance / frames;
  // Define the animation function
  function animateScroll() {
    // Scroll the page by the step amount
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
      window.scrollBy(0, -step);
      requestAnimationFrame(animateScroll);
    }
  }
  // Start the animation
  animateScroll();
});


// Product Page
var menuBar = document.getElementById("menu-bar");
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    menuBar.classList.remove("hidden");
  } else {
    menuBar.classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
}