let page_1_bt = document.querySelectorAll(".page_1_bt");

page_1_bt.forEach(element => {
    let btn = element.querySelector("span");
    let btn_text = element.querySelector("p");

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

    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseleave", handleMouseLeave);
});



const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    repeat: true,
    multiplier: 0.3,
    scrollFromAnywhere: true,
    smartphone: {
        smooth: true,
        multiplier: 0.9
    }
    
});




  


  
  

