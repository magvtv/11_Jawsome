document.addEventListener('DOMContentLoaded', () => {
	// toggle the menu icon to show sidebar
	function showSidebar(toggleId, sidebarId) {
		const toggle = document.getElementById(toggleId),
			sidebar = document.getElementById(sidebarId),
			menuIcon = document.getElementById('open-menu'),
			closeIcon = document.getElementById('close-menu');

		if (toggle && sidebar) {
			toggle.addEventListener('click', () => {
				sidebar.classList.toggle('show-sidebar');

				if (sidebar.classList.contains('show-sidebar')) {
					menuIcon.style.display = 'none';
					closeIcon.style.display = 'block';
				} else {
					menuIcon.style.display = 'block';
					closeIcon.style.display = 'none';
				}
			});
		}
	}
	showSidebar('header-toggle', 'sidebar');

	// retaining the hover on active link
	

	// randomize the chat background photos
	const backgrounds = ['--bg-1', '--bg-2', '--bg-3'];
	const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
	const bgClass = document.querySelector('.bg-image');
	bgClass.style.backgroundImage = `var(${randomBackground})}`;
});
