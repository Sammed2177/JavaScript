// Set a timeout of 5 seconds
setTimeout(function() {
	// Hide the loading animation after 5 seconds
	document.querySelector('.loading').style.display = 'none';

	// Show the page content
	document.querySelector('.page-content').style.display = 'block';

	// Show the "Page Loaded" message after 1 second
	setTimeout(function() {
		document.querySelector('.page-loaded').classList.remove('hidden');
	}, 1000);
}, 5000);
