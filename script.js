//togglemenu
function openMenu() {
    document.querySelector('#side-menu').style.width = '250' + 'px';
    document.querySelector('.nav-open').style.display = 'none';
}

function closeMenu() {
    document.querySelector('#side-menu').style.width = '0' + 'px';
    document.querySelector('.nav-open').style.display = 'block';
}

// animation on scroll
function onScroll() {
    let distance = window.pageYOffset;
    let target = 300;

    if (distance > target){
        document.querySelector(".container").style.opacity = "1";
    }else{
        document.querySelector(".container").style.opacity = "0";
    }
}
document.addEventListener('scroll', onScroll);

function onScrollR() {
    let distance = window.pageYOffset;
    let target = 700;

    if (distance > target){
        document.querySelector(".banner-child").style.transform = "translate3d(0,0,0)";
    }
}
document.addEventListener('scroll', onScrollR);