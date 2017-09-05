//togglemenu
function openMenu() {
    document.querySelector('#side-menu').style.width = '250' + 'px';
    document.querySelector('.nav-open').style.display = 'none';
}

function closeMenu() {
    document.querySelector('#side-menu').style.width = '0' + 'px';
    document.querySelector('.nav-open').style.display = 'block';
}