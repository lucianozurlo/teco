// SECTIONS //
let activeSection = '';
let activeBtn = '';
let activeSubmenu = '';

const toggleSection = (sectionId, btnId, subMenuId) => {
    let section = document.getElementById(sectionId);
    let btn = document.getElementById(btnId);
    let subMenu = document.getElementById(subMenuId);
    if (sectionId === activeSection) {
        scrollToTopAndClose(sectionId, btnId, subMenuId);
        Clear();
    } else {
        if (activeSection) {
            scrollToTopAndClose(activeSection, activeBtn, activeSubmenu);
        }
        section.classList.add('active');
        btn.classList.add('active');
        subMenu.classList.add('active');
        document.body.classList.add(sectionId);
        $('html, body').animate({
            scrollTop: $(section).offset().top - 54
        }, 600);
        activeSection = sectionId;
        activeBtn = btnId;
        activeSubmenu = subMenuId;
    }
}

const scrollToTopAndClose = (sectionId, btnId, subMenuId) => {
    let section = document.getElementById(sectionId);
    let btn = document.getElementById(btnId);
    let subMenu = document.getElementById(subMenuId);
    $('html, body').animate({
        scrollTop: 0
    }, 600, () => {
        section.classList.remove('active')
        btn.classList.remove('active')
        subMenu.classList.remove('active')
        document.body.classList.remove(sectionId);
    });
}

const Clear = () => {
    activeSection = '';
    activeBtn = '';
    activeSubmenu = '';
}

const Close = (activeSection, activeBtn, activeSubmenu) => {
    scrollToTopAndClose(activeSection, activeBtn, activeSubmenu);
    setTimeout(Clear, 600);
}


// STICKY-MENU //
function smoothScroll(target, offset) {
    const top = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: top - offset,
        behavior: 'smooth'
    });
}

const menuItems = document.querySelectorAll(".sticky-menu ul a");
menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = item.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        smoothScroll(targetElement, 50);
    });
});








// STICKY BAR //
window.onscroll = () => { stickyFn() };

let header = document.querySelector('#stickyHeader');
let sidemenu = document.querySelector('#stickySidemenu');
let sticky = header.offsetTop;

const stickyHeaderFn = () => {
    if (window.pageYOffset + 54 >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

const stickySidemenuFnLg = () => {
    if (window.pageYOffset - 120 >= sticky) {
        sidemenu.classList.add("sticky");
    } else {
        sidemenu.classList.remove("sticky");
    }
}
const stickySidemenuFn = () => {
    if (window.pageYOffset - 54 >= sticky) {
        sidemenu.classList.add("sticky");
    } else {
        sidemenu.classList.remove("sticky");
    }
}

let lg = window.matchMedia("(max-width: 1400px)")

const responsive = (lg) => {
    if (lg.matches) { // If media query matches
        stickySidemenuFn()
        console.log("medium")
    } else {
        stickySidemenuFnLg()
        console.log("LG")
    }
}

const stickyFn = () => {
    stickyHeaderFn()
    responsive(lg) // Call listener function at run time
    lg.addListener(responsive) // Attach listener function on state changes
};





