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

document.addEventListener('DOMContentLoaded', function() {
    let myList = ["I love cats", "I enjoy long walks", "I am a voracious reader"];
    let count = 0;
    let spanElement = document.getElementById("changing");
    
    // Add null check
    if (!spanElement) {
        console.error("Element with ID 'changing' not found!");
        return;
    }
    
    setInterval(() => {
        spanElement.classList.add("hide");
        
        setTimeout(() => {
            spanElement.textContent = myList[count];
            spanElement.classList.remove("hide");
            count++;
            if (count === myList.length) {
                count = 0;
            }
        }, 600);
    }, 3000);
});