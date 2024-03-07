// code for the image slider
const scroller = document.querySelectorAll(".sponsor_scroller");


if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}


function addAnimation(){
   scroller.forEach(scroll => {
    scroll.setAttribute('data-animated', true);


    const scroll_Inner = scroll.querySelector(".sponsor_images");
    const scroll_Innercontent = Array.from(scroll_Inner.children);

    scroll_Innercontent.forEach((item) =>{
        const duplicatedImages = item.cloneNode(true);

        duplicatedImages.setAttribute("aria-hidden", true);
        scroll_Inner.appendChild(duplicatedImages);
    })
   });
}


window.addEventListener('scroll', ()=>{
    let headerloop = document.querySelector("#head");
    headerloop.classList.toggle("stick", scrollY > 40)
});



// accordion
let menu = document.getElementById("mnu-btn");
let act = menu.addEventListener("click", ()=>{
    let result = document.querySelector(".accordion_menu");

    
    result.classList.add("active");


    let accordioncloser = document.querySelector("#accordionclose");

    let closeaccordion = accordioncloser.addEventListener("click", ()=>{
        result.classList.remove("active");
    })

    // menuBtn.classList.remove("active")
})



const cross = document.querySelectorAll(".questions");
cross.forEach(press=>{
    press.addEventListener("click", ()=>{
        press.classList.toggle("activated");
    })
})



const verify = document.querySelector("#mobileaccess");
const mobileshow = verify.addEventListener("click", ()=>{
    let mobileresult = document.querySelector(".verify_mobile");
    mobileresult.classList.add("mobileactivate");


    const remover = document.querySelector("#mobilecloser")
    remover.addEventListener("click", ()=>{
        mobileresult.classList.remove("mobileactivate")
    })
});