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
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    repeat: true,
    multiplier: 0.6
});

// let btn_text_box = document.querySelectorAll(".btn_text_box");
// let i = document.querySelectorAll('.btn_text_box-i');

// function con(){
//     i.style.left = '74%';
// }

// for (let b of btn_text_box) {
//     b.addEventListener("mouseover", con);
// }


