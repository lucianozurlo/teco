// SECTIONS //
let activeSection = '';
let activeBtn = '';
let activeHeader = '';

const toggleSection = (sectionId, btnId, headerId) => {
    let section = document.getElementById(sectionId);
    let btn = document.getElementById(btnId);
    let header = document.getElementById(headerId);
    if (sectionId === activeSection) {
        scrollToTopAndClose(sectionId, btnId, headerId);
        activeSection = '';
        activeBtn = '';
        activeHeader = '';
    } else {
        if (activeSection) {
            scrollToTopAndClose(activeSection, activeBtn, headerId);
        }
        section.classList.add('active');
        btn.classList.add('active');
        header.classList.add('active');
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 600);
        activeSection = sectionId;
        activeBtn = btnId;
        activeHeader = headerId;
    }
}

const scrollToTopAndClose = (sectionId, btnId, headerId) => {
    let section = document.getElementById(sectionId);
    let btn = document.getElementById(btnId);
    let header = document.getElementById(headerId);
    $('html, body').animate({
        scrollTop: 0
    }, 600, function () {
        section.classList.remove('active')
        btn.classList.remove('active')
        header.classList.remove('active')
    });
}

// STICKY BAR //
window.onscroll = () => { stickyFn() };

let header = document.getElementById("stickyHeader");
let sticky = header.offsetTop;

const stickyFn = () => {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


//

// SECTIONS //
let activeSection = '';
let activeBtn = '';

const toggleSection = (sectionId, btnId) => {
    let section = document.getElementById(sectionId);
    let btn = document.getElementById(btnId);
    if (sectionId === activeSection) {
        scrollToTopAndClose(sectionId, btnId);
        activeSection = '';
        activeBtn = '';
    } else {
        if (activeSection) {
            console.log('Active section')
            scrollToTopAndClose(activeSection, activeBtn);
        }
        section.classList.add('active');
        btn.classList.add('active');
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 600);
        activeSection = sectionId;
        activeBtn = btnId;
    }
}

const scrollToTopAndClose = (sectionId, btnId) => {
    let section = document.getElementById(sectionId);
    let btn = document.getElementById(btnId);
    $('html, body').animate({
        scrollTop: 0
    }, 600, () => {
        section.classList.remove('active')
        btn.classList.remove('active')
    });
}

// STICKY BAR //
window.onscroll = () => { stickyFn() };

let header = document.getElementById("stickyHeader");
let sticky = header.offsetTop;

const stickyFn = () => {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
