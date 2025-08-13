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
