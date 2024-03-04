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