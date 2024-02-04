let page_1_bt = document.querySelector(".page_1_bt");
let btn = document.querySelector(".page_1_bt > span");
let btn_text = document.querySelector(".page_1_bt p");

function addAnimation() {
    btn.classList.add("animate-btn");
}

function removeAnimation() {
    btn.classList.remove("animate-btn");
}

function handleMouseOver() {
    btn.style.left = '74%';
    btn_text.style.left = '-30%';
    addAnimation();
}

function handleMouseLeave() {
    removeAnimation();
    btn.style.left = '0%';
    btn_text.style.left = '0%';
    
}

page_1_bt.addEventListener("mouseover", handleMouseOver);
page_1_bt.addEventListener("mouseleave", handleMouseLeave);


const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

