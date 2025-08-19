const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const overlay = document.querySelector('.overlay');

navbarToggle.addEventListener('click', () => {
	navbarToggle.classList.toggle('active');
	navbarMenu.classList.toggle('active');
	overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
	// Close everything when clicking the overlay
	navbarToggle.classList.remove('active');
	navbarMenu.classList.remove('active');
	overlay.classList.remove('active');
});

let myList = ["I love cats", "I enjoy long walks", "I am a voracious reader"];
  let count = 0;
  let spanElement = document.getElementById("changing");

  setInterval(() => {
    // Add "hide" class to start animation
    spanElement.classList.add("hide");

    // After animation finishes (0.6s), change text
    setTimeout(() => {
      spanElement.textContent = myList[count];
      spanElement.classList.remove("hide"); // bring it back
      count++;

      if (count === myList.length) {
        count = 0;
      }
    }, 600); // matches the CSS transition duration
  }, 3000);