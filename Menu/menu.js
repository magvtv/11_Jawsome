function showSidebar (toggleId, sidebarId) {
    const toggle = document.getElementById(toggleId), sidebar = document.getElementById(sidebarId)

    if(toggle && sidebar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('show-sidebar')
            
            //toggle menu icon visibility 
            const menuIcon = toggle.getElementById('open-menu')
            const closeIcon = toggle.getElementById('close-menu')
            menuIcon.style.display = menuIcon.style.display === 'none' ? 'block' : 'none'
            closeIcon.style.display = closeIcon.style.display === 'none' ? 'block' : 'none'
        })
    }
}
showSidebar('header-toggle', 'sidebar')
