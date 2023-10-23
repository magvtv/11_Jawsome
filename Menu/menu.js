function showSidebar (toggleId, sidebarId) {
    const toggle = document.getElementById(toggleId), 
    sidebar = document.getElementById(sidebarId), 
    menuIcon = toggle.getElementById('open-menu'), 
    closeIcon = toggle.getElementById('close-menu')

    if(toggle && sidebar && menuIcon && closeIcon) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('show-sidebar')

            // if (menuIcon.style.display === 'none') {
            //     menuIcon.style.display = 'block'
            //     closeIcon.style.display = 'none'
            // } else {
            //     menuIcon.style.display = 'none'
            //     closeIcon.style.display = 'block'
            // }
            
            //toggle menu icon visibility 
            menuIcon.style.display = menuIcon.style.display === 'none' ? 'block' : 'none'
            closeIcon.style.display = closeIcon.style.display === 'none' ? 'block' : 'none'
        })
    }
}
showSidebar('header-toggle', 'sidebar')
