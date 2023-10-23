document.addEventListener('DOMContentLoaded', () => {
	// randomize the chat background photos
	const backgrounds = ['--bg-1', '--bg-2', '--bg-3'];
	const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    const bgClass = document.querySelector('bg-image')
    bgClass.style.backgroundImage = `var(${randomBackground})}`

	// toggle the menu icon to show sidebar
	function showSidebar(toggleId, sidebarId) {
		const toggle = document.getElementById(toggleId),
			sidebar = document.getElementById(sidebarId),
			menuIcon = toggle.getElementById('open-menu'),
			closeIcon = toggle.getElementById('close-menu');

		if (toggle && sidebar) {
			toggle.addEventListener('click', () => {
				sidebar.classList.toggle('show-sidebar');

				// if (menuIcon.style.display === 'none') {
				//     menuIcon.style.display = 'block'
				//     closeIcon.style.display = 'none'
				// } else {
				//     menuIcon.style.display = 'none'
				//     closeIcon.style.display = 'block'
				// }

				//toggle menu icon visibility
				menuIcon.style.display = menuIcon.style.display === 'none' ? 'block' : 'none';
				closeIcon.style.display = closeIcon.style.display === 'none' ? 'block' : 'none';
			});
		}
	}
	showSidebar('header-toggle', 'sidebar');
});
